import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
let title
When('I try to save the article', () => {

    cy.get('.article-hero__headline').first().should(($div) => {
        title = $div.text();
        
    });
   
    
    cy.get('.icon-booknmark').first().click()
  
});

When('I should see that article in my saved items', () => {
    
    cy.get('.saved-article-title').should(($div) => {
        const title2 = $div.text();
        expect(title2).contains(title);
      })
    
});
