

import AppScreen from "./app.screen";


const SELECTORS = {
   LOGIN_SCREEN: '~Sign in Email * Password *',
   LOGIN_EMAILID: '//android.widget.EditText[@index=0]',
   LOGIN_PASSWORD: '//android.widget.EditText[@index=1]',
   LOGIN_BUTTON: '~Sign in',
   SIGNUP_BUTTON: '~Sign Up',
   ENABLE_BIOMETRICS_MODAL: '~Enable face or touch authentication?',
   INVALID_CREDENTIALS_MESSAGE: '~Sign in The credentials you entered were incorrect. Email * Password *',
   DONT_ENABLE_BIOMETRICS_OPTION:'~No',
   ENABLE_BIOMETRICS_OPTION:'~Enable'
};

class LoginScreen extends AppScreen {
   
   constructor() {
       super(SELECTORS.LOGIN_SCREEN);
   }

   get signUpLink() {return $(SELECTORS.SIGNUP_BUTTON);}

   get email() { return $(SELECTORS.LOGIN_EMAILID);}

   get password() { return $(SELECTORS.LOGIN_PASSWORD);}

   get signInButton() {return $(SELECTORS.LOGIN_BUTTON);}

   get invalidCredentialsMessage() { return $(SELECTORS.INVALID_CREDENTIALS_MESSAGE);}

   get enableBiometricsModal(){ return $(SELECTORS.ENABLE_BIOMETRICS_MODAL)
   }
   get dontEnableBiometricOption(){ return $(SELECTORS.DONT_ENABLE_BIOMETRICS_OPTION); }

   get enableBiometricOption(){return $(SELECTORS.ENABLE_BIOMETRICS_OPTION);}

   async login(email, password) {
      this.email.click();
      driver.pause(5000)
      this.email.setValue(email);
      this.password.click();
      this.password.setValue(password);
     this.signInButton.click();
   }

   async dontEnablebiometrics(){
       this.dontEnableBiometricOption.click()
   }

   async enableBiometrics(){
       this.enableBiometricOption.click()
   }

}

export default new LoginScreen();
