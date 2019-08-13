describe('shadows', () => {
  beforeAll(() => {
    browser.url('http://0.0.0.0:8080/test-site/');
    browser.$('my-element').waitForDisplayed();
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
      browser.$('my-element').shadow$('#greeting').waitForDisplayed();
    });
    it('should be false if the element is hidden with display:none', () => {
      expect(browser.$('my-element').shadow$('#display-none').isDisplayed()).toBe(false);
    });
    it('should be false if the element does not exist', () => {
      expect(browser.$('my-element').shadow$('#non-existent').isDisplayed()).toBe(false);
    });
    it('should work with $$', () => {
      expect(browser.$('my-element').shadow$('#multiple-children').$$('div')[0].isDisplayed()).toBe(true);
      expect(browser.$('my-element').shadow$('#multiple-children').$$('div')[1].isDisplayed()).toBe(false);
    });
    it('should be false if the element\'s parent is hidden', () => {
      expect(browser.$('my-element').shadow$('#hidden-child').isDisplayed()).toBe(false);
    });
  });
})
