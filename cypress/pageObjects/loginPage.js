class Login
{
    //locators
    txtUserName = 'input[name="user-name"]';
    txtPassword = 'input[name="password"]';
    btnLogin = 'input[type="submit"]';
    lblProducts = 'span[class="title"]';
    txtError = 'h3[data-test="error"]';

    //methods
    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }
    
    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }
    
    clickLogin()
    {
        cy.get(this.btnLogin).click();
    }
    
    verifyLogin(products)
    {
        cy.get(this.lblProducts).should('have.text',products);
    }
    
    verifyLoginErrorMessage(errorMessage)
    {
        cy.get(this.txtError).should('have.text',errorMessage);
    }

}

export default Login;