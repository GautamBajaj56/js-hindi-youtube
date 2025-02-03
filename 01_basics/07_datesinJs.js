/* +++++++++++++++++++++++++++++++++++lecture 13+++++++++++++++++++++++++++++ */

// Dates

/*JavaScript Date objects represent a single moment in time in a platform-independent 
format. Date objects encapsulate an integral number that represents milliseconds 
since the midnight at the beginning of January 1, 1970,   */

let myDate = new Date()
// console.log(myDate)  // 2024-06-25T11:58:37.390Z (not comparable and useful)
// console.log(myDate.toString());  // Tue Jun 25 2024 17:31:21 GMT+0530 (India Standard Time) ( thoda sa better)
// console.log(myDate.toISOString());  // 2024-06-25T12:05:56.539Z
// console.log(myDate.toJSON());  // 
//  console.log(myDate.toDateString()); //Tue Jun 25 2024
// console.log(myDate.toLocaleString()); // 25/6/2024, 5:32:31 pm
// console.log(typeof myDate);  // object

 //let myCreatedDate = new Date(2023, 0, 23) 
/*initialising a date of our own wish and note that months start from 0 in js  */
// console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 12:00:00 am
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDate = new Date(2023, 0, 23, 5, 3) // specifying time also along with date
//console.log(myCreatedDate.toLocaleString()); //23/1/2023, 5:03:00 am


  myCreatedDate = new Date("2023-01-14") 
 //specifying date in YY-MM-DD format ( in string month starts from 1 )
 //console.log(myCreatedDate.toLocaleString()); //14/1/2023, 5:30:00 am

myCreatedDate = new Date("02-14-2023")
console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()

/*  console.log(myTimeStamp); will get milliseconds from 1 jan 1970 to present
console.log(myCreatedDate.getTime());  will convert date to milliseconds for 
comparison
 console.log(Math.floor(Date.now()/1000)); 
 to convert into seconds and dont get any decimal value we used floor
 */

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); (to get month in desired format i.e. jan is 1)
// console.log(newDate.getDay());        ( to get day 1 for monday)

// `${newDate.getDay()} and the time `      (string interpolation)

newDate.toLocaleString('default',{
    weekday:"long" 
      //(cursor here)                   press ctrl+space for properties like weekday
})


/* +++++++++++++++++++++++++++++++++lecture 13 finished+++++++++++++++++++++ */

