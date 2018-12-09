const wdioPage = require('./page-objects/wdio-page');

describe('exmple test', () => {

  beforeAll(() => {
    wdioPage.open();// wdioPage.open throws an error, but that error is not shown in the terminal
  });

  it('should get the title', () => {
    const title = browser.getTitle();
    expect(title).toBe('WebdriverIO - WebDriver bindings for Node.js');
  });

  it('should have a header', () => {
    expect(wdioPage.header.waitForVisible()).toBe(true);
  })
});
