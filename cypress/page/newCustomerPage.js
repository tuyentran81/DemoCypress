// type definitions for Cypress object "cy"
// <reference types="cypress" />
require('cypress-xpath')

class NewCustomer {
    txtCustomerName = "//input[@name='name']";
    rdMale = "//input[@value='m']";
    rdFemale = "//input[@value='f']";
    txtDoB = "//input[@name='dob']";
    txtAddress = "//textarea[@name='addr']";
    txtCity = "//input[@name='city']";
    txtState = "//input[@name='state']";
    txtPIN = "//input[@name='pinno']";
    txtMobileNo = "//input[@name='telephoneno']";
    txtEmail = "//input[@name='emailid']";
    txtPassword = "//input[@name='password']";
    btnSubmit = "//input[@name='sub']";

    verifyPageTitleExists(expectedTitle) {
        cy.xpath("//p[@class='heading3']").should('have.text', expectedTitle);
    }

    createNewCustomer(customerName, gender, birthDay, address, city, state, pinNo, mobileNo, email, password) {
        cy.xpath(this.txtCustomerName).type(customerName);
        if (gender == "male") 
            cy.xpath(this.rdMale).click();
        else
            cy.xpath(this.rdFemale).click();
        cy.xpath(this.txtDoB).type(birthDay);
        cy.xpath(this.txtAddress).type(address);
        cy.xpath(this.txtCity).type(city);
        cy.xpath(this.txtState).type(state);
        cy.xpath(this.txtPIN).type(pinNo);
        cy.xpath(this.txtMobileNo).type(mobileNo);
        cy.xpath(this.txtEmail).type(email);
        cy.xpath(this.txtPassword).type(password);
        cy.xpath(this.btnSubmit).click();
    }
    
  }

  export default NewCustomer;