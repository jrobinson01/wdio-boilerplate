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
        // const login = $('bannoweb-login');
        //  const loginForm = login.shadowRoot().$('bannoweb-login-form');
        // const input = loginForm.shadowRoot().$('input[type=text]');
        // input.waitForEnabled();
        // input.setValue('hello');
        // expect(input.getValue()).toBe('hello');
      } catch(e) {
        console.error('error:', e);
      }

    });
  });
});
