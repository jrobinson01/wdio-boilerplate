describe('setValue test', () => {
  beforeAll(() => {
    browser.url('http://www.youtube.com');
    browser.waitForExist('#search-input input');
  });

  describe('setValue test without command', () => {
    it('should set the value of the input', () => {
      const input = browser.element('#search-input input');
      console.log('direct element:', input);
      input.setValue('bar');
      expect(input.getValue()).toEqual('bar');
    });
  });

  xdescribe('setValue test with execute', () => {
    it('should set the value of the input', () => {
      const input = browser.execute(function() {
        return document.body.querySelector('#search-input input');
      });
      console.log('querySelector element', input);
      // fails in FF, passes in Chrome
      input.setValue('baz');
      expect(input.getValue()).toEqual('baz');
    });
  });
});
