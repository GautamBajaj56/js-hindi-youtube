let score = 33
/* here we know ki score is a number but sometimes request 
aayegi and we dont know directly the datatype so you can use 
type of keyword  */

console.log(typeof score); // number
console.log(typeof(score));//number

/* both are correct fark sirf brackets ka */

score = "33"
console.log(typeof score); //string
console.log(typeof(score));//string

/* but now assume ki you have to apply operation on number itself
then convert it */

let valueInNumber = Number(score) /* datatype conversion */
console.log(typeof valueInNumber);// number
console.log(valueInNumber); //33

score = "33abc"
console.log(typeof score); //string
console.log(typeof(score));//string

 valueInNumber = Number(score) /* datatype conversion */
console.log(typeof valueInNumber);// number
console.log(valueInNumber); //NaN (not a number)

/* so here note that string value ho to gyi convert into a 
number but display NaN hui as it is not possible to display 
33abc as a number.  */

score = null
console.log(typeof score); //object
console.log(typeof(score));//object

 valueInNumber = Number(score) /* datatype conversion */
console.log(typeof valueInNumber);// number
console.log(valueInNumber); // 0 (zero)

score = undefined
console.log(typeof score); //undefined
console.log(typeof(score));//undefined

 valueInNumber = Number(score) /* datatype conversion */
console.log(typeof valueInNumber);// number
console.log(valueInNumber); //NaN (not a number)

score = true
console.log(typeof score); //boolean
console.log(typeof(score));//boolean

 valueInNumber = Number(score) /* datatype conversion */
console.log(typeof valueInNumber);// number
console.log(valueInNumber); //1

score = false
console.log(typeof score); //boolean
console.log(typeof(score));//boolean

 valueInNumber = Number(score) /* datatype conversion */
console.log(typeof valueInNumber);// number
console.log(valueInNumber); //0




// "33" => 33      => means converts into
// "33abc" => NaN
//  true => 1; false => 0  /* a short summary */

/* some more conversions:- */

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);// true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true    => means converts into

let someNumber = 33

let stringNumber = String(someNumber) //conversion into string
 console.log(stringNumber);//33
 console.log(typeof stringNumber);//string

 /* +++++++++++++++++++lecture 6 finished++++++++++++++++++ */


 /* ++++++++++++++++++++lecture 7+++++++++++++++++++++++++ */

// *********************** Operations ***********************

let value = 3
let negValue = -value
 console.log(negValue); //-3
 console.log(2+2);//4
 console.log(2-2);//0
 console.log(2*2);//4
 console.log(2**3);//8
 console.log(2/3);//0
 console.log(2%3);//2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
 console.log(str3) // hello hitesh
 console.log("1" + 2);// 12
 console.log(1 + "2");//12
 console.log("1" + 2 + 2);//122
 console.log(1 + 2 + "2");//32

 console.log( (3 + 4) * 5 % 3); //use brackets to compute 
//operation jise pehle karna ho

 console.log(+true);// 1 (+ ne basically convert kar diya)
 console.log(+"")// 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  /* declaration ways but low readability */

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

/* postfix and prefix ka difference should be clear same as c++
++gamecounter and gamecounter++ */

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/* +++++++++++++++++++lecture 7 finished++++++++++++++++++ */
