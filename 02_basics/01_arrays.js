/* ++++++++++++++++++++++++++lecture 14++++++++++++++++++++++++++++++++++++ */

// array

/* the Array object, as with arrays in other programming languages, enables storing a 
collection of multiple items under a single variable name, and has members for 
performing common array operations.
 */

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

/* arrays mei mixed elements bhi aa sakte hai of different data types like python
 */

/* JavaScript arrays are resizable and can contain a mix of different data types. 
(When those characteristics are undesirable, use typed arrays instead.) */

/* JavaScript array-copy operations create shallow copies. (All standard built-in 
copy operations with any JavaScript objects create shallow copies, rather than deep 
copies).

A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the 
copy was made. As a result, when you change either the source or the copy, you may 
also cause the other object to change too. That behavior contrasts with the behavior 
of a deep copy, in which the source and copy are completely independent.

A deep copy of an object is a copy whose properties do not share the same references 
(point to the same underlying values) as those of the source object from which the 
copy was made. As a result, when you change either the source or the copy, you can be 
assured you're not causing the other object to change too. That behavior contrasts 
with the behavior of a shallow copy, in which changes to nested properties in the 
source or the copy may cause the other object to change too.*/



const arr=[0,1,true,false,"hitesh",null,undefined,{}]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

 myArr.push(6)
 console.log("push 6",myArr); 

 myArr.push(7)
 console.log("push 7",myArr);
/* push method adds the element at the end of array */
 
myArr.pop()// it removes last element from array
console.log("pop",myArr);

 myArr.unshift(9) //it will add 9 at the start of array
/*basically agar values say 10k then start mei add karne se saare elements ko shift
karna padega jisse device pe load padega but agar required hai to fir use karna hi 
padega optimisation jaaye bhaad mei pehle kaam karna chaiye  */
console.log("unshift 9",myArr);

 myArr.shift() /* it will remove first start element from array */
 console.log("shift",myArr);

 console.log(myArr.includes(9)); // returns boolean value checks existence of element
 console.log(myArr.indexOf(13)); // returns index of element. if not found returns -1

 const newArr = myArr.join() /* 
 Adds all the elements of an array into a string, separated by the specified 
 separator string. */

 console.log(myArr);
 console.log( newArr);// datatype changed to string
 console.log(typeof newArr);


// slice, splice (vimp wrt interview the difference)

console.log("A ", myArr); /* A  [0, 1, 2, 3, 4, 5, 6] */


const myn1 = myArr.slice(1, 3) 
console.log(myn1);//[ 1, 2 ]

console.log("B ", myArr); /* B  [0, 1, 2, 3, 4, 5, 6] */
/* this implies original array remain as it is. 
this means slice does not modify original array
also range k end point se ek kum tak chala  */


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); //C  [ 0, 4, 5, 6 ]
console.log(myn2); //[ 1, 2, 3 ]

/* splice basically:-
1. range k end point tak chalta hai 
2. original array ko modify karta hai ( basically ek portion nikal hi diya usme se )

so basically take care which methods modify original array and which does not */

/* ++++++++++++++++++++lecture 14 finished++++++++++++++++++++++++++++++++++++++ */
