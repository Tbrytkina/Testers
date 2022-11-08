const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class ShopPage extends Page {

    //get CatalogLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(3) > a""]'); }
    get cart() { return $('#cart')};
    get firstPictureInCart() { return $('#cart > div.content > div.mini-cart-info > table > tbody > tr > td.image > a > img')};
    //get firstPictureInCart() { return $('#cart > div.content > div.mini-cart-info > table > tbody > tr:nth-child(2) > td.image > a > img')};
    get firstItem() { return $('#content > table > tbody > tr:nth-child(4) > td:nth-child(1) > a > b')};
    get secondItem() { return $('#content > table > tbody > tr:nth-child(4) > td:nth-child(2) > a > b')};
    get addToCartButton() { return $('#content > div.product-list > div > div.right > div > input')};
    //get buttonLisageOstukorvi() { return $('#content > div.product-grid > div > div.cart > input')};
    get buttonLisageOstukorvi() { return $('#content > div.product-list > div > div.cart > input')};
    get cartWithItem() { return $('#cart-total')};
    get checkoutLink() { return $('#cart > div.content > div.checkout > a:nth-child(2)')};
    get topLoginButton() { return $('#welcome > table > tbody > tr > td:nth-child(1) > a > input')};
    get loginButton() { return $('#content > div.login-content > div.right > form > div > input.button')};
    get userNameField() { return $('#content > div.login-content > div.right > form > div > input[type=text]:nth-child(4)')};
    get passwordField() { return $('#content > div.login-content > div.right > form > div > input[type=password]:nth-child(9)')};
    get logoutLink() { return $('#welcome > a:nth-child(3)')};
    
    
    open() {
        browser.navigateTo("https://infodekoor-uat.gammatest.net/index.php")        
    }
    
    verifyCurrentPage() {
        let currentPage = browser.getTitle();        
        if (currentPage.includes("Info Dekoor")) {
            allure.createStep('User is on Info Dekoor');
        }
        else {
            throw "Page is wrong"
        }
    }

    clickFirstVisibleItem() {
        utilObj.waitForDefaultTimeOut()
        this.firstItem.click();
    }

    clickLisageOstukorvi() {
        utilObj.waitForDefaultTimeOut()
        this.addToCartButton.click();                
    }
    
    verifyItemAddedToCart() {
        utilObj.waitForDefaultTimeOut()
        //browser.pause(5000);
        this.cartWithItem.click();
        browser.pause(5000);
        if (this.firstPictureInCart.isDisplayed())
        {
            allure.createStep('Item is added');
        }
        else
        {
            throw "Item is not added"
        }        
    }
   

}
//module.exports = new HomePage();
module.exports = new ShopPage();