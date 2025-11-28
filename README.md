# ISO Standards Study Hub

A small, static web app to study ISO standards using flashcards and multiple‑choice quizzes. Current question decks focus on Info Sec, Risk Management, and AI. The app uses session‑based K‑of‑N sampling so each session can be a random subset of questions.

**Disclaimer**: This is an unofficial study tool — not affiliated with or endorsed by ISO.

**Disclaimer**: This questions were created by AI, not by a human. AI can make mistakes.

## Features
- Practice and Test modes
- Random K‑of‑N session sampling (no bias), labeled 1..K per session
- Reference IDs retained for traceability (do not affect session numbering)
- **Sub-area filtering** for topics with multiple sections (e.g., ISO 42001, EU AI Act, NIST AI RMF, ISO 27001)
- **Learning Mode** page with concise markdown summaries for each topic and section
- Simple, fast static hosting — no backend required

## Quick Start
Because the app loads JSON via `fetch`, open it via a local web server (not the `file://` protocol), e.g.:

- Python 3: `python3 -m http.server 8000`
- Node (serve): `npx serve .`
- Node (http-server): `npx http-server -p 8000`

Then open the URL shown in your terminal (e.g., `http://localhost:8000` or `http://127.0.0.1:8000`). The exact IP and port may vary depending on your environment.

## Usage
- Select a topic at the top.
- Choose Practice or Test mode.
- Set “Cards this session” to any K; the app samples K questions from the topic’s N questions.
- Practice keeps the sampled order; Test shuffles the sample.
- Progress displays “Card i of K”; a “Ref:” ID shows the source question reference.

### Learning Mode

- Open `learn.html` (or use the "Learning Mode" link from the main page).
- Choose a **topic** (e.g., ISO 27001, ISO 42001, EU AI Act, NIST AI RMF).
- Optionally choose a **section** (sub-area) for that topic.
- The app loads a short **markdown summary** from `data/summaries/...` and renders it to HTML using `marked.js`.

Current summary coverage:
- **ISO 27001** — Overview + sections S1–S8 (context, leadership, risk, support, access, technical controls, incidents, improvement)
- **ISO 42001** — Overview + sections A1–A8 (AIMS scope, context, leadership, risk & impact, data/model governance, lifecycle, oversight, improvement)
- **EU AI Act** — Overview + sections E1–E8 (scope, risk classes, prohibited AI, high-risk requirements, transparency, GPAI, governance, timeline)
- **NIST AI RMF** — Overview + sections N1–N8 (overview/trustworthy AI and the GOVERN, MAP, MEASURE, MANAGE functions)

## Data Format
Topics are listed in `data/topics.json`. Each topic file includes an array of questions:

```json
{
  "question": "What is ...?",
  "answer": "...",
  "options": ["A", "B", "C", "D"],
  "correctIndex": 2
}
```

- `correctIndex` is zero‑based (0 = first option).
- You can optionally add an `id` per question; if absent, the app auto‑generates a reference like `ISO27001-Q01`.

## Disclaimer
This is an unofficial study tool — not affiliated with or endorsed by ISO. “ISO” and related marks are trademarks of the International Organization for Standardization. This app summarizes concepts and does not reproduce standard text.

## License
- Code: MIT (see `LICENSE`).
- Content (Q&A in `data/*.json`): Creative Commons Attribution‑NonCommercial 4.0 International (CC BY‑NC 4.0). You may share and adapt with attribution for non‑commercial use only. Full text: https://creativecommons.org/licenses/by-nc/4.0/

See `LICENSE-CONTENT` for a summary and attribution guidance.