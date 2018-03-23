const selectors = require('../supporting/selectors')

let setInputValue = (browser, selector, value) => {
    browser
        .clearValue(selector)
        .setValue(selector, value)
        .assert.value(selector, value)
}
/**
 * Sign up a new user with an email address and password. Accept the TOS and Privary Policy.
 * @param {object} browser Nightwatch object
 * @param {string} selectors selectors for inputs and buttons
 */
let signUpWithEmail = browser => {
    browser.waitForElementPresent(selectors.signup.selectedTab, 1000)
    browser.expect.element(selectors.signup.selectedTab).text.to.equal('LOGIN')
    browser.click(selectors.signup.signUpTab)
    browser.expect.element(selectors.signup.selectedTab).text.to.equal('SIGN UP')
    setInputValue(browser, selectors.signup.emailInput, 'dan15@dan.com')
    setInputValue(browser, selectors.signup.passwordInput, 'dandan')
    setInputValue(browser, selectors.signup.confirmPWInput, 'dandan')
    browser.click(selectors.signup.signUpButton)
    browser.waitForElementPresent(selectors.signup.tosAcceptButton, 5000)
    browser.pause(3000)
    browser.click(selectors.signup.tosAcceptButton)
    browser.waitForElementPresent(selectors.signup.getStartedButton, 5000)
    browser.pause(3000)
    browser.click(selectors.signup.getStartedButton)
}
/**
 * Sign up a new user with a Google account. Accept the TOS and Privacy Policy.
 * @param {object} browser Nightwatch object
 * @param {string} selectors selectors for inputs and buttons
 */
let signUpWithGoogle = browser => {
    browser.waitForElementPresent(selectors.signup.selectedTab, 1000)
    browser.expect.element(selectors.signup.selectedTab).text.to.equal('LOGIN')
    browser.click(selectors.signup.signUpTab)
    browser.expect.element(selectors.signup.selectedTab).text.to.equal('SIGN UP')
    browser.click(selectors.signup.signUpWithGoogleButton)
    browser.pause(3000)
    browser.waitForElementPresent(selectors.signup.googleEmailInput, 3000)
    setInputValue(browser, selectors.signup.googleEmailInput, "daniel.h.jin1@gmail.com")
    browser.click(selectors.signup.googleEmailNext)
}

/**
 * Log in with email and password.
 * @param {object} browser the Nightwatch object
 */
let loginWithEmail = browser => {
    browser.waitForElementPresent(selectors.signup.selectedTab, 1000)
    browser.expect.element(selectors.pageHeader).text.to.equal('Login')
    browser.expect.element(selectors.signup.selectedTab).text.to.equal('LOGIN')
    browser.pause(3000)
    setInputValue(browser, selectors.signup.emailInput, 'dan@dan.com')
    setInputValue(browser, selectors.signup.passwordInput, 'dandan')
    browser.click(selectors.login.emailLoginButton)
    browser.pause(5000)
    browser.waitForElementPresent(selectors.pageHeader, 1000)
    browser.expect.element(selectors.pageHeader).text.to.equal('Cards')
}

let logOut = browser => {
    loginWithEmail(browser)
    browser.waitForElementPresent(selectors.pageHeader, 3000)
    browser.pause(3000)
    browser.expect.element(selectors.pageHeader).text.to.equal('Cards')
    browser.useXpath()
    browser.click(selectors.mainMenu.logOut)
    browser.pause(2000)
    browser.useCss()
    browser.expect.element(selectors.pageHeader).text.to.equal('Login')
}

let editSettings = browser => {
    loginWithEmail(browser)
    browser.waitForElementPresent(selectors.pageHeader, 3000)
    browser.pause(3000)
    browser.expect.element(selectors.pageHeader).text.to.equal('Cards')
    browser.useXpath()
    browser.waitForElementPresent(selectors.mainMenu.settings, 2000)
    browser.click(selectors.mainMenu.settings)
    browser.useCss()
    browser.waitForElementPresent(selectors.settings.editSettings, 3000)
    browser.pause(3000)
    browser.click(selectors.settings.editSettings)
    browser.useXpath()
    browser.click(selectors.settings.authenticateButton)
    browser.useCss()
    browser.waitForElementPresent(selectors.signup.emailInput, 2000)
    browser.pause(2000)
    setInputValue(browser, selectors.signup.emailInput, 'dan@dan.com')
    setInputValue(browser, selectors.signup.passwordInput, 'dandan')
    browser.useXpath()
    browser.click(selectors.settings.reauthenticate)
    browser.useCss()
    browser.waitForElementPresent(selectors.settings.editSettings, 3000)
    browser.pause(3000)
    browser.click(selectors.settings.editSettings)
    setInputValue(browser, selectors.settings.nameInput, 'Dannnn Jinnnn')
    browser.useXpath()
    browser.click(selectors.settings.settingsSaveButton)
}

let legalStuff = browser => {
    loginWithEmail(browser)
    browser.waitForElementPresent(selectors.pageHeader, 3000)
    browser.pause(3000)
    browser.expect.element(selectors.pageHeader).text.to.equal('Cards')
    browser.useXpath()
    browser.waitForElementPresent(selectors.mainMenu.settings, 2000)
    browser.click(selectors.mainMenu.settings)
    browser.waitForElementVisible(selectors.settings.termsOfUse, 2000)
    browser.click(selectors.settings.termsOfUse)
    browser.waitForElementVisible(selectors.settings.tosHeader, 2000)
    browser.expect.element(selectors.settings.tosHeader).text.to.equal('Terms of Use')
    browser.useCss()
    browser.click(selectors.settings.backButton)
    browser.useXpath()
    browser.waitForElementVisible(selectors.settings.privacyPolicy, 2000)
    browser.click(selectors.settings.privacyPolicy)
    browser.waitForElementVisible(selectors.settings.tosHeader, 2000)
    browser.expect.element(selectors.settings.tosHeader).text.to.equal('Privacy Policy')
}

module.exports = {
    signUpWithEmail : signUpWithEmail,
    signUpWithGoogle : signUpWithGoogle,
    loginWithEmail : loginWithEmail,
    logOut : logOut,
    editSettings : editSettings,
    legalStuff : legalStuff,
}