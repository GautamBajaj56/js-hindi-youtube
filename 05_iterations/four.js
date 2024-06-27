const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
} /* an object created */

/* basically objects ko bhi iterate karna hi hai so we can use 
"for in" loop (for in loop iska ye matlab nahi ki khaali objects
 pe lagta hai  )   */

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
/* for in loop can be used over arrays as well as visualise 
arrays as objects with key starting from 0 (index) */

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

/* this for in loop will not work over maps as it is non iteratable */

/* ++++++++++++++++++++continued in five.js+++++++++++++++++ */