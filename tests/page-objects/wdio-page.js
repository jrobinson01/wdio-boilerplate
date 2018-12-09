// oops! we started a refactor, but forgot to
// remove references to waitDelay in the open() function below.
// const waitDelay = 2000;

class WDIOPage {
  open() {
    browser.windowHandleMaximize();
    browser.url('http://webdriver.io');
    browser.waitForVisible('header', waitDelay);// should throw, but something swallows the error.
  }

  get header() {
    return browser.element('header');
  }
}

module.exports = new WDIOPage();
