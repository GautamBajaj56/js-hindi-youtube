/* video 40  */

/* will discuss about promises and its various syntax */

/* A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner, more powerful way to handle asynchronous operations compared to traditional callback-based approaches. */

/* States of a Promise
A Promise can be in one of three states:

Pending: The initial state. The operation is ongoing, and the final value or reason for failure is not yet available.

Fulfilled: The operation completed successfully, and a resulting value is available.

Rejected: The operation failed, and a reason for the failure is available. */

/* Creating a Promise
You create a Promise using the Promise constructor. The constructor takes a single argument: a function called the executor function. This function takes two arguments: resolve and reject. */

/* resolve is for when the operation is completed successfully, uske baad kya karna hai ya display karna hai

reject is for when operation is failed and uske baad kya display karna hai */


const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // this statement connects to line 33 (then function) and uska content is executed
        console.log("hello")
    }, 1000)
})

promiseOne.then(function(){ // this block of code will execute when resolve()tak flow pahunch jaaye which implies ki operation fulfill ho chuka hai
    console.log("Promise consumed");
})

/* output from line 24 to 36: 
Async task is compelete
hello
Promise consumed */

/* above was one syntax for promise creation. now will discuss another syntax for 
promises declaration. */




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

/* above syntax mei single thread mei kar diya any approach can follow */

/* now below example shows that the parameter passed in resolve function goes directly into then() as a parameter */

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

/* output from line 63 to 71: { username: 'Chai', email: 'chai@example.com' } */

/* below example shows the use of reject */

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
            console.log("hello")
        }
    }, 1000)
})

 promiseFour
 .then((user) => {      /* Chaining Promises
                            You can chain multiple then methods to handle a sequence of asynchronous operations: */
    console.log(user);
    return user.username     // this user.username went to below then() as an argument
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

/* output from line 77 to 99: 
hello
ERROR: Something went wrong
The promise is either resolved or rejected */

/* basically resolve() is linked to then () i.e. when resolve() will be called then then() k andar ka execute hoga
similiarly reject() is linked to catch function when operation is unsuccessful then catch function k andar ka execute hoga.
finally() is always executed at the end whether operation is successful or unsuccessful. */

/* Using Promises
Once a Promise is created, you can handle its eventual result using then, catch, and finally methods.

then: Invoked when the Promise is fulfilled. It takes two optional arguments: a callback for the fulfillment case, and a callback for the rejection case.

catch: Invoked when the Promise is rejected. It takes one argument: a callback for the rejection case.

finally: Invoked when the Promise is settled (either fulfilled or rejected). It takes one argument: a callback to execute when the Promise is settled. */

/* now below is totally different way to create promises and handle them */



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){  /* 3. Async/Await
                                          Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code. */
    try {
        const response = await promiseFive  
        console.log(response);

        /* try block will be executed when promise is fulfilled. if some error is caught and promise is not fulfilled due to any reason then flow catch block mei chala jaata hai and vo execute hota hai */

        /* The await keyword in JavaScript is used to pause the execution of an asynchronous function until a Promise is fulfilled. It can only be used inside async functions, which are special functions that return a Promise. When await is used, it makes the code look synchronous, which can make it easier to read and write.
        
        await basically unn events k aage we use jinme we know ki return value aane mei thoda time lag sakta hai so we want ki jab tak return values na aaye tab tak aage ka koi asynchronous operation execute na ho*/

    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

/* output of this block of code: ERROR: JS went wrong */

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() // json mei bhi convert karne pe time lagta hai 
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

https://chatgpt.com/c/d09b7936-add9-4847-86dc-f7ff173300d9

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')// fetch ka response type is promise

.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

/* video 40 finished . watch video 41  */

