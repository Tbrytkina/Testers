const Page = require('./Page');
const allure = require('wdio-allure-reporter');
const utilObj = require( '../helper/WaitActions')


class HomePage extends Page {

    
    get firmastLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(1) > a'); }
    get latestNewsLink() { return $("#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(2) > a"); }
    get catalogLink() { return $('#hp > div.main > div.header.box > div.slogan > ul > li:nth-child(3) > a'); }
  
    /**
     * Method to verofy if current page is dashboard else navigate to dashboard
     */
    verifyCurrentPage() {
        let currentPage = browser.getTitle();
        if (currentPage.includes("Info Dekoor")) {
            allure.createStep('User is on Dashboard');
        }
        else {           
            //super.dashboardLink.click();
            //allure.addDescription("open the server instance");
        }
    }

    /**
     * Method to navigate to home page
     */
    navigateToHomepage() {
        utilObj.waitForDefaultTimeOut()
        if (super.homePageLink.isDisplayed()) {
            super.homePageLink.click()
            utilObj.waitForPageToLoad()
        }
        else {
            utilObj.waitForDefaultTimeOut()
            super.reportsLink.waitForExist(utilObj.defaultwait)
            super.reportsLink.click()
            utilObj.waitForDefaultTimeOut()
            super.homePageLink.waitForExist(utilObj.defaultwait)
            super.homePageLink.click()
            browser.pause(5000);
        }
    }

    /**
     * Verify admin can changes its password
     */
    verifyAdminCanChangeCredentials(){
        utilObj.waitForDefaultTimeOut();
        super.adminNameClass.click();
        super.adminDivModel.waitForExist(30000);
    }

    navigateToCatalogPage() {
        utilObj.waitForDefaultTimeOut();
        this.catalogLink.click();
    }

    navigateToAboutPage() {
        utilObj.waitForDefaultTimeOut();
        this.firmastLink.click();
    }

    clickTopMenuLink(topmenulink) {
        if (topmenulink=='Firmast') {
            this.firmastLink.click();
        }
        else if (topmenulink=='Viimased uudised') {
            this.latestNewsLink.click()
        }
        else {
            throw "Some error"
        }
    }

    verifyPageUrl(url){
        let currentPageUrl = browser.getUrl();
        console.log(currentPageUrl)
        if (currentPageUrl==url) {

        }
        else {
            throw "Url error"
        }
    }

}
//module.exports = new HomePage();
module.exports = new HomePage();