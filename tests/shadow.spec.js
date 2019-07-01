describe('shadows', () => {
  beforeAll(() => {
    browser.url('http://0.0.0.0:8080/test-site/');
  });

  describe('isDisplayed outside shadow DOM', () => {
    it('should be true if the element outside shadow DOM is visible', () => {
      expect(browser.$('my-element').isDisplayed()).toBe(true);
    });
  });

  describe('isDisplayed in shadow DOM', () => {
    it('should be true if the element inside shadow DOM is visible', () => {
      expect(browser.$('my-element').shadow$('#greeting').isDisplayed()).toBe(true);
    });
    it('should return false when the element inside shadow DOM is hidden', () => {
      browser.$('my-element').shadow$('button').click();
      browser.$('my-element').shadow$('#greeting').waitForDisplayed(undefined, true, 'element still displayed!');
    });
    it('should return true when the element inside shadow DOM is displayed again', () => {
      browser.$('my-element').shadow$('button').click();
      browser.$('my-element').shadow$('#greeting').waitForDisplayed('element still not displayed!');
    });
  });
})
