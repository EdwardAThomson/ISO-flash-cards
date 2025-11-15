// --- DATA ---
// Modular structure to hold all topics and questions.
// Easily add new topics like 'iso27005' here.
const TOPICS_INDEX_PATH = 'data/topics.json';
let topicsMetadata = [];
const topicDataCache = {};

// --- STATE ---
let currentTopicKey = "";
let currentMode = "practice"; // 'practice' or 'test'
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let isFlipped = false;
let answerSelected = false;
let hasRevealed = false;
let sessionSize = 10; // default cards per session

// --- DOM ELEMENTS ---
const topicSelect = document.getElementById('topic-select');
const modePracticeBtn = document.getElementById('mode-practice');
const modeTestBtn = document.getElementById('mode-test');
const cardInner = document.getElementById('card-inner');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressText = document.getElementById('progress-text');
const questionIdText = document.getElementById('question-id-text');
const practiceHelper = document.getElementById('practice-helper');
const sessionSizeInput = document.getElementById('session-size');

// --- FUNCTIONS ---

/**
 * Initializes the application.
 */
async function init() {
    setLoadingState("Loading topics...");
    setModeUI();

    // Set up event listeners
    topicSelect.addEventListener('change', handleTopicChange);
    modePracticeBtn.addEventListener('click', () => handleModeChange('practice'));
    modeTestBtn.addEventListener('click', () => handleModeChange('test'));
    cardInner.addEventListener('click', handleCardClick);
    // Use only onclick for nextBtn to avoid double handlers
    nextBtn.onclick = handleNextQuestion;
    sessionSizeInput.addEventListener('change', handleSessionSizeChange);

    try {
        // Load session size from localStorage if present
        const savedSize = parseInt(localStorage.getItem('sessionSize') || '', 10);
        if (!Number.isNaN(savedSize) && savedSize > 0) {
            sessionSize = savedSize;
        }
        sessionSizeInput.value = sessionSize;

        await loadTopicsMetadata();
        populateTopicOptions();

        if (!topicsMetadata.length) {
            showLoadError("No topics available yet.");
            return;
        }

        await loadTopic(topicSelect.value);
    } catch (error) {
        console.error(error);
        showLoadError("Unable to load the study topics.");
    }
}

/**
 * Loads the topics metadata list from disk.
 */
async function loadTopicsMetadata() {
    const response = await fetch(TOPICS_INDEX_PATH);
    if (!response.ok) {
        throw new Error(`Failed to load topics index (${response.status})`);
    }
    const data = await response.json();
    topicsMetadata = Array.isArray(data.topics) ? data.topics : [];
}

/**
 * Populates the topic selector with the loaded metadata.
 */
function populateTopicOptions() {
    topicSelect.innerHTML = '';
    if (!topicsMetadata.length) {
        topicSelect.disabled = true;
        return;
    }

    topicsMetadata.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic.id;
        option.textContent = topic.title;
        topicSelect.appendChild(option);
    });

    const availableIds = topicsMetadata.map(topic => topic.id);
    if (!availableIds.includes(currentTopicKey)) {
        currentTopicKey = topicsMetadata[0].id;
    }
    topicSelect.value = currentTopicKey;
    topicSelect.disabled = false;
}

/**
 * Loads questions for the selected topic.
 */
async function loadTopic(topicKey = topicSelect.value || currentTopicKey) {
    if (!topicKey) {
        showLoadError("Please select a topic.");
        topicSelect.disabled = topicsMetadata.length === 0;
        return;
    }

    setLoadingState("Loading cards...");

    try {
        const topicData = await getTopicData(topicKey);
        if (!topicData || !Array.isArray(topicData.questions) || !topicData.questions.length) {
            showLoadError("No questions available for this topic.");
            return;
        }

        currentTopicKey = topicKey;
        topicSelect.value = topicKey;
        currentQuestionIndex = 0;
        score = 0;
        const annotatedQuestions = annotateQuestions(topicKey, topicData.questions);

        // Clamp session size to available questions and update input constraints
        const total = annotatedQuestions.length;
        const k = clampSessionSize(sessionSize, total);
        applySessionSizeInputBounds(total, k);

        currentQuestions = getQuestionsForMode(annotatedQuestions, k);
        displayQuestion();
    } catch (error) {
        console.error(error);
        showLoadError("Unable to load this topic.");
    } finally {
        topicSelect.disabled = topicsMetadata.length === 0;
    }
}

/**
 * Retrieves and caches the JSON data for a specific topic.
 */
