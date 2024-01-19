let score = "33abc"

//console.log(typeof(score))


let valueInNumber = Number(score)
//console.log(typeof(valueInNumber))
//console.log(valueInNumber)

//"33" => 33
//"33abc" => NaN
//true => 1


let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "Romi" => true 

let someNumber = 33

let stirngNumber = String(someNumber)
// console.log(stirngNumber);
// console.log(typeof stirngNumber);

// ************************* operations ****************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " world"

let str3 = str1+str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); // possible , but bad practise

// console.log(+""); // Bad practise

// let num1 , num2 , num3

// num1 = num2 = num3 = 2+2 , Bad practise

let gameCounter = 100
// ++gameCounter; //Prefix
gameCounter++; //Postfix
console.log(gameCounter);