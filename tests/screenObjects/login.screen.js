

import AppScreen from "./app.screen";


const SELECTORS = {
   LOGIN_SCREEN: '~Sign in Email * Password *',
   LOGIN_EMAILID: '//android.widget.EditText[@index=0]',
   LOGIN_PASSWORD: '//android.widget.EditText[@index=1]',
   LOGIN_BUTTON: '//android.widget.Button[@content-desc="Sign in"]',
   SIGNUP_BUTTON: '~Sign Up'
};

class LoginScreen extends AppScreen {
   
   constructor() {
       super(SELECTORS.LOGIN_SCREEN);
   }

   get signUpLink() {
       return $(SELECTORS.SIGNUP_BUTTON);
   }

   get email() {
       return $(SELECTORS.LOGIN_EMAILID);
   }

   get password() {
       return $(SELECTORS.LOGIN_PASSWORD);
   }

   get signInButton() {
       return $(SELECTORS.LOGIN_BUTTON);
   }

   async login(email, password) {
      this.email.click();
      driver.pause(5000)
      this.email.setValue(email);
      this.password.click();
      this.password.setValue(password);
     this.signInButton.click();
   }

}

export default new LoginScreen();
