describe('FF test', () => {
  beforeAll(() => {
    browser.url('http://www.youtube.com');
  });
  describe('setValue test', () => {
    it('should set the value of the input', () => {
      const input = browser.waitForShadowDomElement(['#search-input input']);
      input.setValue('webcomponents');
      expect(input.getValue()).toEqual('webcomponents');
    });
  });
});