async function getTopicData(topicKey) {
    if (topicDataCache[topicKey]) {
        return topicDataCache[topicKey];
    }

    const metadata = topicsMetadata.find(topic => topic.id === topicKey);
    if (!metadata) {
        return null;
    }

    const response = await fetch(metadata.file);
    if (!response.ok) {
        throw new Error(`Failed to load topic file ${metadata.file}`);
    }

    const data = await response.json();
    topicDataCache[topicKey] = data;
    return data;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Returns a uniform random sample of size k from array (without replacement).
 * Uses a partial Fisher-Yates shuffle for efficiency.
 */
function sampleArray(array, k) {
    const n = array.length;
    const size = Math.max(0, Math.min(k, n));
    const clone = array.slice();
    for (let i = 0; i < size; i++) {
        const j = i + Math.floor(Math.random() * (n - i));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone.slice(0, size);
}

/**
 * Adds a stable question identifier so users can track which card is shown.
 */
function annotateQuestions(topicKey, questions) {
    const prefix = (topicKey || 'topic').toUpperCase();
    return (questions || []).map((question, index) => {
        if (question.id) {
            return { ...question, _questionId: question.id };
        }
        const paddedNumber = String(index + 1).padStart(2, '0');
        return {
            ...question,
            _questionId: `${prefix}-Q${paddedNumber}`
        };
    });
}

/**
 * Returns the question order for the current mode.
 */
function getQuestionsForMode(annotatedQuestions, k) {
    const sample = sampleArray(annotatedQuestions, k).map(question => ({ ...question }));
    if (currentMode === 'practice') {
        return sample; // retain sampled order
    }
    return shuffleArray(sample); // shuffle for test mode
}

/**
 * Standardizes the card UI while data is loading or unavailable.
 */
function setLoadingState(message) {
    resetCardToQuestionSide();
    questionText.textContent = message;
    answerText.textContent = "";
    optionsContainer.classList.add('hidden');
    optionsContainer.innerHTML = '';
    nextBtn.classList.add('hidden');
    nextBtn.textContent = "Next";
    nextBtn.onclick = handleNextQuestion;
    progressText.textContent = "";
    questionIdText.textContent = "";
    practiceHelper.classList.add('hidden');
    topicSelect.disabled = true;
}

/**
 * Displays a friendly load error.
 */
function showLoadError(message) {
    setLoadingState(message);
}

/**
 * Displays the current question based on the mode.
 */
function displayQuestion() {
    // Reset card state
    resetCardToQuestionSide();
    answerSelected = false;
    hasRevealed = false;
    nextBtn.classList.add('hidden'); // Hide next button until needed

    // Check if deck is finished
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    // Get current question
    const q = currentQuestions[currentQuestionIndex];

    // Set common elements
    questionText.textContent = q.question;
    answerText.innerHTML = `<strong>${q.answer}</strong>`;
    progressText.textContent = `Card ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    // Label cards 1..k for this session; keep reference id for context
    questionIdText.textContent = `Session #${currentQuestionIndex + 1}` + (q._questionId ? ` • Ref: ${q._questionId}` : '');

    if (currentMode === 'practice') {
        optionsContainer.classList.add('hidden');
        optionsContainer.innerHTML = ''; // Clear options
        practiceHelper.classList.remove('hidden');
        // In practice, the 'next' button appears after flipping
    } else { // 'test' mode
        optionsContainer.classList.remove('hidden');
        optionsContainer.innerHTML = ''; // Clear old options
        practiceHelper.classList.add('hidden');

        // Shuffle options for the test
        const shuffledOptions = shuffleArray(
            q.options.map((option, index) => ({ text: option, isCorrect: index === q.correctIndex }))
        );

        shuffledOptions.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.dataset.correct = option.isCorrect;
            button.className = "w-full p-3 text-left bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";
            button.addEventListener('click', handleAnswerClick);
            optionsContainer.appendChild(button);
        });
    }
}

/**
 * Forces the card to show the question side.
 */
function resetCardToQuestionSide() {
    isFlipped = false;
    cardInner.classList.remove('is-flipped');
}

/**
 * Ensures the UI reflects that the answer has been revealed.
 */
function enterRevealPhase() {
    if (hasRevealed) return;
    hasRevealed = true;
    nextBtn.classList.remove('hidden');

    if (currentMode === 'practice') {
        practiceHelper.classList.add('hidden');
    }
}

/**
 * Handles the user selecting an answer in Test mode.
 */
