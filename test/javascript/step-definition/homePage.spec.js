const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');


Given(/^User is on dashboarde$/,()=>{
    var title = browser.getTitle();
    //console.log(title);
    homeobject.open(); 
    homeobject.adminLogin();
    homeobject.verifyCurrentPage();
});

When(/^Select the home button$/,()=>{
    homeobject.navigateToHomepage();
});

When(/^User clicks topmenu link (.*)$/,(topmenulink)=>{
    homeobject.clickTopMenuLink(topmenulink);
});

Then(/^page is opened and url is equal to (.*)$/,(url)=>{
    homeobject.verifyPageUrl(url);
})

//Then page is opened and url is equal to <url>

Then(/^User moves to home page$/,()=>{
    homeobject.verifyHomePage();
})