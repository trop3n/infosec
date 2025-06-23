import { DOMPurify } from '../utils/DOMPurify';

// makes use of: https://github.com/cure53/DOMPurify
const appendToDOM = function(data, selector, unsafe = false) {
    const element = document.querySelector(selector);

    // for cases where DOM injection is required (not default)
    if (unsafe) {
        element.innerHTML = DOMPurify.sanitize(data);
    } else { // standard cases (default)
        element.innerText = data;
    }
};