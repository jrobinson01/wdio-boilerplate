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

}

module.exports = new Main();
