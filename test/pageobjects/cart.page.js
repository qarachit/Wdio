const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get productInfo () { return $('div[class="inventory_item_name"]') }
    get headerInfo () { return $('h2[class="complete-header"]') }
}

module.exports = new CartPage();
