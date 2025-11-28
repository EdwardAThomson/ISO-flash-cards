// --- LEARN MODE ---
// Loads and displays markdown summaries for each topic/area.

const TOPICS_INDEX_PATH = 'data/topics.json';
let topicsMetadata = [];
let currentTopicKey = '';
let currentAreaKey = 'overview';

// --- DOM ELEMENTS ---
const topicSelect = document.getElementById('topic-select');
const areaSelect = document.getElementById('area-select');
const areaFilterContainer = document.getElementById('area-filter-container');
const contentContainer = document.getElementById('content-container');

// --- SUMMARY PATH MAPPING ---
// Maps topic IDs to their summary directory
const SUMMARY_PATHS = {
    'iso27001': 'data/summaries/iso',
    'iso27005': 'data/summaries/iso',
    'iso31000': 'data/summaries/iso',
    'iso42001': 'data/summaries/iso',
    'euaiact': 'data/summaries/euaiact',
    'nistrmf': 'data/summaries/nistrmf'
};

// --- FUNCTIONS ---

/**
 * Initializes the learning mode page.
 */
async function init() {
    showLoading('Loading topics...');

    topicSelect.addEventListener('change', handleTopicChange);
    areaSelect.addEventListener('change', handleAreaChange);

    try {
        await loadTopicsMetadata();
        populateTopicOptions();

        if (!topicsMetadata.length) {
            showError('No topics available.');
            return;
        }

        await loadContent(topicSelect.value, 'overview');
    } catch (error) {
        console.error(error);
        showError('Unable to load topics.');
    }
}

/**
 * Loads the topics metadata list.
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
 * Populates the topic selector dropdown.
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

    currentTopicKey = topicsMetadata[0].id;
    topicSelect.value = currentTopicKey;
    topicSelect.disabled = false;

    updateAreaSelector(topicsMetadata[0]);
}

/**
 * Updates the area selector based on the selected topic.
 */
function updateAreaSelector(topicMeta) {
    areaSelect.innerHTML = '';

    // Always add "Overview" option
    const overviewOption = document.createElement('option');
    overviewOption.value = 'overview';
    overviewOption.textContent = 'Overview';
    areaSelect.appendChild(overviewOption);

    // Add area-specific options if the topic has areas
    if (topicMeta.areas && topicMeta.areas.length > 0) {
        // Filter out the "all" option since we use "overview" instead
        const specificAreas = topicMeta.areas.filter(area => area.id !== 'all');
        
        specificAreas.forEach(area => {
            const option = document.createElement('option');
            option.value = area.id;
            option.textContent = area.title;
            areaSelect.appendChild(option);
        });

        areaFilterContainer.classList.remove('hidden');
    } else {
        areaFilterContainer.classList.add('hidden');
    }

    currentAreaKey = 'overview';
    areaSelect.value = 'overview';
}

/**
 * Loads and displays markdown content for the selected topic/area.
 */
async function loadContent(topicKey, areaKey) {
    showLoading('Loading content...');

    currentTopicKey = topicKey;
    currentAreaKey = areaKey;

    const summaryDir = SUMMARY_PATHS[topicKey];
    if (!summaryDir) {
        showError('Summary not available for this topic yet.');
        return;
    }

    // Build the markdown file path
    let filename;
    if (areaKey === 'overview') {
        filename = `${topicKey}_overview.md`;
    } else {
        filename = `${topicKey}_${areaKey}.md`;
    }

    const filePath = `${summaryDir}/${filename}`;

    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            if (response.status === 404) {
                showPlaceholder(topicKey, areaKey);
                return;
            }
            throw new Error(`Failed to load content (${response.status})`);
        }

        const markdown = await response.text();
        renderMarkdown(markdown);
    } catch (error) {
        console.error(error);
        showPlaceholder(topicKey, areaKey);
    }
}

/**
 * Renders markdown content to HTML.
 */
function renderMarkdown(markdown) {
    // Configure marked for safe rendering
    marked.setOptions({
        breaks: true,
        gfm: true
    });

    const html = marked.parse(markdown);
    contentContainer.innerHTML = html;
}

/**
 * Shows a placeholder when content is not yet available.
 */
function showPlaceholder(topicKey, areaKey) {
    const topicMeta = topicsMetadata.find(t => t.id === topicKey);
    const topicTitle = topicMeta ? topicMeta.title : topicKey;

    let sectionTitle = 'Overview';
    if (areaKey !== 'overview' && topicMeta?.areas) {
        const area = topicMeta.areas.find(a => a.id === areaKey);
        sectionTitle = area ? area.title : areaKey;
    }

    contentContainer.innerHTML = `
        <div class="text-center py-12">
            <h2 class="text-xl font-semibold text-gray-600 mb-4">Content Coming Soon</h2>
            <p class="text-gray-500 mb-2">
                The summary for <strong>${topicTitle}</strong> — <em>${sectionTitle}</em> is not yet available.
            </p>
            <p class="text-gray-400 text-sm">
                Check back later or contribute to the project!
            </p>
        </div>
    `;
}

/**
 * Shows a loading message.
 */
function showLoading(message) {
    contentContainer.innerHTML = `<p class="text-gray-500 text-center">${message}</p>`;
}

/**
 * Shows an error message.
 */
function showError(message) {
    contentContainer.innerHTML = `<p class="text-red-500 text-center">${message}</p>`;
}

/**
 * Handles topic selection change.
 */
function handleTopicChange() {
    const topicKey = topicSelect.value;
    const topicMeta = topicsMetadata.find(t => t.id === topicKey);

    if (topicMeta) {
        updateAreaSelector(topicMeta);
        loadContent(topicKey, 'overview');
    }
}

/**
 * Handles area selection change.
 */
function handleAreaChange() {
    loadContent(currentTopicKey, areaSelect.value);
}

// --- START ---
document.addEventListener('DOMContentLoaded', init);
