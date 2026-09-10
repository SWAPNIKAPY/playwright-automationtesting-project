# Playwright Automation – AutomationTesting Demo

Personal QA Automation portfolio project created with **Playwright + JavaScript** using the public Automation Testing demo website.

## Application under test

https://demo.automationtesting.in/

Main practice page:

https://demo.automationtesting.in/Register.html

## What this project demonstrates

### Playwright web automation
- Locators
- Assertions
- Text boxes and input fields
- Radio buttons
- Checkboxes
- Dropdowns
- Auto-complete
- Date picker
- File upload
- Alerts
- Windows/tabs
- Frames
- Drag and drop
- Mouse and keyboard actions
- Screenshots and reports

### Playwright API automation
The API examples are kept separately because the AutomationTesting demo site is primarily a UI practice application. API automation is demonstrated using Playwright's `request` fixture against a public demo API.

### CI/CD
GitHub Actions runs the Playwright test suite automatically on pushes and pull requests.

## Project structure

```text
playwright-automationtesting-demo/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   └── RegisterPage.js
├── tests/
│   ├── register.spec.js
│   ├── autocomplete.spec.js
│   ├── interactions.spec.js
│   └── api.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Run locally

```bash
npm install
npx playwright install
npm test
```

Run headed:

```bash
npm run test:headed
```

View the HTML report:

```bash
npm run test:report
```

## CI/CD

The GitHub Actions workflow:
1. Checks out the repository.
2. Installs Node.js dependencies.
3. Installs Chromium for Playwright.
4. Runs the Playwright test suite.
5. Uploads the Playwright HTML report.

## Interview-ready topics

This project is designed to support discussion of the Playwright topics practiced by Swapnika, including:

- Locators
- Web elements and actions
- Assertions
- Auto-waiting
- Handling dropdowns, checkboxes and radio buttons
- Alerts and browser events
- Multiple pages/windows
- Frames
- File upload
- Drag and drop
- Date picker
- Fixtures
- Page Object Model
- API automation with Playwright
- Playwright configuration
- Git/GitHub
- CI/CD with GitHub Actions

## Important

This is a personal practice/portfolio project. It contains no company source code, credentials, private test data or confidential information.
