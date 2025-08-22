/*
 * Create a DOM node of type 'div'.
 * Apennd to this div a string to be interpreted as DOM rather than text.
 */
const comment = 'my <strong>comment</strong>';
const div = document.createElement('div');
div.innerHTML = comment;

/*
 * Append the div to the DOM, with it the innerHTML DOM from the comment.
 * Because the comment is interpreted as DOM, it will be parsed
 * and translated into DOM elemnts upon load.
 */
const wrapper = document.querySelector('#commentArea');
wrapper.appendChild(div);