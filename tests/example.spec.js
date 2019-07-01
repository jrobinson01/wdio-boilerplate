const main = require('../pages/main');

describe('index', () => {

  beforeAll(() => {
    main.open();
  });

  describe('header', () => {

    xit('should link to /', () => {
      const link = main.header.$('a-link');
      expect(link.getAttribute('href')).toEqual('/');
      link.waitForDisplayed();
      expect(link.getAttribute('href')).toEqual('/');
    });

    xit('should be titled "A BLOG!"', () => {
      const link = main.header.$('a-link');
      expect(link.getText().toLowerCase()).toEqual('a blog!');
    });

    xit('should have a subtitle', () => {
      const subtitle = main.header.$('div');
      expect(subtitle.getText()).toContain('an sm-element demo application');
    });

    it('shadow$ works with refetch', () => {
        const blogApp = browser.$('blog-app');
        const header = blogApp.shadow$('header');
        expect(header.$('a-link').getAttribute('href')).toEqual('/');
        // remove the main element and recreate
        browser.execute(() => {
          const oldEl = document.querySelector('blog-app');
          oldEl.parentElement.removeChild(oldEl);// removes the main element
          const newEl = document.createElement('blog-app');
          document.body.appendChild(newEl);
        });
        // header should be a stale reference at this point and invoke refetch.
        expect(header.$('a-link').getAttribute('href')).toEqual('/');
    });
    // xit('$ works with refetch', () => {
    //   try {
    //     const el = main.blogApp;// regular element returned by $
    //     expect(el.getAttribute('state')).toEqual('home');
    //     browser.execute(() => {
    //       const oldEl = document.querySelector('blog-app').remove();// remove the main element
    //       const newEl = document.createElement('blog-app');
    //       document.body.appendChild(newEl);
    //     });
    //     expect(el.getAttribute('state')).toEqual('home');
    //   } catch(e) {
    //     console.error('error in $ refetch test', e);
    //   }
    // });
    //
    // xit('$ works with refetch and function selectors', () => {
    //   try {
    //     const el = browser.$(() => document.querySelector('blog-app'));
    //     expect(el.getAttribute('state')).toEqual('home');
    //     browser.execute(() => {
    //       document.querySelector('blog-app').remove();// remove the main element
    //       const newEl = document.createElement('blog-app');
    //       document.body.appendChild(newEl);
    //     });
    //     console.log('el selector?', el.selector);
    //     expect(el.getAttribute('state')).toEqual('home');
    //   } catch(e) {
    //     console.error('error in $ refetch test', e);
    //   }
    // });

  });

  xdescribe('login', () => {
    beforeAll(() => {
      browser.url('/login');
      browser.pause(3000);// wait a bit
    });
    it('can get attributes', () => {
      const el = browser.$('blog-app').shadow$('login-form').shadow$('input[type=text]');
      expect(el.getAttribute('placeholder')).toBe('admin');
    });
    it('can set values', () => {
      const el = browser.$('blog-app').shadow$('login-form').shadow$('input[type=text]');
      try {
        el.setValue('testing');
      } catch(e) {
        // console.log('el', el);
        // browser.elementSendKeys(el.elementId, 'testing');
        browser.execute(function(el, value){
          el.value = value;
        }, el, 'testing');
      }
      expect(el.getValue()).toBe('testing');
      // browser.pause(5000);
    });
  });
});
