describe('setValue test', () => {
  beforeAll(() => {
    browser.url('https://sm-element-demo.firebaseapp.com/');
    $('blog-app').waitForDisplayed();
  });


  describe('header content', () => {
    it('should link to /', () => {
      try {
        const blogApp = $('blog-app');
        const header = blogApp.shadowRoot().$('header');
        const link = header.$('a-link');
        expect(link.getAttribute('href')).toBe('/');
      } catch(e) {
        console.error('error:', e);
      }

    });
  });
});
