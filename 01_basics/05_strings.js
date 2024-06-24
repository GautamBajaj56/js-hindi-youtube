/* ++++++++++++++++++++++++++++lecture 11++++++++++++++++++++++++++++++++++ */

const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");/* old ways to concatenate 
strings unprofessional don't use this from now onwards */

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//this is a better and modern way similiar to f string in python//

const gameName = new String('hitesh-hc-com')//another way to declare a string//
/* difference between line 10 declaration and line 1,2 declaration is
 that go to console and type line 10 you will see many functions of 
 string which you can use in line 10 but not in line 1,2 */

console.log(gameName[0]);/* will return 0th character i.e. h of
 gamename(but keep in mind it is not like indexing string actually is
 an object and not an array in js so visualise it as key value pair 
 dictionary in simpler terms */


 console.log(gameName.__proto__);// will return {} indicating it is an object


 console.log(gameName.length);// will return 8 i.e. length of the string

 console.log(gameName.toUpperCase());//will print in uppercase//
 // here note that original mei change nahi hua as stack mei copy is created 

console.log(gameName.charAt(2));// will return t (used to find character at a particular index)

console.log(gameName.indexOf('t'));// will tell the index at which first occurence of t is found

const newString = gameName.substring(0, 4)
console.log(newString);// returns hite (similiar to python last index se ek kam tak chalega)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);// will give same output 
 /* main difference in substring and slice() is in slice you can give 
-ve number as well but in substring though error nahi dega but 
internally 0 se hi start kar dega */

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
/* the trim() method of String values removes whitespace from both ends
 of this string and returns a new string, without modifying the 
 original string.To return a new string with whitespace trimmed from 
 just one end, use trimStart() or trimEnd().A new string representing 
 str stripped of whitespace from both its beginning and end.
  Whitespace is defined as white space characters plus line 
  terminators.

If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).
 */
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// will replace 

console.log(url.includes('sundar'))/* it will return true or false
 depending upon whether the substring is present or not
 */
console.log(gameName.split('-')); /* it will give an array where string 
is split  */ //[ 'hitesh', 'hc', 'com' ]

 /* also read from console all methods as this topic is imp learn 
about its all methods from console and mdn  */


//LECTURE FINISH//

