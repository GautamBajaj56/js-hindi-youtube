/* +++++++++++++++++++++++++++++++lec 29 continued+++++++++++++++++++++++++++ */

/* higher order array loops  */

/* for each :- requires callback function as as a parameter
call back function type karte hue just remove the name of function */

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val); /* js
                       ruby
                       java
                       python
                       cpp */
} )
/* above val denotes each element of array  */

coding.forEach( (item) => {
    console.log(item);
} )

/* above example of for each loop using arrow function as call back function */

/* now below is another way of using for each loop  */

function printMe(item){
    console.log(item);
}

 coding.forEach(printMe) // here rem ki printMe ka reference dena only ise call nahi karna 

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

/* above example shows ki for each khaali item nahi leke aata array ka balki uske 
index and poora array leke bhi aata hai  */

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

/* in above example we learnt ki if array mei objects ho as elements then how can 
we apply loop over that objects and access their values  */


/* ++++++++++++++++++lecture 29 finished+++++++++++++++++++ */