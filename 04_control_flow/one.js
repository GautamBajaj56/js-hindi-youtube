/* ++++++++++++++++++++++lecture 26+++++++++++++++++ */

 /* in this lecture basically control flow is discussed. like in 
 previous lecture notes if we will execute then saari non comment 
 lines execute ho jaayengi but by control flow we want that only 
 certain lines of code executes baswd upon some condition */



// if
const isUserloggedIn = true
const temperature = 41

/* note that == operator just compares value and not data type
like if (2=="2") then ye true hoga and code k andar chala 
jaayega but whenever you want to be specific with datatype as 
well use === operator.according to this, 2==="2" will give false
similarly with != and !==( it checks dataytype as well)   */

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Execute");
//<, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); // scope explained


 const balance = 1000

 if (balance > 500) console.log("test"),console.log("test2");
 /* bad practice though we can write in 1 line called implicit 
 scope but it has reduces readability
 */

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

/* ++++++++++++++++++++++++++next++++++++++++++++++++++++ */

