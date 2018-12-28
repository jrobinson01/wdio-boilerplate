const selenium = require('selenium-standalone');
const seleniumConfig = require('../config/selenium.conf.js');
const path = require('path');
const wdioConfigFile = `${__dirname}/../config/wdio.conf.js`;

// Selenium server process
let seleniumServer = null;

function installSelenium() {
  return new Promise((resolve, reject) => {
    selenium.install(seleniumConfig, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

function startSelenium() {
  return new Promise((resolve, reject) => {
    selenium.start(seleniumConfig, (err, child) => {
      if (err) {
        return reject(err);
      }
      console.log('Selenium server started');
      seleniumServer = child;
      resolve();
    });
  });
}

function stopSelenium() {
  if (seleniumServer) {
    console.log('Shutting down Selenium server');
    seleniumServer.kill();
    seleniumServer = null;
  }
  return Promise.resolve();
}

function runWdio() {
  // const webdriverPath = path.dirname(require.resolve('webdriverio'));
  const Launcher = require(`@wdio/cli/build/launcher`).default;
  let wdio = new Launcher(wdioConfigFile, {});
  return wdio.run().then(code => {
    if (code !== 0) {
      throw new Error(`wdio exited with code ${code}`);
    }
  });
}

let fatalError = false;
installSelenium().then(startSelenium).then(runWdio).catch(err => {
  console.error(err.stack);
  fatalError = true;
}).then(stopSelenium).then(() => {
  process.exit(Number(fatalError));
});
