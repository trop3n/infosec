const func = function() {
    if (true) {
    // define age inside of if block
    var age = 25;
    }
    /*
     * logging age will return 25
     * 
     * this happens because the var identifier binds to the nearest
     * function, rather than the nearest block.
     */
    console.log(age);
};