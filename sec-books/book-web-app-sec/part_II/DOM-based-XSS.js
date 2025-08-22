/*
 * Grab the hash object #<x> from the URL.
 * Find all matches with the findNumberOfMatches() function
 * providing the hash value as an input. 
 */
const hash = document.location.hash;
const funds = []
const nMatches = findNumberOfMatches(funds, hash);

/*
 * Write the number of matches found, plus append the hash
 * value to the DOM to improve the user experience.
 */
document.write(nMatches + ' matches found for ' + hash);