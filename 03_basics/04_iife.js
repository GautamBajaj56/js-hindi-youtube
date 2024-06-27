// Immediately Invoked Function Expressions (IIFE)

/* ++++++++++++++++++  lecture 24++++++++++++++++++++ */

/* concept about IIFE and why do we need them:
1. these are those functions jo immediately execute ho jaaye
2. and to reduce pollution due to global scope(i.e. variables methods declared in 
global scope sometimes cause problem so to prevent its pollution we use IIFE) */


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    /* an IIFE where first () denotes function definition and second () denotes
           function call */
           /* ()() first wala for function definition second wala for function call */




( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') // unnamed or simple IIFE with a parameter 

( () => {
    console.log(`DB CONNECTED TWO `);
} )()      // simple IIFE with no parameter


/* note if humare function mei only one IIFE then no need of semicolon in line 14
but if multiple IIFE are there in a program file and you want that every IIFE should 
work properly then semicolon is must as semicolon marks the termination of one IIFE */


/* ++++++++++++++++++++++++++++lecture finish++++++++++++++++++++++++++++++ */

