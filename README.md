# DemoGuru
This is a demo project written in Cypress

- Make sure that you already installed NodeJS (latest version)
- Install Cypress:
  npm install cypress --save-dev

Set up the 3rd party libraray
 1. cypress-xpath
 Installation:
    npm i -D cypress-xpath
2. Set up mochawesome report
  a. Install Mocha
    npm install mocha --save-dev
  b. Install cypress-multi-reporters
    npm install cypress-multi-reporters --save-dev
  c. Install mochawesome
    npm install mochawesome --save-dev
  d. Install mochawesome-merge
    npm install mochawesome-merge --save-dev
  e. Install mochawesome-report-generator
    npm install mochawesome-report-generator --save-dev
  f. Add the reporter to cypress.json file
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": true,
            "json": true
        }
    }
  g. Run test script
3. To run all test scripts: npm run cy:run test
4. Structure:
This automation project is using Page Object Model to contains classes.
The page folder contains classes for each page: LoginPage, HomePage, NewCustomerPage and CustomerRegistrationPage.
The fixtures folder contains the test data.
The Integration folder contains the test case.
The Reports folder contains the report after running. This folder is automatically created after running.