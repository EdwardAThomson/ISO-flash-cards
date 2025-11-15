/*
 Simple test runner for sampling and session logic.
 Run with: node tests/sampling.test.js
*/

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function dummyEl() {
  return {
    addEventListener: () => {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    innerHTML: '',
    textContent: '',
    value: '',
    disabled: false,
    onclick: null,
    dataset: {},
    appendChild: () => {},
    remove: () => {},
    setAttribute: () => {},
  };
}

// Minimal browser stubs so app.js can be evaluated
const context = {
  console,
  document: {
    getElementById: () => dummyEl(),
    addEventListener: () => {}, // Do not auto-call init
  },
  localStorage: {
    getItem: () => null,
    setItem: () => {},
  },
  window: {},
  Math: Math,
};

vm.createContext(context);

const appJs = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
vm.runInContext(appJs, context, { filename: 'app.js' });

// Grab functions/vars from the evaluated context
const sampleArray = context.sampleArray;
const shuffleArray = context.shuffleArray;
const clampSessionSize = context.clampSessionSize;
const getQuestionsForMode = context.getQuestionsForMode;

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function approxEqual(a, b, tol = 1e-9) {
  return Math.abs(a - b) <= tol;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function multisetEqual(a, b) {
  if (a.length !== b.length) return false;
  const map = new Map();
  for (const x of a) map.set(x, (map.get(x) || 0) + 1);
  for (const x of b) {
    if (!map.has(x)) return false;
    const c = map.get(x) - 1;
    if (c === 0) map.delete(x); else map.set(x, c);
  }
  return map.size === 0;
}

function run() {
  console.log('Running sampling tests...');

  // Basic properties
  {
    const N = 50, K = 7;
    const arr = Array.from({ length: N }, (_, i) => i);

    for (let t = 0; t < 1000; t++) {
      const s = sampleArray(arr, K);
      assert(s.length === K, 'sampleArray returns wrong size');
      const uniq = new Set(s);
      assert(uniq.size === K, 'sampleArray has duplicates');
      for (const x of s) assert(x >= 0 && x < N, 'sampleArray element out of range');
    }
  }

  // Inclusion roughly uniform across indices
  {
    const N = 100, K = 10, TRIALS = 3000;
    const arr = Array.from({ length: N }, (_, i) => i);
    const counts = Array(N).fill(0);
    for (let t = 0; t < TRIALS; t++) {
      const s = sampleArray(arr, K);
      for (const x of s) counts[x]++;
    }
    const p = K / N;
    const mean = TRIALS * p;
    const sd = Math.sqrt(TRIALS * p * (1 - p));
    const maxDeviations = Math.max(...counts.map(c => Math.abs(c - mean) / sd));
    // With 3000 trials and K=10, 6 sd is a very loose but robust bound
    assert(maxDeviations < 6, `Inclusion counts deviate too much: max z=${maxDeviations.toFixed(2)}`);
  }

  // Parity (odd/even) not biased
  {
    const N = 100, K = 10, TRIALS = 4000;
    const arr = Array.from({ length: N }, (_, i) => i);
    let oddPicks = 0, evenPicks = 0;
    for (let t = 0; t < TRIALS; t++) {
      const s = sampleArray(arr, K);
      for (const x of s) {
        if (x % 2 === 0) evenPicks++; else oddPicks++;
      }
    }
    const total = oddPicks + evenPicks;
    const ratioOdd = oddPicks / total;
    const delta = Math.abs(ratioOdd - 0.5);
    // Allow 3% tolerance
    assert(delta < 0.03, `Odd/even imbalance too high: |odd-0.5|=${(delta*100).toFixed(2)}%`);
  }

  // getQuestionsForMode respects k and mode
  {
    const N = 30, K = 8;
    const annotated = Array.from({ length: N }, (_, i) => ({ _questionId: `Q${i}`, question: `q${i}`, options: ['a'], correctIndex: 0 }));

    context.currentMode = 'practice';
    const practice = getQuestionsForMode(annotated, K);
    assert(practice.length === K, 'practice: wrong length');
    // verify all from source
    for (const q of practice) assert(/^Q\d+$/.test(q._questionId), 'practice: bad element');

    context.currentMode = 'test';
    const testA = getQuestionsForMode(annotated, K);
    const testB = getQuestionsForMode(annotated, K);
    assert(testA.length === K && testB.length === K, 'test: wrong length');
    // They are samples; not necessarily same; check valid items
    for (const q of testA) assert(/^Q\d+$/.test(q._questionId), 'test: bad element');
    // Order likely different between A/B; not enforced, but at least ensure not always identical to practice order
    // Compare IDs to check if identical ordering occurs too frequently (probabilistically rare).
    const idsA = testA.map(q => q._questionId);
    const idsB = testB.map(q => q._questionId);
    // They could be equal by chance; don't assert inequality.
  }

  // clampSessionSize
  {
    assert(clampSessionSize(5, 10) === 5, 'clamp: within bounds');
    assert(clampSessionSize(0, 10) === 1, 'clamp: floor to 1');
    assert(clampSessionSize(999, 3) === 3, 'clamp: cap to total');
    assert(clampSessionSize(5, 0) === 0, 'clamp: no questions yields 0');
  }

  console.log('All sampling tests passed.');
}

try {
  run();
} catch (err) {
  console.error('Test failure:', err.message);
  process.exit(1);
}

