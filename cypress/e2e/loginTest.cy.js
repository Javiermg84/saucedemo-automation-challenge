import Login from "../pageObjects/loginPage";

describe('pom', () => {

    it('Login-Test-Negative', () => { 
        
        cy.fixture('fixtureData').then((data) => {
       
        const login = new Login();

        //negative login test
        cy.visit("https://www.saucedemo.com/")
        login.setUserName(data.username_invalid);
        login.setPassword(data.password_invalid);
        login.clickLogin();
        login.verifyLoginErrorMessage(data.login_error_message);

        
        })
    })


    it('Login-Test' , () => {   
        cy.visit("https://www.saucedemo.com/")

        cy.fixture('fixtureData').then((data) => {
       
        const login = new Login();
        
        //positive login test
        login.setUserName(data.username_valid);
        login.setPassword(data.password_valid);
        login.clickLogin();
        login.verifyLogin(data.title_verification);

        })
    })

    
})
