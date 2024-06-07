/* ++++++++++++++++++++lecture 26 continued +++++++++++++++++++*/

// switch (key) {
//     case value:
                               /* syntax */
//         break;

//     default:
//         break;
// }

const month = "march"      /*alternative of if else basically 
                            comparison operators ka yaha use 
                            nahi karna padta  */

                            /* when with string */

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

/* basically main use of break statement is that if break here 
na hota then ek case match hone k bavjood saare cases run hote 
EXCEPT DEFALUT CASE REMEMBER

DEFAULT case is when koi bhi case match na kare then default case
 run hoga */


 month = 3    /* with integers */

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


/* ++++++++++++++++++++++++++next++++++++++++++++++++++++ */