const dns = require('dns');
const promises = [];

/*
 * This list can be filled with the previous brute force
 * script, or use a dictionary of commons subdomains.
 */
const subdomains = [];

/*
 * Iterate through each subdomain, and perform an asynchronous
 * DNS query against each subdomain
 * 
 * This is much more performant that the more common `dns.lookup()`
 * because `dns.lookup()` appears asynchronous from the JavaScript,
 * but relies on the operating system's getaddrinfo(3) which
 * is implemented synchronously.
 */
subdomains.forEach((subdomain) => {
    promises.push(new Promise((resolve, reject) => {
        dns.resolve(`${subdomain}.mega-bank.com`, function (err, ip) {
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