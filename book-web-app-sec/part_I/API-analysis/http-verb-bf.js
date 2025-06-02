/*
 * If the request is successful, resolve the promise and
 * include the status code in the result.
 */

const discoverHTTPVerbs = function(url) {
    const verbs = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];
    const promises = [];

    verbs.forEach((ver) => {
      const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();

        http.open(verb, url, true)
        http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        /*
         * If the request is successful, resolve the promise and
         * include the status code in the result.
         */
        http.onreadystatechange = function() {
          if (http.readyState === 4) {
            return resolve({ verb: verb, status: http.status });
          }
        }

        /*
         * If the request is not successful, or does not complete in time, mark
         * the request as unsuccessful. The timeout should be tweaked based on
         * average response time.
         */
        setTimeout(() => {
            return resolve({ verb: verb, status: -1 });
        }, 1000);
        
        // initiate the HTTP request
        http.send({});
      });

      // add the promise object to the promises array
      promises.push(promise);
    });

    /*
     * When all verbs have been attempted, log the results of their
     * respective promises to the console.
     */
    Promise.all(promises).then(function(values) {
      console.log(values);
    });
}