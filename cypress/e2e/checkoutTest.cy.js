import Products from "../pageObjects/productsPage";
import Login from "../pageObjects/loginPage";
import Cart from "../pageObjects/cartPage";
import Checkout from "../pageObjects/checkoutPage";


describe('chckOut', () => {

   it('chckOut_Process', () => { 
        
        cy.fixture('fixtureData').then((data) => {
       
        const login = new Login();
        const products = new Products();
        const cart = new Cart();
        const checkout = new Checkout();

        cy.visit("https://www.saucedemo.com/")
        login.setUserName(data.username_valid);
        login.setPassword(data.password_valid);
        login.clickLogin();
        products.chooseProducts();
        products.clickToCartIcon();
        cart.proceedToCheckout();
        checkout.enterCheckoutInformation(data.firstName, data.lastName, data.postalCode);
        checkout.clickContinue();
        cart.verifyItemsInCart(data.txtBackpack, data.txtTshirt);
        checkout.clickFinish();
        checkout.verifyOrderCompletion(data.expectedMessage);
        checkout.clickBackHome();

        
        

        })
    })

})