function handleAnswerClick(e) {
    if (answerSelected) return; // Prevent multiple clicks
    answerSelected = true;

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';

    if (isCorrect) {
        score++;
        selectedBtn.classList.remove('bg-gray-50', 'hover:bg-gray-100');
        selectedBtn.classList.add('bg-green-100', 'border-green-400', 'ring-green-500');
    } else {
        selectedBtn.classList.remove('bg-gray-50', 'hover:bg-gray-100');
        selectedBtn.classList.add('bg-red-100', 'border-red-400', 'ring-red-500');
    }

    // Highlight the correct answer
    Array.from(optionsContainer.children).forEach(btn => {
        if (btn.dataset.correct === 'true' && !isCorrect) {
             btn.classList.add('bg-green-100', 'border-green-400');
        }
        btn.disabled = true; // Disable all buttons
    });

    // Flip card to show explanation and show next button
    setTimeout(() => {
        if (!isFlipped) {
            flipCard();
        }
        enterRevealPhase();
    }, 700); // Wait for feedback to be seen
}

/**
 * Shows the final results screen.
 */
function showResults() {
    practiceHelper.classList.add('hidden');
    optionsContainer.classList.add('hidden');
    questionIdText.textContent = "";

    if (currentMode === 'practice') {
        questionText.textContent = "Practice Complete!";
        answerText.textContent = "You've reviewed all the cards. Feel free to restart or switch topics!";
    } else {
        const percentage = Math.round((score / currentQuestions.length) * 100);
        questionText.textContent = "Test Complete!";
        answerText.innerHTML = `You scored <strong>${score} out of ${currentQuestions.length} (${percentage}%)</strong>.`;
    }

    // Show card back with results
    if (!isFlipped) flipCard();

    progressText.textContent = "All done!";
    nextBtn.textContent = "Restart";
    // Make 'next' button a restart button
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = () => {
        nextBtn.textContent = "Next";
        nextBtn.onclick = handleNextQuestion; // Reset click handler
        loadTopic(currentTopicKey);
    };
}

/**
 * Flips the card.
 */
function flipCard() {
    isFlipped = !isFlipped;
    cardInner.classList.toggle('is-flipped');
}

/**
 * Handles the card click event (for practice mode).
 */
function handleCardClick() {
    if (currentMode === 'practice') {
        flipCard();
        if (isFlipped) {
            enterRevealPhase();
        }
        return;
    }

    if (currentMode === 'test' && hasRevealed) {
        flipCard();
    }
}

/**
 * Handles the "Next" button click.
 */
function handleNextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

/**
 * Handles changing the topic.
 */
function handleTopicChange() {
    loadTopic(topicSelect.value);
}

/**
 * Handles changing the mode.
 */
function handleModeChange(newMode) {
    currentMode = newMode;
    setModeUI();
    loadTopic(currentTopicKey);
}

/**
 * Handles changes to session size (K).
 */
function handleSessionSizeChange() {
    const currentTotal = topicDataCache[currentTopicKey]?.questions?.length || 0;
    sessionSize = clampSessionSize(parseInt(sessionSizeInput.value, 10) || 1, currentTotal);
    sessionSizeInput.value = sessionSize;
    localStorage.setItem('sessionSize', String(sessionSize));
    loadTopic(currentTopicKey);
}

/**
 * Clamp session size (K) to [1..N] where N is total questions.
 */
function clampSessionSize(k, total) {
    const t = Math.max(0, total | 0);
    if (t <= 0) return 0;
    const v = Math.max(1, k | 0);
    return Math.min(v, t);
}

/**
 * Update the input min/max bounds and align value to allowed range.
 */
function applySessionSizeInputBounds(total, k) {
    sessionSizeInput.min = String(total > 0 ? 1 : 0);
    sessionSizeInput.max = String(total);
    // Keep displayed value in range
    const clamped = clampSessionSize(k || parseInt(sessionSizeInput.value, 10) || 1, total);
    sessionSizeInput.value = clamped;
    sessionSize = clamped;
    localStorage.setItem('sessionSize', String(sessionSize));
}

/**
 * Updates the UI to reflect the current mode.
 */
function setModeUI() {
    if (currentMode === 'practice') {
        modePracticeBtn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
        modePracticeBtn.classList.remove('bg-gray-200', 'text-gray-700');
        modeTestBtn.classList.add('bg-gray-200', 'text-gray-700');
        modeTestBtn.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
    } else { // 'test'
        modeTestBtn.classList.add('bg-blue-600', 'text-white', 'shadow-md');
        modeTestBtn.classList.remove('bg-gray-200', 'text-gray-700');
        modePracticeBtn.classList.add('bg-gray-200', 'text-gray-700');
        modePracticeBtn.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
    }
}

// --- START ---
// Wait for the DOM to be fully loaded before initializing.
document.addEventListener('DOMContentLoaded', init);
