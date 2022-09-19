import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';



let testEmail = Cypress.env('stag').gridUserName
let testPassword = Cypress.env('stag').gridPassword



describe('Hero story card topic tag should direct to landing page', () => {
  
    it('Visits the Homepage', () => {
      cy.visit('/')

      cy.get('.article-hero').within(($card) => {
      cy.get('.story-section-chip').first().invoke('text').then((text1) => {
      cy.get('.story-section-chip').first().click()
      cy.url().should('contains',text1.toLowerCase()) 

      }
      )
    })
  })
  })

  describe('Hero story card title should direct to correct article', () => {
  
    it('Hero story card title should direct to correct article', () => {
    let title1;
    cy.visit('/')
    cy.get('.article-hero').within(($card) => {
     
      
      cy.get('.article-hero__headline-link').first().should(($div) => {
          title1 = $div.text();
      });
          
      
      cy.get('.article-hero__headline-link').first().click()
      
    
  })
  

      cy.get('.article-hero__headline').should(($div) => {
        const title2 = $div.text();
        expect(title1).equal(title2);
      })

    
    
  })  })





describe('Hero story card author name should direct to correct author profile', () => {
  
  it('Hero story card author name should direct to correct author profile', () => {
  let title1;
  cy.visit('/')
  cy.get('.article-hero').within(($card) => {
   
    
    cy.get('[class*="ByLine__ByLineLink"]').first().should(($div) => {
        title1 = $div.text();
    });
        
    
    cy.get('[class*="ByLine__ByLineLink"]').first().click()
    
  
})


    cy.get('.author-info__name').should(($div) => {
      const title2 = $div.text();
      expect(title1).equal(title2);
    })

  
  
})  })


describe('Hero story card image should direct to correct article', () => {
  
  it('Hero story card image should direct to correct article', () => {
  let title1;
  cy.visit('/')
  cy.get('.article-hero').within(($card) => {
   
    
    cy.get('.article-hero__headline-link').first().should(($div) => {
        title1 = $div.text();
    });
        
    // Should ask baha to add a cypress selector for this 
    cy.get('*[class^="Image__StyledPicture"]').first().click()
    
  
})


    cy.get('.article-hero__headline').should(($div) => {
      const title2 = $div.text();
      expect(title1).equal(title2);
    })

  
  
})  })



describe('Hero story card bookmark prompts login', () => {
  
  it('Hero story card bookmark prompts login', () => {
  
  cy.clearLocalStorage()
  cy.clearCookies() 
  indexedDB.deleteDatabase('firebaseLocalStorageDb');
  cy.log('clearing Storage')
  cy.visit('/')
 
  
  let title1
  cy.get('.article-hero').within(($card) => {
   
    
    cy.get('.article-hero__headline-link').first().should(($div) => {
        title1 = $div.text();
    });
        
    
    cy.get('.icon-booknmark').first().click()
    
  
})

    cy.typeLogin({ email: testEmail , password: testPassword })

 

    cy.get('.article-hero').within(($card) => {
   
    cy
    .get('.icon-booknmarked')
    .should('be.visible');

    cy.get('.article-hero__headline').first().should(($div) => {
      const title2 = $div.text();
      expect(title1).equal(title2);
    })

  
  
})  })

})


   


  describe('Story card topic tag should direct to landing page', () => {

    it('Story card topic tag should direct to landing page', () => {
      cy.visit('/')

      cy.get('.card-item').within(($card) => {


      

      cy.get('.story-section-chip').first().invoke('text').then((text1) => {
        
      cy.get('.story-section-chip').first().click()
      
      
      cy.url().should('contains',text1.toLowerCase()) 

      }
    

      )
    })
  })
  })



  describe('Story card title should direct to correct Article', () => {
  
    it('Story card title should direct to correct Article', () => {
    let title1;
    cy.visit('/')
    cy.get('.card-item').within(($card) => {
     
      
      cy.get('.headline').first().should(($div) => {
          title1 = $div.text();
      });
          
      
      cy.get('.headline').first().click()
      
    
  })
  

      cy.get('.article-hero__headline').should(($div) => {
        const title2 = $div.text();
        expect(title1).equal(title2);
      })

    
    
  })  })


  describe('Story card author name should direct to correct author profile', () => {
  
    it('Story card author name should direct to correct author profile', () => {
    let title1;
    cy.visit('/')
    cy.get('.card-item').within(($card) => {
     
      
      cy.get('.author-avatar-item__link').first().should(($div) => {
          title1 = $div.text();
      });
          
      
      cy.get('.author-avatar-item__link').first().click()
      
    
  })
  

      cy.get('.author-info__name').should(($div) => {
        const title2 = $div.text();
        expect(title1).equal(title2);
      })

    
    
  })  })





describe('Story card title should direct to correct Article', () => {
  
  it('Story card title should direct to correct Article', () => {
  let title1;
  cy.visit('/')
  cy.get('.card-item').within(($card) => {
   
    
    cy.get('.headline').first().should(($div) => {
        title1 = $div.text();
    });
        
    
    cy.get('.story-card-image').first().click()
    
  
})


    cy.get('.article-hero__headline').should(($div) => {
      const title2 = $div.text();
      expect(title1).equal(title2);
    })

  
  
})  })




describe('Hero story card bookmark prompts login', () => {
  
  it('Hero story card bookmark prompts login', () => {
  
  let title1
  cy.clearLocalStorage()
  cy.clearCookies() 
  indexedDB.deleteDatabase('firebaseLocalStorageDb');
  cy.log('clearing storage')
  cy.visit('/')
   
  cy.get('.card-item').within(($card) => {
   
    
    cy.get('.headline').first().should(($div) => {
        title1 = $div.text();
    });       
    
    cy.get('.icon-booknmark').first().click()
      
})

    cy.typeLogin({ email: testEmail , password: testPassword })
    cy.get('.card-item').within(($card) => {
    cy
    .get('.icon-booknmarked')
    .should('be.visible');

    cy.get('.headline').first().should(($div) => {
      const title2 = $div.text();
      expect(title1).equal(title2);
    })

  
  
})  })

})
