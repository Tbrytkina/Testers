const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const shopobject = require('../pageobjects/ShopPage');



Given(/^User is on Catalog page$/,()=>{
    shopobject.open(); 
    shopobject.verifyCurrentPage();
    browser.pause(5000)
});

When(/^User clicks on first visible product item$/,()=>{
    shopobject.clickFirstVisibleItem();
});

When(/^User clicks button Lisage Ostukorvi$/,()=>{
    shopobject.clickLisageOstukorvi();
});

/*Then(/^item should in the cart$/,()=>{
    shopobject.verifyItemAddedToCart();
});*/

Then(/^item should be in the cart$/,()=>{
    shopobject.verifyItemAddedToCart();
});





