/*
 * A simple function for brute forcing a list of subdomains
 * given a maximum length of each subdomain
 */
const generateSubdomains = function(length) {

    /*
     * A list of characters from which to generate subdomains.
     *
     * This can be attached to include less common characters
     * like '_'.
     * 
     * Chinese, Arabic, and Latin characters are also supported by some browsers. 
     */
  const charset = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let subdomains = charset;
  let subdomain;
  let letter;
  let temp;

    /*
     * Time complexity: o(n*m)
     * n = length of string
     * m = number of valid characters
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