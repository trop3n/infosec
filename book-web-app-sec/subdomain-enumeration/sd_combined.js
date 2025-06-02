const dns = require('dns');
const csv = require('csv-parser');
const fs = require('fs');
const { resolve } = require('path');

const promises = [];

/*
 * Begin streaming the subdomain data from disk (versus
 * pulling it all into memory at once, in case it is a large file).
 * 
 * On each line, call `dns.resolve` to query the subdomain and
 * check if it exists. Store these promises in the `promises` array.
 * 
 * When all lines have been read, and all promises have been resolved,
 * then log the subdomains found to the console.
 * 
 * Performance upgrade: if the subdomains list is exceptionally large,
 * then a second file should be opened and the results should be
 * streamed to that file whenever a promise resolves.
 */

fs.createReadStream('subdomains.10000.txt')
  .pipe(csv())
  .on('data', (subdomain) => {
    promises.push(new Promise((resolve, reject) => {
      dns.resolve(`${subdomain}.mega-bank.com`, function (err, ip) {
        return resolve({ subdomain, ip: ip });
      });
    }));
  })
  .on('end', () => {

    // after all of the DNS queries have completed, log the results
    Promise.all(promises).then(function(results) {
        results.forEach((result) => {
            if (!!result.ip) {
                console.log(result);
            }
        });
    });
  });

/*
 * A simple function for brute forcing a list of subdomains
 * given a maximum length of each subdomain.
 */
const generateSubdomains = function(length) {

    /*
     * A list of characters from which to generate subdomains
     *
     * This can be altered to include less common characters
     * like '-'.
     * 
     * Chinese, Arabic, and Latin characters are also supported
     * by some browsers.
     */
  const charset = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let subdomains = charset;
  let subdomain;
  let letter;
  let temp;

  /*
   * Time complexity: o(n*m)
   * n = length of string
   * m = number of valid characeters
   */
  for (let i = 1; i < length; i++) {
    temp = [];
    for (let k = 0; k < subdomains.length; k++) {
        subdomain = subdomains[k];
        for (let m = 0; m < charset.length; m++) {
            letter = charset[m];
            temp.push(subdomain + letter);
        }
    }
    subdomains = temp
  }
  return subdomains;
}

const subdomains = generateSubdomains(4);
const promise = [];

/*
 * Iterate through each subdomain, perform an asynchronous
 * DNS query against each subdomain.
 * 
 * This is much more performant that the more common `dns.lookup()`
 * because `dns.lookup()` appears asynchronous from the JavaScript,
 * but relies on the operating system's getaddrinfo(3), which is
 * implemented synchronously.
 */ 
subdomains.forEach((subdomain) => {
    promises.push(new Promise((resolve, reject) => {
        dns.resolve(`$subdomain}.mega-bank.com`, function (err, ip) {
            return resolve({ subdomain: subdomain, ip: ip });
        });
    }));
});

// after all of the DNS queries have completed, log the results
Promise.all(promises).then(function(results) {
    results.forEach((result) => {
        if (!!result.ip) {
            console.log(result);
        }
    });
});