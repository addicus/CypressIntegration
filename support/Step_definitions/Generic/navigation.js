import { expect } from 'chai';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
  // The name of the cookie holding whether the user has accepted
// the cookie policy
const COOKIE_NAME = "2022-01-21T14:50:34.052Z";
// The value meaning that user has accepted the cookie policy
const COOKIE_VALUE = "OptanonAlertBoxClosed";
let baseURL = Cypress.env('stag').baseURL
let queryString = Cypress.env('stag').queryString
let testEmail = Cypress.env('stag').gridUserName
let testPassword = Cypress.env('stag').gridPassword



Given('I am in {string}', viewport => {
  if (viewport ==="1024,768")
  {
    cy.viewport(1024,768)
  }
  else
  {
    cy.viewport(viewport)
  }
  
});

Given('I navigate to {string}', link => {
  Cypress.on("window:before:load", window => {
    window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
  });
    cy.visit(link)
    cy.injectAxe()
});





Then ('I should be redirected to {string}', url => {

  cy.url().should('include', url) 

});
   
Then ('I should be redirected to the home page', () => {

  cy.url().should('include', baseURL) 

});

Then ('I navigate to {string}', link => {
  cy.visit(link)
  cy.injectAxe()
});    