/* ++++++++++++++++++lecture 47++++++++++++++++++++++++++++++ */

/* in this lecture we will learnn about objects in more advanced level.
Lets start with a basic question asked in interviews for SDE-2 and SDE-3 level.
can you change the value of Math.PI (which is 3.1414... types kuch)? why and why not
as everyone says its value can't be changed as it is a universal constant. */

console.log(Math.PI); // 3.141592653589793
Math.PI = 5  // tried to override value
console.log(Math.PI); //3.141592653589793  value didnt changed

/* so now below will see why we are not able to change the value behind the scene */


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

/* The Object.getOwnPropertyDescriptor() method in JavaScript provides a description of a specific property on an object. This description includes details about the property's value, whether it's writable(means override kiye jaa sakti values ya nahi), enumerable, and configurable. */

/* in above method the first parameter is the "Object that contains the property" and the second parameter is the  "Name of the property". */

 console.log(descripter);

 /* {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} */

  /* so the answer we got why PI value can't be overridden because its writable key has been given false value and by anyhow it can't be done true.hence we can create our own object as well with such properties jiski values koi change na kar paaye */


 /* In the Object.getOwnPropertyDescriptor() example, "enumerable" and "configurable" have specific meanings:

Enumerable: If true, the property will appear during enumeration of the object's properties. This means it will show up in loops like for...in and methods like Object.keys().

Configurable: If true, the property can be deleted from the object, and its attributes (other than value and writable) can be changed. This means you can reconfigure the property descriptor or delete the property from the object.
Here's an example (from line 40 to 60) demonstrating both concepts: */ 

/* ------------------------------------------------------------------------- */

const obj = { name: 'Alice' };

// Check the property descriptor of 'name'
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
// Output:
// {
//     value: 'Alice',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

// Enumerable example:
for (let key in obj) {
    console.log(key); // 'name' will be logged because it is enumerable
}

// Configurable example:
delete obj.name;
console.log(obj.name); // undefined because the property was configurable and thus deleted

/*------------------------------------------------------------------------------ */



const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); //{
    /* {
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
  }
  
 */

  /* now our object so we must have rights to change its properties as we want.
  this can be achieved by below function 
  
  Object.defineProperty() is a method in JavaScript that allows you to define a new property or modify an existing property directly on an object. This method provides fine-grained control over the property's behavior.
  */

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/* {
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
} */

 /* seeing iteration over chai object via for of loop as objects pe this loop is more convenient. neeche used let instead of const taaki change hoti rahe. */

 /* for (let [key, value] of chai) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
    above will throw error as objects by default iterable hote hai ya nahi depends upon different situations.
    can iterate over them as below:
 */

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

/* output when enumerable is false: 
price : 250
isAvailable : true */

/* /* output when enumerable is true: 
name : ginger chai
price : 250
isAvailable : true */

/* +++++++++++++++++++++++++lecture 47 finished++++++++++++++++++++++++++++++++ */

