# ISO Standards Study Hub

A small, static web app to study ISO standards using flashcards and multiple‑choice quizzes. Current question decks focus on Info Sec, Risk Management, and AI. The app uses session‑based K‑of‑N sampling so each session can be a random subset of questions.

**Disclaimer**: This is an unofficial study tool — not affiliated with or endorsed by ISO.

## Features
- Practice and Test modes
- Random K‑of‑N session sampling (no bias), labeled 1..K per session
- Reference IDs retained for traceability (do not affect session numbering)
- Simple, fast static hosting — no backend required

## Quick Start
Because the app loads JSON via `fetch`, open it via a local web server (not the `file://` protocol), e.g.:

- Python 3: `python3 -m http.server 8000`
- Node (serve): `npx serve .`
- Node (http-server): `npx http-server -p 8000`

Then open `http://localhost:8000` and navigate to `index.html`.

## Usage
- Select a topic at the top.
- Choose Practice or Test mode.
- Set “Cards this session” to any K; the app samples K questions from the topic’s N questions.
- Practice keeps the sampled order; Test shuffles the sample.
- Progress displays “Card i of K”; a “Ref:” ID shows the source question reference.

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

## Contributing
- PRs and improvements welcome.
- Please keep any new question/answer wording original and avoid copying text from ISO standards.
