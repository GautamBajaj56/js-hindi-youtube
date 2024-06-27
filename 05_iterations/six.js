 /* +++++++++++++++++++++++++++++++lec 30 ++++++++++++++++++++++++++++++++++ */
 
 
 
 const coding = ["js", "ruby", "java", "python", "cpp"]


//const values = coding.forEach( (item) => {   //stored under a variable
    console.log(item);
    
//} )
console.log(values);
/* js
ruby
java
python
cpp
undefined */

/* undefined shows ki for each ne kuch return nahi kiya 
what if i use return statement? */

const values = coding.forEach( (item) => {   //stored under a variable
    //console.log(item);
    return item
} )

console.log(values); // undefined

/* above example shows ki for each in any case kuch return back nahi karte  */

/* but sometimes we want ki kuch specific values return ho so can use filter method 
for it as below explained */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => { /* filter function also requires a call 
                                             back function with an iterator(num in 
                                             this case) and a condition.
                                             also unlike for each , filter returns an 
                                             array of filtered values which satisfy 
                                             the condition mentioned. hence use ek 
                                             variable mei store karne ki need (newNums) 
                                             in this case so that aage use kar paaye */
    return num > 4
} )



// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

/* above is an alternate of filter ki agar same goal achieve karna hota using for 
each to kese karte both ways are correct */

// console.log(newNums);

/* below is another example of use case of filter */
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);

  /* ++++++++++++++++++++++++++++++lecture 30 continued aaage++++++++++++++++ */