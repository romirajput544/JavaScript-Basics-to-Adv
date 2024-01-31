//  if
const isUserLoggedIn = true
const temp = 41

// if (temp === 41) {
//     console.log("less than 50");
// }
// else{
//     console.log("temp greater than 50");
// }

//< , > , <= , >= , == , != , === , !== 

// const score = 200

// if (score > 100){
//     const power = "fly";
//     console.log(`User power : ${power}`)
// }
// console.log(`User power : ${power}`)


const balance = 1000

// if (balance) console.log("test"); // Implicit scope

// if (balance < 500) {
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

//********************************************************switch*******************************************//

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

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

//***********************************************************TRUTHY & FALSY *//

const userEmail = []

if (userEmail) {
    console.log("got user email");
} else{
    console.log("dont have user email");
}

//falsy value

//false , Nan , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value

//"0" , 'false'," " ,[],{},funciton(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
// val1 = null ?? 10 // null value aayi tho safety check krdo
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);