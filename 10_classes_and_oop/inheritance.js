/* lecture 45 continued */

class User {
    constructor(username) {
        this.username = username; // Initializes the username property with the provided value
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`); // Logs the username to the console
    }
}

class Teacher extends User {  // extends implies that teacher class has now properties and methods of User class as well along with its own methods and properties
    // inheritance shown thus.

    /* The extends keyword in JavaScript is used in class declarations or class expressions to create a class that is a child of another class. This allows the child class to inherit properties and methods from the parent class, enabling code reuse and the creation of hierarchical class structures. */

    /* The super keyword in JavaScript is used in classes that extend other classes. It allows you to call functions on an object's parent class. */

    constructor(username, email, password) { // here written a different constructor for Teacher class else User class ka hi inherit kar leta inherit 
        super(username); // Calls the constructor of the User class to initialize the username
        this.email = email; // Initializes the email property with the provided value
        this.password = password; // Initializes the password property with the provided value
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`); // Logs a message indicating a new course was added by the teacher
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123"); // Creates a new Teacher object with username, email, and password

chai.logMe(); // USERNAME is chai

const masalaChai = new User("masalaChai"); // Creates a new User object with the username "masalaChai"

masalaChai.logMe(); // USERNAME is masalaChai

console.log(chai instanceof User); // Checks if chai is an instance of User, returns true as though chai is an instance of Teacher but Teacher is child class of User.

/* video 45 continued aage ( go to staticprop.js)  */


