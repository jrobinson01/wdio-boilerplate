const loginPage = require('./page-objects/login-page');
const ssExpect = require('../util/ss-expect');


describe('Login', () => {
  beforeAll(() => {
    loginPage.open();
  });
  describe('login component', () => {
    it('should show the initial login screen', () => {
      loginPage.loginElement.waitForVisible();
      // take screenshots, assert that they are correct
      ssExpect(browser.checkDocument());
    });

    it('login inputs should display properly', () => {
      loginPage.usernameInput.setValue('foo');
      loginPage.passwordInput.setValue('bar');
      ssExpect(browser.checkDocument());
    });

    // xit('should show spinner during login', () => {
    //   // JR: tough one, we'd need to somehow block the
    //   // POST /login response while we take this screenshot,
    //   // then resume it after.
    //   loginPage.login('test@test.com','banno');
    //   ssExpect(browser.checkDocument());
    // });

    it('should display the mfa input', () => {
      loginPage.login('test@test.com','banno');
      loginPage.mfaInput.waitForVisible();
      ssExpect(browser.checkDocument());
    });

    it('mfa inputs should display properly', () => {
      loginPage.mfaInput.setValue('foo');
      ssExpect(browser.checkDocument());
    });

    // xit('should maybe show the eula', () => {
    //   try {
    //     loginPage.eula.waitForVisible();// does not exist yet in loginPage!
    //     // eula found, take screenshots
    //     ssExpect(browser.checkDocument());
    //     // accept eula
    //     loginPage.acceptEula();
    //   } catch (e) {
    //     // no eula! wait for dashboard
    //   }
    // });

  });
});
