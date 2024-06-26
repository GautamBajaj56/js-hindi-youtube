/* ++++++++++++++++++++++++++++++++++lecture 16+++++++++++++++++++++++++++ */

/* objects can be declared via two ways:
1. like a literal
2. like a constructor */

/* via both ways object hi create hota nondifference in performace just singleton ka 
difference hota hai  */

/* for interview remember whenever declared via literal tab singletion nahi banta 
but jab constructor se object banega tab singleton humesha banega */

// singleton
// Object.create ( one way to create object via constructor aage discuss hoga)

// object literals  ( main focus of this lecture)

const mySym = Symbol("key1")


const JsUser = {                     /*an object made of key value pairs jisme 
                                       datatype value ka kuch bhi ho sakta hai  */ 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // correct syntax to insert symbol in object(imp for interview)
    mySym: "mykey1",     // by this way string treat hoga 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/* always rem above is key name but backend mei it is stored as "name"(string)
this means though frontend pe keys don't necessarily to be typed with double quotes
but backend mei they are always stored as string */

 console.log(JsUser.email) // accessing value of object
 /* inefficient method as "full name" ki value access nahi kar paayega */

 console.log(JsUser["email"]) /* most efficient for accessing values of object
 always use this */

console.log(JsUser["full name"])
console.log(JsUser[mySym]) // correct way to access value of object using symbol

JsUser.email = "hitesh@chatgpt.com" // oveerwriting value of object
 //Object.freeze(JsUser) /* Prevents the modification of existing property attributes 
// and values, and prevents the addition of new properties. */

JsUser.email = "hitesh@microsoft.com" // tries to change one property
console.log(JsUser); // will not give error but also will not reflect the change

/* 
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  mySym: 'mykey1', // here reflected as string
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'   // here reflected as symbol ( imp for interview)
} */



JsUser.greeting = function(){     // adding another value in object
    console.log("Hello JS user");
}
/* also  rem key k andar u can store even a function */

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
/* this basically is a reference to current object and can acccess properties of 
that object */

console.log(JsUser.greeting); /* without brackets it is not a method its just a 
reference so output would be : [Function (anonymous)] */

console.log(JsUser.greeting()); /* now it will behave like a method
Hello JS user
undefined */


console.log(JsUser.greetingTwo());
/* Hello JS user, Hitesh
undefined */

/* ++++++++++++++++++++++++++++++++++++++++lecture 16 finished+++++++++++++++++ */