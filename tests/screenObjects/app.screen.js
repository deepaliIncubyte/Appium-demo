import { DEFAULT_TIMEOUT } from '/home/deepalimehroliya/AppiumFramework/appium_demo/tests/Constants/constants.js';
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class AppScreen {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     constructor(selector) {
        this.selector = selector;
    }


    waitForIsShown(isShown = true) {
        return $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }

    isDisplayed() {
        return $(this.selector).isDisplayed();
    }
}
