import LoginPage from '../../page/loginPage';
import HomePage from '../../page/homePage';
import NewCustomer from "../../page/newCustomerPage";
import CustomerRegistration from "../../page/customerRegPage";

describe('Add Customer', function() {
    it('Create new customer', function() {
        const loginPage = new LoginPage();
        const homePage = new HomePage();
        const newCustomerPage = new NewCustomer();
        const cusRegPage = new CustomerRegistration();
        
        // Navigate to the URL http://demo.guru99.com/v4/ then login
        loginPage.login(this.data.username, this.data.password);
        
        // Click on left menu then select New Customer link
        homePage.selectMenuItem('New Customer');

        // Verify that the New Customer page loaded
        newCustomerPage.verifyPageTitleExists('Add New Customer');

        // Fill in information then click on Submit button
        newCustomerPage.createNewCustomer(this.customerData.name, this.customerData.gender, this.customerData.dob, this.customerData.address,
                                            this.customerData.city, this.customerData.state, this.customerData.pin, this.customerData.mobileNo, 
                                            this.customerData.email, this.customerData.password);
        // Verify that system created new customer successfully
        cusRegPage.verifyCustomerRegInfo(this.customerData.name, this.customerData.gender, this.customerData.address, 
                                        this.customerData.city, this.customerData.state);
      })
  })