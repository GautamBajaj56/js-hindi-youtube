/* ++++++++++++++++++++++++++++++lecture 12++++++++++++++++++++++++++++++++++++ */


const score = 400
 console.log(score); //output 400 no issues //

const balance = new Number(100.768)// another way to declare a number //
 /* but the differece between two is line 1 mei js will decide the
 datatype by itself but if we want to make sure ki datatype number hi
  ho then expliciltly we can ensure that using above line */


 console.log(balance); /* [Number: 100] output
  here specially likha ki number type ka object hai. also like 
 strings agar iss "new" keyword se object create karenge to at console
 we will get to know more about different functions which we can use
 with that datatype.(another benefit) */

 console.log(balance.toString().length); /* this converts number
  to string and hence can use all functions of string on balance too
  ( will return length in this case) */

 console.log(balance.toFixed(2)); /* it tells ki decimal k baad kitni 
 digits show hongi and it round offs it accordingly
 */
const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(4));// watch 8:00-8:30
 //https://www.youtube.com/watch?v=_KqpeDc47Ro&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13//

const hundreds = 1000000  /* seeing so many zeroes creates confusion
 reduces readability */
console.log(hundreds.toLocaleString()); /* it improves readability by
 inserting commas  */
/* 1,000,000 is the output but it is in american style by default to
 make it into indian pass an argument as below */

 console.log(hundreds.toLocaleString('en-IN'));
 /* 10,00,000 as output in indian format */


// +++++++++++++ Maths +++++++++++++++++++++++++++++

//Math is a library used in javascript 

 console.log(Math); // Object [Math] {} (output)// 

console.log(Math.abs(-4));/* absolute function same as mode || 
function i math i.e. always returns positive value  
output: 4 */

console.log(Math.round(4.6));/* round offs output 5 */

console.log(Math.ceil(4.2)); /* returns top value output 5
agar 4.1 bhi hota tab bhi output 5 hota */

console.log(Math.floor(4.9));/* returns least bound 4 here  */

console.log(Math.min(4, 3, 6, 8));/* returns the minimum element 
from array 3 here */

console.log(Math.max(4, 3, 6, 8));/* returns the maximum element 
from array 8 here */

console.log(Math.random());  /* Math.random() is a method in JavaScript that generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). This means the generated number can be 0 but will always be less than 1. */

console.log((Math.random()*10) + 1);/* this will give value between
 1 and 10 but still floating point
  */
console.log(Math.floor(Math.random()*10) + 1);/* this will give value between
1 and 10 but integer
 */

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/* general formula to generate a random integer between a particular 
range with min value including  */

/* +++++++++++++++++++++lecture finish+++++++++++++++++++++++ */