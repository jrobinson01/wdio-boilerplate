/* eslint "prefer-arrow-callback": "off", "no-var": "off", "prefer-rest-params": "off" */
/**
 * @fileoverview Function callbacks for the "execute" methods actually
 * execute in the host browser. Only ES5 syntax is allowed.
 */

/**
 * This function runs in the browser context
 * @param {string|Array<string>} selectors
 * @return {?Element}
 */
function findInShadowDom(selectors) {
  if (!Array.isArray(selectors)) {
    selectors = [selectors];
  }

  function findElement(selectors) {
    var currentElement = document;
    for (var i = 0; i < selectors.length; i++) {
      if (i > 0) {
        currentElement = currentElement.shadowRoot;
      }

      if (currentElement) {
        currentElement = currentElement.querySelector(selectors[i]);
      }

      if (!currentElement) {
        break;
      }
    }

    return currentElement;
  }

  if (!(document.body.createShadowRoot || document.body.attachShadow)) {
    selectors = [selectors.join(' ')];
  }

  return findElement(selectors);
}

/**
 * Add a command to return an element within a shadow dom.
 * The command takes an array of selectors. Each subsequent
 * array member is within the preceding element's shadow dom.
 *
 * Example:
 *
 *     const elem = browser.shadowDomElement(['foo-bar', 'bar-baz', 'baz-foo']);
 *
 * Browsers which do not have native ShadowDOM support assume each selector is a direct
 * descendant of the parent.
 */
browser.addCommand("shadowDomElement", function(selector) {
  return this.execute(findInShadowDom, selector);
});

/**
 * Provides the equivalent functionality as the above shadowDomElement command, but
 * adds a timeout. Will wait until the selectors match an element or the timeout
 * expires.
 *
 * Example:
 *
 *     const elem = browser.waitForShadowDomElement(['foo-bar', 'bar-baz', 'baz-foo'], 2000);
 */
browser.addCommand("waitForShadowDomElement", function async(selector, timeout, timeoutMsg, interval) {
  return this.waitUntil(() => {
    const elem = this.execute(findInShadowDom, selector);
    return elem && elem.value;
  }, timeout, timeoutMsg, interval)
    .then(() => this.execute(findInShadowDom, selector));
});
