/// <reference types="Cypress" />


describe('Search', () => {
    beforeEach(() => {
        cy.viewport(1024,768)
        cy.intercept('POST', 'https://firebaseremoteconfig.googleapis.com/v1/projects/illo-news-dev/namespaces/fireperf:fetch?key=AIzaSyDgs7gVYoyHYzGl4DlgmzTxUzBLNwvX2co', 
        {
            statusCode: 400,
            body: {
                "error": {
                    "code": 400,
                    "message": "INVALID_PASSWORD",
                    "errors": [
                      {
                        "message": "INVALID_PASSWORD",
                        "domain": "global",
                        "reason": "invalid"
                      }
                    ]
                  }
            },
        })
        cy.visit('/signin')
    
        

    })
 /*
    context('Search submission prompt should be focused on click', () => {
        it.only('opens search prompt', () =>{
          
            cy.get('.queryly_search_button').click()
            cy.focused().should('have.class', 'queryly-search_input')

        }) 

    })

    */
    context('Logs in', () => {
        it.only('logs in incorrectly', () =>{
 
            cy.get('#signin_email_input')
            .type("aalago@mediainvestmentprojects.com")

            cy.get('.input-clear-down ')
            .type("c")

            cy.get(".btn-global-primary")
            .click()
  

            

            

        }) 

    })
    
 })