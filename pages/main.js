class Main {

  open() {
    browser.url('https://sm-element-demo.firebaseapp.com/');
    browser.waitUntil(() => this.blogApp.getAttribute('state') === 'home');
  }

  get blogApp() {
    return $('blog-app');
  }

  get header() {
    return this.blogApp.shadow$('header');
  }

  get mainContent() {
    return this.blogApp.shadow$('article#main');
  }

  get menu() {
    return this.blogApp.shadow$('article#menu');
  }

  get footer() {
    return this.blogApp.shadow$('footer');
  }

}

module.exports = new Main();
