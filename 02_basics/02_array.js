/* ++++++++++++++++++++++++++++++++lecture 15+++++++++++++++++++++++++++++++++ */

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

console.log(marvel_heros); /* 
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
 this implies:-
 1. push operation ne directly insert kar diya treating another array as an element
 2. push operation make changes in original array
 3. it shows array mei any type of element can be added */

//console.log(marvel_heros[3][1]);// flash  (accessing element)

 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);
 /* [
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
] 
  
note that concat does not modify original array but returns a new array which is 
needed to be stored*/

/* but using spread operator is better than concat as concat can be applied only 
on two arrays whereas spread can be applied to any number of arrays */

const all_new_heros = [...marvel_heros, ...dc_heros]
/* (...) Spread syntax can be used when all elements from an object or array need to 
be included in a new array or object, or should be applied one-by-one in a function 
call's arguments list.  */

 console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
/* Returns a new array with all sub-array elements concatenated into it recursively 
up to the specified depth.
basically flat kar deta array ko and we also need to specify depth but by writing 
infinity it will do it by itself though not optimized but will do the work */

console.log(real_another_array);
/* [1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5] */


console.log(Array.isArray("Hitesh"))  /* it checks whether the passed argument is an 
array or not and returns boolean value (false in this case as it is a string) */

console.log(Array.from("Hitesh")) //  conversion into array
// [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name: "hitesh"})) // interesting
/* []
here need to specify array keys ka banana hai ya values ka else it will return 
an empty array if its not able to make */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); /* Returns a new array from a set of 
elements.
[ 100, 200, 300 ] */

/* ++++++++++++++++++++++++++++++lecture 15 finished++++++++++++++++++++++++++++++ */