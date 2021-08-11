// type definitions for Cypress object "cy"
// <reference types="cypress" />
require('cypress-xpath')

class LoginPage {
    txtUserName = "//input[@name='uid']";
    txtPassword = "//input[@name='password']";
    btnLogin = "//input[@name='btnLogin']";

    login(usrName, password) {
      cy.xpath(this.txtUserName).type(usrName);
      cy.xpath(this.txtPassword).type(password);
      cy.xpath(this.btnLogin).click();
    }
    
  }
  export default LoginPage;