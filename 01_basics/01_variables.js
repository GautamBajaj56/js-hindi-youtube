/* basically in js two main ways to declare variables 
const and let */



const accountId = 144553
/* use const ki agar fixed value variables assign karne ho 
jinki values future mei change karne ki need na ho and na hi 
karne ho */

let accountEmail = "hitesh@google.com"
/* use this when we know ki values change karne ki need pad 
sakti hai  */

var accountPassword = "12345" // dont use

accountCity = "Jaipur" /* bina const and let k bhi variables 
ko value assign kii jaa sakti hai remember that */



// accountId = 2 // not allowed

/* The const declaration declares block-scoped local variables. 
The value of a constant can't be changed through reassignment 
using the assignment operator, but if a constant is an object, 
its properties can be added, updated, or removed. */


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let accountState;
/* basically sometimes we don't know ki variable mei kya value 
aayegi so sometimes we don't assign any value at declaration so 
undefined hota hai display */


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* The console.table() static method displays tabular data as a 
table.
basically baar baar multiple variables ki value print karvaani ho
 then console.table is helpful  */

 /* check outputs too */

 /* ++++++++++++++++++++lecture 4 finished++++++++++++++++++++ */