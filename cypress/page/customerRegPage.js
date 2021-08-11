// type definitions for Cypress object "cy"
// <reference types="cypress" />
require('cypress-xpath')

class CustomerRegistration {
    lblMsg = "//p[@class='heading3']";
    tblCustomerInfo = "//table[@name='customer']";

    verifyCustomerRegInfo(customerName, gender, address, city, state) {
        cy.xpath(this.lblMsg).should('have.text', "Customer Registered Successfully!!!");
        cy.xpath(this.tblCustomerInfo).get('td').should('have.text', customerName);
        cy.xpath(this.tblCustomerInfo).get('td').should('have.text', gender);
        cy.xpath(this.tblCustomerInfo).get('td').should('have.text', address);
        cy.xpath(this.tblCustomerInfo).get('td').should('have.text', city);
        cy.xpath(this.tblCustomerInfo).get('td').should('have.text', state);
    
    }

    getCustomerId() {
        return cy.xpath("//tr/td[text()='Customer ID']/following-sibling::td");
    }
    
  }

  export default CustomerRegistration;