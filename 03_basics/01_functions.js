/* ++++++++++++++++++++++++++++++lecture 19 +++++++++++++++++++++++++++++++ */

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

 sayMyName // reference to function
 
 sayMyName() // function execution


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){  /*(number1, number2) are parameters 
                                             (during function definition) */

    // let result = number1 + number2
    // return result                   one way
    return number1 + number2    // another direct way
}

const result = addTwoNumbers(3, 5)  // (3, 5) are arguments ( during function call)
/* above result is different from upar wale block k result se due to scoping  */

// console.log("Result: ", result);

function loginUserMessage(username){
    
    
    return `${username} just logged in`
}
 console.log(loginUserMessage())// undefined just logged in

 function loginUserMessage(){
    if(username===undefined){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
 console.log(loginUserMessage())


 function loginUserMessage(){
    if(!username){    // equivalent to above 
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage())

// console.log(loginUserMessage("hitesh"))

function loginUserMessage(username="sam"){ // if user kuch pass na kare then sam to aayega hi by default
    if(!username){     
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 console.log(loginUserMessage())
  console.log(loginUserMessage("hitesh")) // by this overwrite ho jaayega sam 


  /* +++++++++++++++++++++++++++lecture 19 finished++++++++++++++++++++++++++++ */

  /* +++++++++++++++++++++++++++lecture 20+++++++++++++++++++++++++++++++++++++++ */
  
  
function calculateCartPrice( num1){
    return num1
}

console.log(calculateCartPrice(200)) // 200 

function calculateCartPrice( num1){
    return num1
}

console.log(calculateCartPrice(200,400,600)) // 200 

function calculateCartPrice(...num1){ /* rest operator ( similiar to spread syntax 
                                          just usecase pe depend karta kab we will 
                                          call it rest and kab spread)
                                          if function k andar as a parameter then 
                                          rest else spread  */
    return num1
}

console.log(calculateCartPrice(200,400,600,800)) // [200,400,600,800]
/* use case: consider a shopping cart where user kitne items add karga cart mei we 
never know so rest operator kaam mei aata hai to calculate total price using loop*/ 


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000)) //  [500,2000] 
 /* as 200,400 to val1 and val2 ho gye but we are returning only num1 */

 /* now we will try to pass an object into a function */

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){  /* anyobject means koi bhi object pass kar do 
                                        chalega bas hona object hi chaiye */
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // one way 
handleObject({
    username: "sam",
    price: 399
}) // another way ki direct object hi pass kar do 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ // passing any array into a function
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  one way 
console.log(returnSecondValue([200, 400, 500, 1000])); /* another way ki direct array 
hi pass kar do  */

/* ++++++++++++++++++++++++++++lecture 20 finished+++++++++++++++++++++++++++++++++ */