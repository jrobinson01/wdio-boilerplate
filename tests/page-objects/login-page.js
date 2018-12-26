const Page = require('./page');

class LoginPage extends Page {

  get loginElement() {
    return browser.waitForShadowDomElement(['bannoweb-login'],
    'could not find bannoweb-login');
  }

  get usernameInput() {
    return browser.waitForShadowDomElement([
      'bannoweb-login',
      'bannoweb-login-form',
      'input[type=text]'],
      'could not find username input');
  }

  get passwordInput() {
    return browser.waitForShadowDomElement([
      'bannoweb-login',
      'bannoweb-login-form',
      'input[type=password]'],
      'could not find password input.');
  }

  get submitButton() {
    return browser.waitForShadowDomElement([
      'bannoweb-login',
      'bannoweb-login-form',
      'jha-button[type=submit]'],
      'could not find submit button.');
  }

  get mfaInput() {
    return browser.waitForShadowDomElement([
      'bannoweb-login',
      'bannoweb-login-security-questions',
      'input[type=password]'],
      'could not find mfa input.');
  }

  get mfaSubmit() {
    return browser.waitForShadowDomElement([
      'bannoweb-login',
      'bannoweb-login-security-questions',
      'jha-button[type=submit]'],
      'could not find mfa submit button.');
  }

  get forgotButton() {
    return browser.waitForShadowDomElement([
      'bannoweb-login',
      'bannoweb-login-form',
      'form#loginForm jha-form-checkbox ~ jha-button'],
      'could not find "forgot" button');
  }

  get helpDialog() {
    const dialog = this.dialog.element('bannoweb-login-help-dialog');
    return dialog;
  }

  get helpCloseButton() {
    return browser.waitForShadowDomElement([
      'bannoweb-login-help-dialog',
      'jha-button'],
      'could not find help dialog close button.');
  }

  get errorMessage() {
    return browser.waitForShadowDomElement([
      'bannoweb-login',
      'jha-error-message'],
      'could not find error message.');
  }

  open(params) {
    browser.windowHandleMaximize();
    super.open(`/login/${params ? `?${params}` : ''}`);
    browser.timeouts('script', 15000);
    browser.waitForShadowDomElement(['bannoweb-login'], 'could not find bannoweb-login.');
  }

  login(username, password) {
    this.usernameInput.clearElement();
    this.usernameInput.setValue(username);
    this.passwordInput.clearElement();
    this.passwordInput.setValue(password);
    this.submitButton.click();
  }

  answerMfa(answer) {
    this.mfaInput.clearElement();
    this.mfaInput.setValue(answer);
    this.mfaSubmit.click();
  }

 }

module.exports = new LoginPage();
module.exports.Klass = LoginPage;
