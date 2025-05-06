// Prototype for User
let userPrototype = {
    greet: function() {
        return `Hello, ${this.name}!`;
    }
}

// User Constructor Function
function UserProfilePrototype(name, age, followers, dob) {
    let user = Object.create(userPrototype);
    user.name = name;
    user.age = age;
    user.followers = followers;
    user.dob = dob;
    return user;
}

// Creating an instance
let regularUser = UserProfilePrototype('Ben S', 25, 1000, '1/1/1990');

// Using the prototype method
console.log(regularUser.greet());