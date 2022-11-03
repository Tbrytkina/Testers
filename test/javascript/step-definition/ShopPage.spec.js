const { Given, When, Then } = require('@cucumber/cucumber');
//const homeobject = require('../pageobjects/Home.page');
const shopobject = require('../pageobjects/ShopPage');



Given(/^User is on Catalog page$/,()=>{
    shopobject.open(); 
    shopobject.verifyCurrentPage();
});

When(/^User clicks on first visible product item$/,()=>{
    shopobject.clickFirstVisibleItem();
});

When(/^User clicks button Lisage Ostukorvi$/,()=>{
    shopobject.clickLisageOstukorvi();
});





