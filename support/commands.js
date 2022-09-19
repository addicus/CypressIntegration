// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let baseURL = Cypress.env('stag').baseURL
let queryString = Cypress.env('stag').queryString
let testEmail = Cypress.env('stag').gridUserName
let testPassword = Cypress.env('stag').gridPassword

Cypress.Commands.add('typeLogin', (user) => {
    
    cy.get('input[name=email]').type(user.email);
    try {

        cy.get('input[name=password]').type(user.password);
        }
    catch (error)
        {
            console.error(error);
        }  
    finally
    {
        cy.get('input[name=password]').type("{enter}");
    }
  })

  