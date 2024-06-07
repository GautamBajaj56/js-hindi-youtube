/* ++++++++++++++++++++lecture 26 continued +++++++++++++++++++*/



/*  concept about truthy values and falsy values 

basically there exist some values which are assumed to be true 
(called truthy values) and some values which are assumed to be 
false are called falsy values */


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0(-ve zero), BigInt 0n, ""(empty string), null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}(empty function with no 
//parameter and function definition are also considered truthy values

if (userEmail.length === 0) {            /* way to check whether 
                                        an array is empty or not */
    console.log("Array is empty");
}

const emptyObj = {}  /* method to check whether an object is empty
                        or not */

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): designed specially for 
// handling null and  undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator (basically if else ki shorthand notation)

// condition ? statements to execute if condition is true :  statements to execute if condition is false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

/* ++++++++++++++++++++lecture 26 finished +++++++++++++++++++*/