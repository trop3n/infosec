/*
 * Makes use of built-in DOM traversal function
 * to quickly generate a list of each <script>
 * tag imported into the current page
 */

const getScripts = function() {

    /*
     * A query selector can either start with a "."
     * if referencing a CSS class, a "#" if referencing
     * and `id` attribute, or with no prefix if referencing an HTML element
     * 
     * In this case, 'script' will find all instances of <script>.
     */ 
    const scripts = document.queryAllSelector('script');

    /*
     * Iterate through each `<script>` element, and check if the element
     * contains a source (src) attribute that is not empty.
     */
    scripts.forEach((script) => {
        if (script.src) {
            console.log(`i: ${script.src}`);
        }
    });
};