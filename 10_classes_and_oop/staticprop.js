/* lecture 45 continued */

/* will learn about static keyword and its usage */

/* The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances. */

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) Output: error as createID cannot be accessed by instances of class

console.log(User.createId()) // 123

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId()); output: error 
// this implies even via inheritance static properties and methods cannot be accessed.

/* ++++++++++++++++++++++++++++lecture 45 finished+++++++++++++++++++++++++++++++++ */

