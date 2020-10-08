const SauceDemoPage = require('../pageobjects/saucedemo.page');
const CartPage = require('../pageobjects/cart.page');

describe('Login - Checkout - Logout', () => {
    it('Login - Checkout - Logout', () => {
        SauceDemoPage.open();

        SauceDemoPage.login('standard_user', 'secret_sauce');
        SauceDemoPage.addToCart();
        SauceDemoPage.goToCart();
        expect(CartPage.productInfo).toBeExisting();
        expect(CartPage.productInfo).toHaveTextContaining(
            'Sauce Labs Fleece Jacket');
        SauceDemoPage.clickCheckout();
        SauceDemoPage.fillCheckOutInformation('demo', 'user', '93015');
        SauceDemoPage.clickContinue();
        expect(CartPage.productInfo).toBeExisting();
        expect(CartPage.productInfo).toHaveTextContaining(
            'Sauce Labs Fleece Jacket');
        SauceDemoPage.clickFinish();
        expect(CartPage.headerInfo).toBeExisting();
        expect(CartPage.headerInfo).toHaveTextContaining(
            'THANK YOU FOR YOUR ORDER');
        
    });
});


