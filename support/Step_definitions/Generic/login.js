import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let baseURL = Cypress.env('stag').baseURL
let queryString = Cypress.env('stag').queryString
let testEmail = Cypress.env('stag').gridUserName
let testPassword = Cypress.env('stag').gridPassword

Given('I am on the signin page', () => {
    cy.visit(baseURL + 'signin/' + queryString )
     
});

When('I sign in with a Grid user', ()  => {
   
    cy.typeLogin({ email: testEmail ,password: testPassword})
    
});


When('I sign in with user {string} and password {string}', (email, password)  => {
   
    cy.typeLogin({ email: email , password: password })
    
    
});


Then('I should be authenticated', () => {
    cy.get('.universal-nav__homelink').should('exist')
});


Then ('The form should contain error {string}', errorString => {
    cy.get('.form-group').should('contain', errorString);
});

Then ('The toaster notification should contain error {string}', errorString => {
cy.get('.Toastify__toast-body').should('contain', errorString);
});


