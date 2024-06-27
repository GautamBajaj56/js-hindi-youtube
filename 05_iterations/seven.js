/* ++++++++++++++++++++++++lec 30 continued+++++++++++++++++++++++
 */
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
/* above map method is similiar to  python i.e. it is used to perform a specific 
operation by you on every element of array passed and it returns that 
array of modified elements*/

/* output: [11,12,13,14,15,16,17,18,19,20] */

/* now below will discuss concept of chaining i.e. using multiple methods ek saath 
jese map k baaad map fir uske baad filter etc. */



const newNums = myNumers
                .map((num) => num * 10 ) // (10,20,30,40,50,60,70,80,90,100)
                .map( (num) => num + 1)   /* (11,21,31,41,51,61,71,81,91,101)
                                               here num will be from array returned 
                                               by above method */ 
                .filter( (num) => num >= 40) /*  here num will be from array returned
                                                 by above method */

console.log(newNums);

/* output: [
  41, 51,  61, 71,
  81, 91, 101
] */

  /* ++++++++++++++++++++++++++lec 30 continued aage+++++++++++++++++++++++++++ */