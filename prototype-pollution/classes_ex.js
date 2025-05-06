// Class for User
class UserProfile {
    constructor(name, age, followers, dob) {
        this.name = name;
        this.age = age;
        this.followers = followers;
        this.dob = dob; // Adding date of birth
    }
}

// Class for Content Creator Profile inheriting from the users class
class ContentCreatorProfile extends UserProfile {
    constructor(name, age, followers, dob, content, posts) {
        super(name, age, followers, dob);
        this.content = content;
        this.posts = posts;
    }
}

// Creating instances of the classes
let regularuser = new UserProfile('Ben S', 25, 1000, '1/1/1990');
let contentCreator = new ContentCreatorProfile('Jane Smith', 30, 5000, '1/1/1990', 'Engaging Content', 50);