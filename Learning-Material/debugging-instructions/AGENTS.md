# AGENTS.md

## Project overview

This repository is a small static p5.js sketch used for debugging exercises. The project is intentionally simple and does not use a package manager, build step, or framework.

- Entry page: [index.html](index.html)
- Main sketch logic: [js/script.js](js/script.js)
- Styling: [css/style.css](css/style.css)
- Libraries: [js/libraries](js/libraries)
- Project description: [README.md](README.md)

## Working conventions

- Keep changes small and targeted. This project is a single interactive sketch, so most work happens in [js/script.js](js/script.js).
- Prefer fixing the actual bug or requested behavior instead of large refactors.
- Preserve the existing p5.js style and naming patterns unless the task explicitly asks for a broader cleanup.
- Do not add dependencies or tooling that the project does not already use.

## Formatting and code style

- Use consistent JavaScript formatting with 4-space indentation.
- Keep function names descriptive and aligned with the existing p5.js patterns.
- Preserve the project’s use of `"use strict";` and keep semicolon usage consistent with the current file.
- When editing the sketch, avoid unrelated reformatting across the file unless the task is specifically about formatting.
- If a bug is intentionally included for a debugging exercise, fix only the issue being asked for rather than rewriting nearby logic.

## Validation

There are no automated tests or build scripts in this project. Validate work by opening the page in a browser or using a local static server from the project root, for example:

```bash
python -m http.server
```

Then load the page in a browser and confirm the sketch behaves as expected.

## Debugging guidance

- Check the browser console for runtime errors when a sketch does not run.
- Use the IntelliSense and p5.js conventions already in the project rather than introducing new patterns.
- Focus on the drawing logic, canvas setup, and function calls in [js/script.js](js/script.js) before changing assets or library files.
