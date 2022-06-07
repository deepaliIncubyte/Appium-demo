import assert from 'chai';
import { Given, When, Then } from 'cucumber';
import LoginScreen from '/home/deepalimehroliya/AppiumFramework/appium_demo/tests/screenObjects/login.screen';

Given(/^Member is on the login screen$/, () => {
    //LoginScreen.waitForIsShown(true);
});

When( /^Member tries to log in with valid credentials; email: '(.+)' and password: '(.+)'$/,(email, password) => {
        LoginScreen.login(email, password);
    },
);

Then(/^Member is asked wether he or she wants to enable biometrics$/, () => {
   
});

