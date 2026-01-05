class Products
{
    //locators
    filterContainer = 'select[class="product_sort_container"]';
    prodBackpack = 'a[id="item_4_title_link"]';
    addToCartBtn1 = 'button[id="add-to-cart-sauce-labs-backpack"]';
    addToCartBtn2 = 'button[id="add-to-cart-sauce-labs-bolt-t-shirt"]';
    cartICon = 'a[class="shopping_cart_link"]';
    cartValue = 'span[class="shopping_cart_badge"]';
    firstProduct = '(//div[@class="inventory_item"])[1]';
    productTile = '.inventory_item';
    productName = '.inventory_item_name';
    expectedProductName = 'Sauce Labs Onesie';

    
    //methods

    openFilterContainer()
    {
        cy.get(this.filterContainer).select('Price (low to high)');
    }

    verifyFirstProductName(expectedProductName)
    {
        
        cy.get(this.productTile)
        .first()
        .find(this.productName)
        .should('have.text', expectedProductName);
        
       
    }

    priceFilter()
    {
        cy.get(this.filterLowToHigh).trigger('mouseover').click();
    }

    verifyProductName(txtBackpack)
    {
        cy.get(this.prodBackpack).should('have.text',txtBackpack).click();
    }

    chooseProducts()
    {
        cy.get(this.addToCartBtn1).click();
        cy.get(this.addToCartBtn2).click();
    }

    verifyCartIconValue()
    {
        cy.get(this.cartValue).should('have.text',"2");
    }

    
    clickToCartIcon()
    {
        cy.get(this.cartICon).click();
    }
    

    

}

export default Products;
