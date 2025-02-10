/* ++++++++++++++++++++lecture 48++++++++++++++++++++++++ */

/* in this lec will study about getters and setters functions

In JavaScript, getters and setters are special methods that provide a way to access and update the properties of an object. They are used to encapsulate the internal representation of an object and control how its properties are accessed and modified.

Getters are methods that get the value of a specific property. They are defined using the get keyword.

Setters are methods that set the value of a specific property. They are defined using the set keyword.*/

/* some imp points:
1. getter bana rahe ho to setter function bhi banana hi padega as they both go simultaneously

2. getter and setter same name se hone chaiye jo properties class mei hai

3. setter function is used to set values of a property of class concerned from outside and getter function is used to get those values from outside in straight or in modified form as user needs.*/

/* basically the main concept of getter and setter functions is that we dont want user to access some properties directly. so we make them private variable via underscore( though they can be accessed.. underscore just indicates other programmer that it is a private variable)

so either hum user ko un private variables ki value return nhi karvaana chahte ya fir modified form mei return values karvaana chahte hai */


class User {
    constructor(email, password){
        this.email = email;            // property 1
        this.password = password       // property 2
                                          
        
    }

    get email(){  // getter function to get email
        return this._email.toUpperCase()    // here we want ki user k paas altered email jaaye (use of getter function)
    }
    set email(value){
        this._email = value  // setting value for email(note _email is a different variable from email.)
        //  The underscore conventionally indicates a private variable
    }

    get password(){  // getter function for password attribute
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);// H@HITESH.AI 

/* similarly can do encryption of passwords by above technique */

/* ++++++++++++++++++++++++++lecture 48 continued+++++++++++++++++++++++++++++++ */