/* +++++++++++++++++++++++++lecture 17+++++++++++++++++++++++++++++++ */

/* this lecture is about creating object via constructor method
 */

// const tinderUser = new Object()
// console.log(tinderUser);     output:{} (singleton object created)

const tinderUser = {} // another way
// console.log(tinderUser);    same output:{} (but non singleton object created)

tinderUser.id = "123abc"          //adding key value pairs
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
/* above example shows object k andar object bhi possible and jitni marzi nesting kar 
sakte hai usme bhi
nested  objects ko access karne k liye dot(.) operator use karte jaao object k andar 
ghuste jaao like below  */

console.log(regularUser.fullname.userfullname.firstname); //hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

let obj3 = { obj1, obj2 } //trying to concatenate objects
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
/* same array wali problem not desired result */

obj3 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/* Copy the values of all of the enumerable own properties from one or more source 
objects to a target object. Returns the target object */

/* here {}is the target and obj1,obj2,obj4 are the source. target mei combine hoke
final result store hoga 
bina {} k bhi kaam chal jaata fark itna hota ki obj1 target banjaata and usme 
modification ho jaati output same hi aata */


 obj3 = {...obj1, ...obj2} // spread operator (best 90% cases mei yahi use hoga)
 console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

/* here array mei multiple objects */

users[1].email // accessing in above situation
// console.log(tinderUser);  { id: '123abc', name: 'Sammy', isLoggedIn: false }

 console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
 /* it has returned keys packed in an array so can apply methods of array over it */

 console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
 console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
/* The Object.entries() method in JavaScript returns an array of key-value pairs from an object. */

 /* sometimes we are trying to access some property but if it does not exist then 
 program crash hone k chances hote hai so we  can check the existence of any property 
 using below method */
 console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


 /* +++++++++++++++++++++++++++lecture 17 finished++++++++++++++++++++++++++++ */

 /* +++++++++++++++++++++++++lecture 18+++++++++++++++++++++++++++++++++++++++ */

 /* Object de-structure and JSON API intro */


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor  /* totally fine but problem will arise when multiple times
course instructor print karvaana ho then baar baar course.courseInstructor itna lamba
likhna will reduce code readabilty */

const {courseInstructor} = course  // object destructuring
console.log(courseInstructor); // hitesh

/* itna lamba name likhne se better ise nickname de sakte for short like below */
const {courseInstructor: instructor} = course  // object destructuring
console.log(instructor); // hitesh

/* +++++++++++++some API discussion+++++++++++++++++++++++++++ */

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

/* ++++++++++++++++++++++++++++++++lecture 18 finished+++++++++++++++++++++++++ */

