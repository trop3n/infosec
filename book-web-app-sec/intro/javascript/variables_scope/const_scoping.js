const func = function() {
    const age = 25;

    /*
    * This will result in: TypeError: invalid assignment to const `age`.
    *
    * Much like `let`, `const` is block scoped.
    * The major difference is that `const` variables do not support
    * reassignment after they are instantiated.
    * 
    * If an object is declared as a const, its properties can still be
    * changed. As a result, `const` ensures the pointer to `age` in memory
    * is not changed, but does not care if the value of `age` or a property
    * on `age` changes.
    */ 
    age = 25;
};