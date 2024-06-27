/* +++++++++++++++++++++++++++Lecture 23 ++++++++++++++++++ */

/* in this lec will be studying about "this" keyword and 
how to declare arrow functions */

/* in line we just want to add the username of object given to us so 
have to use this keyword */

/* learn about this keyword more in ms word file */

/* this keyword in short current context ko refer karta hai  */

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage() // hitesh, welcome to website
/* {
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */
user.username = "sam"
user.welcomeMessage()// sam, welcome to website
/* {
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
} */


/* above example shows ki username hard coded nahi tha if changes kiye then reflect 
bhi hue due to this keyword as this current instance/context ko point karta hai   */

console.log(this); //{} (an empty object)

/* but if webpage cosole pe jaake karte then window object return karta */

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()

/* normal function declaration as we know below */

const chai = function () {
    let username = "hitesh"
    console.log(this.username); // undefined as this does not work inside functions
                                // works only in objects 
}

/* arrow function declaration  below */

const chai =  () => {
    let username = "hitesh"
    console.log(this);  //{}      this will not work inside functions 
                       //works only in objects
}


chai()

/* arrow function banane k liye simply remove function keyword and add arrow */

//() => {} a simpple arrow function jo abhi kisi variable mei stored nahi hai
// const add = ()=>{} here store karva diya 
// {} iske andar function definition aayegi 

const addTwo = (num1, num2) => { /* when braces used return statement
                                           is must */
    return num1 + num2
}

 addTwo = (num1, num2) =>  num1 + num2   // no return statement required

 addTwo = (num1, num2) => ( num1 + num2 )// no return statement required
                                        // when () are used 


 addTwo = (num1, num2) => ({username: "hitesh"}) //no return statement required


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()

/* ++++++++++++++++++++++++lecture 23 finished++++++++ */