/* ++++++++++++++++++++++lecture 8++++++++++++++++++++ */


// console.log(2 > 1);         /* basic no neeed to cover */
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


 console.log("2" > 1);// true as conversion took place
 console.log("02" > 1);//true as conversion took place

console.log(null > 0);// false
console.log(null == 0);//false
console.log(null >= 0);//true

/* the reason is that an equality check == and comparisons
>,<,>= ,<= work differently. comparisons convert null to
a number, treating it as 0. that's why null>=0 is true
and null>0 is false */

console.log(undefined == 0); // false in every case
console.log(undefined > 0);// false
console.log(undefined < 0);// false

// === 

console.log("2" === 2); //false as ek string doosra number

/* ===(triple equal to)basically compares value as well as datatype (called strict 
check thats why)
== mei datatype conversion ho jaata tha while comparing but in === no conversion
takes place  */

/* an imp note 
avoid any comparisons with inconsistensies like comparison with null or undefined
as they may lead to unexpected results  */


/* ++++++++++++++++++++++++++lecture 8 finished++++++++++++++++++++++++++++++ */