class Main {

  open() {
    browser.url('https://sm-element-demo.firebaseapp.com/');
    browser.waitUntil(() => this.blogApp.getAttribute('state') === 'home');
  }

  get blogApp() {
    return $('blog-app');
  }

  get header() {
    return this.blogApp.shadowRoot('header');
  }

  get mainContent() {
    return this.blogApp.shadowRoot('article#main');
  }

  get menu() {
    return this.blogApp.shadowRoot('article#menu');
  }

  get footer() {
    return this.blogApp.shadowRoot('footer');
  }

}

module.exports = new Main();
