import Products from "../pageObjects/productsPage";
import Login from "../pageObjects/loginPage";
import Cart from "../pageObjects/cartPage";


describe('cart', () => {

   it('verify_cart', () => { 
        
        cy.fixture('fixtureData').then((data) => {
       
        const login = new Login();
        const products = new Products();
        const cart = new Cart();

        cy.visit("https://www.saucedemo.com/")
        login.setUserName(data.username_valid);
        login.setPassword(data.password_valid);
        login.clickLogin();
        products.chooseProducts();
        products.clickToCartIcon();
        cart.verifyItemsInCart(data.txtBackpack, data.txtTshirt);
        cart.removeItemsFromCart();
        cart.verifyItemIsRemoved(cart.cartItemName1);
        cart.proceedToCheckout();
        

        })
    })

})