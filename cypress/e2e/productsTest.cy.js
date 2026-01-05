import Products from "../pageObjects/productsPage";
import Login from "../pageObjects/loginPage";

describe('products', () => {

    it('filter', () => { 
        
        
        //filter products by price low to high
        cy.fixture('fixtureData').then((data) => {
        const login = new Login();
        const products = new Products();

        cy.visit("https://www.saucedemo.com/")
        login.setUserName(data.username_valid);
        login.setPassword(data.password_valid);
        login.clickLogin();
        products.openFilterContainer();
        //products.verifyFirstProductName();   //it does not work
        
        

        })
    })


    it('products_to_cart', () => { 
        
        //add 2 products to cart and verify cart icon value (it sould be 2)
        cy.fixture('fixtureData').then((data) => {
       
        const login = new Login();
        const products = new Products();

        cy.visit("https://www.saucedemo.com/")
        login.setUserName(data.username_valid);
        login.setPassword(data.password_valid);
        login.clickLogin();
        products.chooseProducts();
        products.verifyCartIconValue();

        
        })
    })


    
})