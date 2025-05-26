const func = function() {
    this.age = 25;

    // will return 25
    console.log(this.age);
};

    // will return undefined
    console.log(this.age);