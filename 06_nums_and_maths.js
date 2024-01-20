const score = 400 
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.89666
// console.log(otherNumber.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++ Maths ++++++++++++++++

console.log(Math); // Math is a Lib and it is an object
// console.log(Math.abs(-488973));
// console.log(Math.ceil(56.3));
// console.log(Math.floor(56.3));
// console.log(Math.round(4.6));
// console.log(Math.min(2,4,1,7,4));

let randomNum = Math.random();
console.log(randomNum);//ranges from 0 to 1

console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) 