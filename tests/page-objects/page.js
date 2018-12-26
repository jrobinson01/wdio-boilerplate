class Page {

  get dialog() {
    return browser.waitForShadowDomElement(['dialog'], 'could not find dialog.');
  }

  open(path) {
    browser.url(path);
  }
}

module.exports = Page;
