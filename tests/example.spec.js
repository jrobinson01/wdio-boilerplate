describe('setValue test', () => {
  beforeAll(() => {
    browser.url('http://www.youtube.com');
    // $('#search-input input').waitForExist();// works in v5, disabled to test errors
    browser.waitForExist('#search-input input');// should error?
  });

  describe('setValue test without command', () => {
    it('should set the value of the input', () => {
      const input = $('#search-input input');
      input.waitForVisible();// should error?
      // console.log('direct element:', input);
      input.setValue('bar');
      expect(input.getValue()).toEqual('bar');
    });
  });

  describe('setValue test with execute', () => {
    it('should set the value of the input', () => {
      const input = browser.execute(function() {
        return document.body.querySelector('#search-input input');
      });
      // console.log('querySelector element', input);
      // fails in FF, passes in Chrome (in wdio v4)
      input.setValue('baz');
      console.log('value', input.getValue());
      expect(input.getValue()).toEqual('lasjdf');// should fail in jasmine but doesn't
    });
  });
});
