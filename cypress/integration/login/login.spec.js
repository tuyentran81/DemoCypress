// type definitions for Cypress object "cy"
// <reference types="cypress" />
import LoginPage from '../../page/loginPage';
import HomePage from '../../page/homePage';

describe('Guru 99 Login', function() {   
    it('Visits the Page and Login', function() {
        const loginPage = new LoginPage();
        const homePage = new HomePage();
          
        // Navigate to the URL http://demo.guru99.com/v4/ then login    
        loginPage.login(this.data.username, this.data.password);
        
        // Verify that the username is displayed on the home page
        homePage.verifyUserNameExists('Manger Id : mngr346861');
    })
  })