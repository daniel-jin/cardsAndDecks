module.exports = {
    'signup': {
        'loginHeader': 'label[data-bind="text: strings.title"]',
        'loginTab': '/html/body/div[2]/div[2]/div/div[1]/div[1]',
        'signUpTab': 'div[class="col-6-12 tab"]',
        'emailInput': 'input[type="email"]',
        'passwordInput': 'input[placeHolder="Password"]',
        'confirmPWInput': 'input[placeHolder="Confirm Password"]',
        'selectedTab': 'div[class="col-6-12 tab selected"]',
        'signUpButton': 'button[data-bind="click: clickSignUpWithEmail, text: strings.signUp, visible: signUpWithEmailVisible"]',
        'signUpWithGoogleButton': 'button[data-bind="click: clickLoginWithGoogle, text: strings.signUpWithGoogle, visible: signUpWithGoogleVisible"]',
        'tosLabel': 'label[data-bind="text: strings.title"]',
        'tosAcceptButton': 'button[data-bind="text: strings.accept, click: clickAccept, disable: acceptDisabled, visible: acceptVisible"]',
        'tosDeclineButton': 'button[data-bind="text: strings.decline, click: clickDecline, disable: declineDisabled, visible: declineVisible"]',
        'getStartedButton': 'button[data-bind="click: clickGetStarted, text: strings.getStarted"]',
        'googleEmailInput': 'input[type="email"]',
        'googleEmailNext': 'span[class="RveJvd snByac"]',
    },
    'login': {
        'emailLoginButton': 'button[data-bind="click: clickLoginWithEmail, text: strings.login, visible: loginWithEmailVisible"]',
    },
    'pageHeader': 'label[data-bind="text: strings.title"]',
    'mainMenu': {
        'decks': '//div[@class="grid-list"]/div[1]',
        'subscription': '//div[@class="grid-list"]/div[2]',
        'contactUs': '//div[@class="grid-list"]/div[3]',
        'settings': '//div[@class="grid-list"]/div[4]',
        'logOut': '//div[@class="grid-list"]/div[5]',
    },
    'settings': {
        'editSettings': 'label[class="icon"]',
        'authenticateButton': '//div[@class="buttons"]/button[1]',
        'reauthenticate': '//div[@class="tabsContainer"]/div[3]/div[1]/button[2]',
        'nameInput': 'input[placeholder="Your name"]',
        'settingsSaveButton': '//div[@class="buttons"]/button[1]',
        'termsOfUse': '//div[@class="settings"]/div[3]/div[1]',
        'privacyPolicy': '//div[@class="settings"]/div[3]/div[2]',
        'tosHeader': '//div[@class="header"]/div[1]/div[2]/label[1]',
        'backButton': 'button[class="left"]',
    }
    

}