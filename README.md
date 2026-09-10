# Playwright Automation Testing Project

Personal QA Automation portfolio project created using **Playwright with JavaScript** to practice and demonstrate web application testing concepts.

The project uses the public **AutomationTesting.in** demo website and includes automated test scenarios covering common web application interactions and Playwright features.

The project also demonstrates **API automation using Playwright** and **CI/CD integration for Playwright test execution using GitHub Actions**.

Personal QA Automation portfolio project created with **Playwright + JavaScript** using the public Automation Testing demo website.

## Application under test


**Website:** https://demo.automationtesting.in/

**Main Practice Page:** https://demo.automationtesting.in/Register.html

The project uses the public AutomationTesting.in demo website for practicing and demonstrating Playwright automation concepts.
## Tools & Technologies

- Playwright
- JavaScript
- Node.js
- Git
- GitHub
- GitHub Actions
## What I Automated

- Registration form automation
- Locators and assertions
- Text box, radio button and checkbox interactions
- Dropdown handling
- Autocomplete functionality
- Date picker
- File upload
- Alerts
- Frames
- Drag and drop
- API automation using Playwright
- Automated test execution with GitHub Actions

## Project Structure

```text
playwright-automationtesting-project/
│
├── pages/
│   └── RegisterPage.js
│
├── tests/
│   ├── register.spec.js
│   ├── autocomplete.spec.js
│   ├── interactions.spec.js
│   └── api.spec.js
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## How to Run

### Install Dependencies

```bash
npm install

## CI/CD with GitHub Actions

GitHub Actions is configured to automatically execute the Playwright test suite when changes are pushed to the repository or when a pull request is created.

The workflow:

- Installs project dependencies
- Installs Playwright browsers
- Executes Playwright tests
- Generates the Playwright test report
- Uploads the test report as an artifact

This demonstrates CI/CD integration specifically for Playwright test execution.

## Test Reports

Playwright generates an HTML test report after test execution.

The report can be viewed locally using:

```bash
npx playwright show-report

## Key Playwright Concepts Demonstrated

- Locators
- Assertions
- Web element interactions
- Dropdowns, radio buttons and checkboxes
- Autocomplete
- Date picker
- File upload
- Alerts
- Frames
- Drag and drop
- Page Object Model (POM)
- API automation using Playwright
- Git and GitHub
- CI/CD integration for Playwright using GitHub Actions

## Important Note

This is a personal Playwright practice and portfolio project created using a public demo website.

No company source code, confidential information, or proprietary test data is included in this repository.
