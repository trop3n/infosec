// Base Prototype for Persons
let personPrototype = {
    introduce: function() {
        return `Hi, I'm ${this.name}.`;
    }
};

// Person Constructor function
function Person(name) {
    let person = Object.create(personPrototype);
    person.name = name;
    return person;
}

// Creating an instance
let ben = Person('Ben');