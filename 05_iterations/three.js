// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}
/* in this for of loop though we will mostly use normal for loop
there is no need to give condition or increment decrement  */

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

/* The Map object holds key-value pairs and remembers the 
original insertion order of the keys.
the main difference between object and map is 
1. contains unique key value pairs
2. order is preserved  */

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") /* this line will make no difference in 
output as maps dont contain duplicate key value pairs */


//console.log(map);

for(const key of map){
     console.log(key);

}
/* here saara ka saara de dega in same order in which key value 
 were inserted */

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

/* by this method alag alag dega destructure kar diya array ko
 */

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

/* note that object is not iterable whereas maps are iterable
so objects can't be iterated via this map way we will follow 
another way for it */

/* +++++++++++++++++continued further in four.js++++++++++ */