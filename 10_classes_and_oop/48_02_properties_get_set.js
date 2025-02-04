/* ++++++++++++++++++++++++++++++++++lecture 48 continued++++++++++++++++++++++++*/

/* below will discuss another syntax of getter and setter functions (functional syntax) assuming what would happen if classes were not there */

/* -------------------------------------------------------------------------------- */

/* Object.defineProperty() in JavaScript is used to create or modify a property directly on an object, giving you control over the property's attributes. This method allows you to define properties with specific configurations, such as whether they can be enumerated, written to, or configured. */

Object.defineProperty(obj, 'property', descriptor);

/* obj: The object on which to define the property.
property: The name of the property to define or modify.
descriptor: An object that describes the property's attributes.

Descriptor Attributes
value: The value of the property.
writable: If true, the value of the property can be changed.
enumerable: If true, the property will show up during enumeration of the object's properties.
configurable: If true, the property can be deleted and its attributes can be modified.
get: A function that serves as a getter for the property.
set: A function that serves as a setter for the property. */

const obj = {};

// Define a new property 'name' on obj
Object.defineProperty(obj, 'name', {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(obj.name); // Output: Alice

// Modify the property 'name' to make it non-writable
Object.defineProperty(obj, 'name', {
    writable: false
});

obj.name = 'Bob'; // This will not change the value
console.log(obj.name); // Output: Alice

// Enumerate properties
for (let key in obj) {
    console.log(key); // Output: name
}

// Delete the property
delete obj.name; // This will succeed because configurable is true
console.log(obj.name); // Output: undefined


/* Key Points
Control: Provides detailed control over how properties behave on an object.
Flexibility: Allows you to define properties with specific behaviors, such as read-only, non-enumerable, or non-configurable properties.
Getters and Setters: Enables the use of getter and setter functions for properties, providing a way to control access and modifications. */

/* -------------------------------------------------------------------------------- */


function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email); // CHAI@CHAI.COM

/* ++++++++++++++++++++++++++++++lecture 48 continued aage+++++++++++++++++++++ */

