 //Ptimitive , Call by value(COPY IS SENT)

 //7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

//Javascript is a dynamically typed language


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 //Reference - Non primitive(Directly reference can be shared from the memory)

 //Array , Objects , Functions
 
const heros = ["shaktiman" , "naagraj" , "krissh"]

let myObj = {
    name:"Romi",
    age:22,
}

const myFunction = function(){
    console.log("Heloo world");
}


console.log(typeof outsideTemp);