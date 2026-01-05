class cart

{
    //locators
    
    cartItemName1 = 'a[id="item_4_title_link"]'; 
    cartItemName2 = 'a[id="item_1_title_link"]';
    checkoutBtn = 'button[id="checkout"]';
    removeBtn1 = 'button[id="remove-sauce-labs-backpack"]';
    removeBtn2 = 'button[id="remove-sauce-labs-bolt-t-shirt"]';
   

    //methods    

    verifyItemsInCart(expectedName1, expectedName2)
    {
        
        cy.get(this.cartItemName1).should('have.text', expectedName1);
        cy.get(this.cartItemName2).should('have.text', expectedName2);
            
      
    }
    
    proceedToCheckout()
    {
        cy.get(this.checkoutBtn).click();
    }
    
    removeItemsFromCart()
    {
        cy.get(this.removeBtn1).click();
        
    }

    verifyItemIsRemoved(cartItemName1)
    {
        cy.get(cartItemName1).should('not.exist');
    }

   

}

export default cart;