const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const catalogobject = require('../pageobjects/Catalog.page');
const checkoutobject = require('../pageobjects/Checkout.page');


Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});


When(/^User clicks Catalog link$/,()=>{
    homeobject.navigateToCatalogPage();
});


When(/^User clicks "Logige sisse"$/,()=>{
    catalogobject.clickTopLoginButton();
});

When(/^User clicks form login button$/,()=>{
    catalogobject.clickLoginButton();
});


When(/^User clicks on Item link$/,()=>{
    catalogobject.clickFirstItem();
});

When(/^User enters valid credentials into login form$/,()=>{
    catalogobject.fillUserNameField();
    catalogobject.fillPasswordField();
});



When(/^User clicks on Add to cart item button$/,()=>{
    catalogobject.clickAddToCartButton();
});

Then(/^User moves to Catalog page$/,()=>{
    catalogobject.verifyCatalogPage();
})
Then(/^item should be added to the cart$/, ()=>{
    catalogobject.clickOpenCartTotal();  
})

Then(/^User is logged in$/, ()=>{
    catalogobject.verifyUserLoggedIn();  
})



When(/^user credentials should be entered$/,()=>{
    checkoutobject.loginAsRegisteredUser();
});

