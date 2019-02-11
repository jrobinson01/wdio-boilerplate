const main = require('../pages/main');

describe('index', () => {

  before(() => {
    main.open();
  });

  describe('header', () => {

    it('should link to /', () => {
      const link = main.header.$('a-link');
      expect(link.getAttribute('href')).to.equal('/');
    });

    it('should be titled "A BLOG!"', () => {
      const link = main.header.$('a-link');
      expect(link.getText().toLowerCase()).to.equal('a blog!');
    });

    it('should have a subtitle', () => {
      const subtitle = main.header.$('div');
      expect(subtitle.getText()).to.contain('an sm-element demo application');
    });

  });
});
