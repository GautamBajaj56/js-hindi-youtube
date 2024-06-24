/* +++++++++++++++++++++++++++lecture 9+++++++++++++++++++++++++++++++++++ */


/* some notes for interview for js regarding datatypes
 according to official documentation datatypes are categorised into two main categories
 primitive and non primitive 
the classification is done on the basis of how data is stored in memory and how data 
is accessed.
 */

//  Primitive

/*  7 types : 1.String 
2.Number 

3.Boolean 

4.null ( recall temperature example as temperature server se maanga but server mei 
issues usne wapis kuch nahi bheja so null would be the state)

5.undefined( say variable mei kya value daalni abhi nahi pata shayad aage pata chale 
so we leave it as it is )

6.Symbol(for unique identification of a value), 
 */

/*7. BigInt : say bahut badi sceintific value jise number handle nahi kar paa rha so we 
use big int */


/* NOTE: JavaScript is a dynamically typed language. This means that variable types 
are determined at runtime, and you do not need to explicitly declare variable types like c++ */

// const score = 100  (number)
// const scoreValue = 100.3       also included in number no special type for
// decimal like float or int etc. like python

// const isLoggedIn = false        (boolean)
// const outsideTemp = null    (means variable outsideTemp is empty no value inside)
// let userEmail;               (undefined)
/* or can also write as 
let userEmail=undefined */

// const id = Symbol('123')
// const anotherId = Symbol('123')

/* symbol mei though value bhi same pass ki but neeche it will give false as 
symbol identifies variable uniquely  */

// console.log(id === anotherId); (false)

// const bigNumber = 3456543576654356754n 
/* last ka 'n' converts it into big int though it will not be much used in production */



// Reference or (Non primitive) datatypes

// Array, Objects, Functions

/* const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber); // undefined

console.log(typeof outsideTemp); // object

console.log(typeof scoreValue); //number

console.log(typeof myFunction); // function 
( basically object function or functional object)

so remember ki jitne non primitive data types hai vo object return karte hai upon 
checking their data type


console.log(typeof anotherId); // symbol

 */
// https://262.ecma-international.org/5.1/#sec-11.4.3

/* +++++++++++++++++++++++lecture 9 finished++++++++++++++++++++++++++++++++ */

//lecture 10 
// stack and heap memory 
// jitne primitive data types waha stack memory use 
// jitne non primitive waha heap use hoti hai 

/* note that jab object stack mei made then we get a copy and when an object is 
made in heap then we get reference that means jo change we will do vo original mei 
hoga in case of heap but stack mei dont affect */

//example for stack 
let name="Gautam"// string so stack as primitive data type
let anothername = name
anothername="batman"
console.log(anothername)//returns batman
console.log(name)//returns Gautam 
// this implies ki line 102 mei anothername got copy of name so original mei change nahi hua 


//example for heap 

let userone={// here an object created so heap mei stored//
    email:"gb5656@gmail.com",
    upi:"userby12"

}
let usertwo=userone
usertwo.email="iambatman2005"
console.log(userone.email)
console.log(usertwo.email)//both returns iambatman2005//
// in heap usertwo is pointing to same object as userone so any change made in any of them will reflect in another//

//lecture 10  finish//








