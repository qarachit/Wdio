const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SauceDemoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('input[type="submit"]') }
    get divAddToCart () { return $('//div[contains(text(), "Sauce Labs Fleece Jacket")]/parent::a/parent::div/parent::div//button[contains(text(), "ADD TO CART")]') }
    get linkCart () { return $('a[class="shopping_cart_link fa-layers fa-fw"]') }
    get linkCheckout () { return $('a[class="btn_action checkout_button"]') }
    get inputFirstName () { return $('#first-name') }
    get inputLastName () { return $('#last-name') }
    get inputZip () { return $('#postal-code') }
    get inputContinue () { return $('input[value="CONTINUE"]')}
    get linkFinish () { return $('//a[contains(text(), "FINISH")]') }
    get btnOpenMenu () { return $('//button[contains(text(), "Open Menu")]') }
    get linkLogout () { return $('#logout_sidebar_link') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    addToCart () {
        this.divAddToCart.click();
    }

    goToCart () {
        this.linkCart.click();
    }

    clickCheckout () {
        this.linkCheckout.click();
    }

    fillCheckOutInformation (firstname, lastname, zip) {
        this.inputFirstName.setValue(firstname);
        this.inputLastName.setValue(lastname);
        this.inputZip.setValue(zip);
    }

    clickContinue () {
        this.inputContinue.click();
    }

    clickFinish () {
        this.linkFinish.click();
    }

    logout () {
        this.btnOpenMenu.click();
        this.linkLogout.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new SauceDemoPage();
