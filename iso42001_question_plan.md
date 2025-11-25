# ISO 42001 coverage plan

## 1. Where we are now

- **Current 42001 deck** ([data/iso42001.json](cci:7://file:///home/edward/Projects/ISO-flash-cards/data/iso42001.json:0:0-0:0)):
  - ~7 questions.
  - Themes: AIMS concept, lifecycle coverage, governance/accountability, AIMS manual, AI‑related risk, data governance, continual improvement.
  - Style: high‑level, conceptual, 4‑option MCQs, non‑normative wording (good for copyright).

So far you have “broad intro” coverage, not clause‑by‑clause depth.

---

## 2. Define a simple coverage map

Because I shouldn’t reproduce standard text, let’s use **your copy of ISO 42001** to do mapping, but structure the plan like this:

### 2.1 Coverage axes

- **Axis A – Clause / domain buckets**  
  For example (you’ll map these to actual clause numbers/section names in the standard):
  - A1: Scope & AIMS basics  
  - A2: Context & stakeholders (AI‑specific context)  
  - A3: Leadership, policy, roles & responsibilities  
  - A4: AI risk & impact management  
  - A5: Data & model governance (training, validation, monitoring)  
  - A6: AI lifecycle operations (design, development, deployment, change)  
  - A7: Human oversight, incidents, ethics & responsible AI principles  
  - A8: Performance evaluation & continual improvement

- **Axis B – Cognitive level**
  - L1: Recognition / definition (terms, basic concepts).
  - L2: Understanding / compare‑contrast (why/when, linkages).
  - L3: Application / scenario (given a situation, what should org do).

### 2.2 Target question counts

For “comprehensive but manageable” coverage:

- **Per bucket (A1–A8)**:
  - 4–6 × L1
  - 4–6 × L2
  - 4–8 × L3 (scenario)
- That gives ~12–20 questions per bucket → **~100–150 questions total** for ISO 42001.

We can always phase this (e.g. phase 1 target: 6–8 questions per bucket, then deepen).

---

## 3. Question design rules (to stay consistent & safe)

- **Format** (matches your app):
  - `question`: single clear prompt, no quotations from the standard.
  - `answer`: concise explanation, in your own words.
  - `options`: 4 options, one clearly best, 1–2 plausible distractors.
  - `correctIndex`: 0‑based correct answer.
  - Optional `id`: I recommend adding explicit IDs for 42001.

- **ID scheme proposal**
  - `ISO42001-<Bucket><Level>-<NN>`  
    Examples:
    - `ISO42001-A3L1-01` – Leadership basics, recognition.
    - `ISO42001-A5L3-04` – Data governance scenario.
  - That makes it easy to audit coverage later.

- **Content constraints**
  - Paraphrase: describe requirements/principles in your own words.
  - Avoid copying sentences or clause text.
  - For scenarios: use simple, realistic org situations where the “right” answer reflects the principle, not the verbatim clause.

---

## 4. Repeatable workflow for adding batches of questions

### Step 1 – Pick a small slice

- Choose **one bucket** (e.g. A3 Leadership) for a given work session.
- Clarify **learning goals** for that bucket:
  - Example for Leadership: “Learner can explain what leadership must do for AIMS, how policy is expressed, and who’s accountable.”

### Step 2 – Draft question outline (no JSON yet)

Use your own notes or a scratch doc/spreadsheet:

- For each new question, list:
  - `ID` (proposed, like `ISO42001-A3L2-02`).
  - `Type` (L1, L2, L3).
  - Very short note of what it tests (e.g. “policy content vs objectives”, “top management accountability”).

Aim for a small batch, e.g. **10 questions per working session**.

### Step 3 – Write full questions & answers

For each outline entry:

- Write:
  - Stem (question).
  - Correct answer explanation.
  - 3 distractors that are:
    - Consistent with ISO style (management system thinking).
    - Clearly incorrect on one important dimension (scope, responsibility, completeness, timing, etc.).

You can do this in plain text or a separate JSON-ish draft file we don’t load in the app yet.

### Step 4 – Review pass

- Self‑check or peer‑review:
  - **No copying** of clause text.
  - Question unambiguous, only one obviously best correct choice.
  - IDs are unique and match bucket/level.
  - Balance of difficulty: not all pure memory; include “what should they do” decisions.

Once a batch passes review, we integrate it.

### Step 5 – Integrate into [iso42001.json](cci:7://file:///home/edward/Projects/ISO-flash-cards/data/iso42001.json:0:0-0:0)

- Append to the `"questions"` array:
  - Add `id` using the scheme above.
  - Ensure commas/JSON are valid.
- Then:
  - Run your existing test app locally (`python3 -m http.server 8000`, etc.).
  - Spot‑check:
    - New questions appear.
    - Test mode options shuffle, scoring behaves correctly.
  - (Optionally) add/update tests to ensure [iso42001.json](cci:7://file:///home/edward/Projects/ISO-flash-cards/data/iso42001.json:0:0-0:0) stays structurally sound.

We can also write a **simple JSON validator test** later (e.g. ensuring `options.length === 4` and `0 <= correctIndex < options.length` for all questions).

---

## 5. Phased roadmap

To keep it realistic:

- **Phase 1 – “Good coverage” (~40–50 Q)**
  - Add 5–6 questions for each of A1–A4 first (foundational concepts, governance, risk).
- **Phase 2 – “Deep lifecycle & data” (~80–100 Q)**
  - Build out A5–A7 with more L2/L3 scenario questions.
- **Phase 3 – “Exam‑style polish”**
  - Fill gaps in the coverage grid.
  - Add trickier discriminators (subtle scenarios, trade‑offs).