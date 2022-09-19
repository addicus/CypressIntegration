// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')
//import env from '../fixtures/environmentVariables.json'

import "./commands";
import "cypress-axe";

const TEST_URL = Cypress.env('stag').baseURL
const queryString = Cypress.env('stag').queryString
const testEmail = Cypress.env('stag').gridUserName
const testPassword = Cypress.env('stag').gridPassword

const COOKIE_NAME = "OptanonAlertBoxClosed";

const COOKIE_VALUE = "2022-01-21T14:50:34.052Z";


Cypress.on("window:before:load", window => {
    window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
  });
 

