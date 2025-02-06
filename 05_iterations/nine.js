/* +++++++++++++++++++++++++++++lec 30 continued++++++++++++++++++++

++++++no eight.js present it is in continuation with seven.js+++++++
 */

/* here we will discuss reduce method  */

/* use case: say cart mei person has purchased many things and at the end we have to
calculate the total bill */

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);
/* acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6 */


/* pehla parameter is always accumulator variable jisko ek initial value deni padti 
hai( here given 0 in this case) and second parameter is current value which is taken
from array itself one by one in sequence see output of above example carefully to 
understand better  */

const myTota = myNums.reduce( (acc, curr) => acc+curr, 0) // here using reduce
// using arrow functions ( 0 is the initial value required for accumulator (acc)
// in this case)

console.log(myTota);// 6 





const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

/* calculating cart price by reduce method though for each se bhi ho jaata but 
this method is much more  convenient  */


/* +++++++++++++++++++++++++++++++++lecture 30 finished++++++++++++++++++++++ */

