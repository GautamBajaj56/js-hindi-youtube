/* lecture 45 */

// ye saara js is after ES6 remember


class User { /* basically though we know classes are just        syntatical sugar as mostly it is prototype dependent but still js now allows class just like c++ and java and all functionality will be same like them. */
    constructor(username, email, password){ // constructor() will be called whenever you will create a new instance of class(or whenever you will use new keyword)

        this.username = username;  // properties set 
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword()); // 123abc
console.log(chai.changeUsername()); // CHAI



// behind the scene

/* here below we have assumed what we could do if we dont have class method  */

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

/* lecture 45 continued aage in inheritance.js */