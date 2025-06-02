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

        
      })
    })
}