/*
 * Makes use of DOM traversal built into the browser to
 * quickly aggregate every `<link>` element that includes
 * a `rel` attribute with the value `stylesheet`.
 */

const getStyles = function() {
  const scripts = document.querySelectorAll('link');

  /*
   * Iterate through each script, and confirm that the `link`
   * element contains a `rel` attribute with the value `stylesheet`.
   * 
   * Link is a multipurpose element most commonly used for loading CSS
   * stylesheets, but also used for preloading, icons or search.
   */
  scripts.forEach((link) => {
    if (link.rel === 'stylesheet') {
        console.log(`i: ${link.getAttribute('href')}`);
    }
  });
};