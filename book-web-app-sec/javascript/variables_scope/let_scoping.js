const func = function() {
    if (true) {
        // define age inside of if block
        let age = 25;
    }
    /*
    * This time, console.log(age) will return `undefined`.
    * 
    * This is because `let`, unlike `var`, binds to the nearest block
    * Binding scope to the nearest block rather than the nearest function is
    * generally considered to be better for readabillity, and
    * results in a reduction of scope-related bugs.
    */
    console.log(age);
}