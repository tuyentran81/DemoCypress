// type definitions for Cypress object "cy"
// <reference types="cypress" />
require('cypress-xpath')

class HomePage {
    

    verifyUserNameExists(userName) {
        cy.xpath("//tr[@class='heading3']/td").should('have.text', userName);
    }

    selectMenuItem(menuItem) {
        let lnkMenuItem = "//a[text()='{0}']".replace('{0}', menuItem);
        cy.xpath(lnkMenuItem).click();
    }
    
  }

  export default HomePage;