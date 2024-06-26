/* +++++++++++++++++++++++++++++++Lecture 21 and 22+++++++++++++++++++++++ */

var c = 300
let a = 300
const b=200
if (true) {
    let a = 10
    const b = 20
    var c=21 // or khaali c=21 bhi likhte tab bhi same problem
    console.log("INNER: ", a);//10
    
}



console.log(a); //300
console.log(b);//200
console.log(c);//21

/* curly braces in if else or in function indicates scope in all 
langauges. scope is lifetime of a variable. as soon as it reaches
the end of curly brace means scope is going to end and variable is 
destroyed */

/* the reason we dont use var is clearly displayed above due to 
scope and namespace issues */




function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); // accessible
    }
    // console.log(website);  not accessible 

     two()

}

/* always remember scope as chota bacha bade  bache se pese maang 
sakta but bada bacha chote se nahi same with scope inner scope wala 
bade scope k variables and function inherit kar sakta but vice versa 
is not true */

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); accessible 
    }
    // console.log(website);  not accessible 
}

// console.log(username); not accessible 


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

/* this is one form of function declaration(direct)
in this format even if function call function header se upar maar dii
no issues function will give correct output */

/* below way is another way to declare a function via expression
(basically js variables can store anything) */



addTwo(5)
const addTwo = function(num){
    return num + 2
}


/* here function call can't be given above function initialization 
error aayega so neeche hi deni padegi when expression mei function is stored */



/* ++++++++++++++++++++lecture 21 and 22 finish++++++++++++++++ */