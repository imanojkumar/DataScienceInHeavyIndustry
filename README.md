# Data Science in Heavy Industry: From Raw Data to Operational Intelligence

A technical book project built as a Single Page Application (SPA) using Quarto, Vanilla JavaScript, and pure CSS.

## Tech Stack
* **Authoring Environment:** RStudio & Quarto
* **Architecture:** Quarto Custom Website (Master-Include architecture)
* **Styling:** Pure CSS (CSS Variables, no frameworks)
* **Interactivity:** Vanilla JavaScript (No React/Vue)
* **Deployment:** GitHub Actions CI/CD to GitHub Pages

## Local Development
1. Open the project folder in RStudio (or VS Code with the Quarto extension).
2. Open the terminal and run: `quarto preview`
3. The site will open in your browser and automatically update as you edit the `.qmd` files.

## Deployment
This project uses a custom GitHub Actions workflow (`.github/workflows/publish.yml`). Every push to the `main` branch automatically renders the Quarto site and deploys the `_site/` directory to GitHub Pages.