# DemoGuru
This is a demo project written in Cypress

- First setup:
  npm install -g cypress

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