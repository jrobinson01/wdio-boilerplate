const main = require('../pages/main');
describe('shadowRoot() test', () => {
  beforeAll(() => {
    // browser.url('https://sm-element-demo.firebaseapp.com/');
    // $('blog-app').waitForDisplayed();// fails in Safari
    main.open();
  });

  describe('header', () => {
    it('should link to /', () => {
      const link = main.header.$('a-link');
      expect(link.getAttribute('href')).toBe('/');
    });
    it('should be titled "A BLOG!"', () => {
      try {
        const link = main.header.$('a-link');
        console.log('link text', link.getText());
        expect(link.getText().toLowerCase()).toEqual('a blog!');
      } catch(e) {
        console.error('error', e);
      }

    })
  });
});
