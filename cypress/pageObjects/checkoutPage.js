class checkout
{
    //locators      
    firstNameInput = 'input[id="first-name"]';
    lastNameInput = 'input[id="last-name"]';
    postalCodeInput = 'input[id="postal-code"]';
    continueBtn = 'input[id="continue"]';
    finishBtn = 'button[id="finish"]';
    completeHeader = 'h2[class="complete-header"]';
    backHomeBtn = 'button[id="back-to-products"]';

    //methods       
   
    enterCheckoutInformation(firstName, lastName, postalCode)
    {
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.postalCodeInput).type(postalCode);
    }       
    
    clickContinue()
    {
        cy.get(this.continueBtn).click();
    }
    
    clickFinish()
    {
        cy.get(this.finishBtn).click();
    }

    verifyOrderCompletion(expectedMessage)
    {
        cy.get(this.completeHeader).should('have.text', expectedMessage);
    }
    
    clickBackHome()
    {
        cy.get(this.backHomeBtn).click();
        cy.get('title').should('have.text', 'Swag Labs');
    }  
}

export default checkout;