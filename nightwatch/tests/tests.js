const functions = require('../supporting/functions')
const selectors = require('../supporting/selectors')

module.exports = {
    beforeEach : browser => {
        browser.url('https://cards-beta.devclock.com/')
            .waitForElementPresent('body', 5000)
    },
    // after : browser => {
    //      browser.end()
    // },
    //'Sign up with email & pw (DJP-41)' : browser => functions.signUpWithEmail(browser, selectors),
    //'Sign up with Google (DJP-42)' : browser => functions.signUpWithGoogle(browser, selectors),
    //'Login with email & pw (DJP-44)' : browser => functions.loginWithEmail(browser),
    //'Logout (DJP-46)' : browser => functions.logOut(browser),
    //'Edit settings (DJP-56)' : browser => functions.editSettings(browser),
    'Legal stuff (DJP-55)' : browser => functions.legalStuff(browser),

}