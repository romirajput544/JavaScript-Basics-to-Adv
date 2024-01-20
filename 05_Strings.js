const name = "romi"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('romi-hc-Verma') // Here string is an object in key value pair

// console.log(gameName[0])
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,8)
console.log(anotherString);

const newStringOne = "   Romi   "
console.log(newStringOne);
console.log(newStringOne.trim()) // removes starting spaces and ending spaces

const url = "https://romi.com/romi%20singh"
console.log(url.replace('%20' , '-'))

console.log(url.includes('romi'))

console.log(gameName.split('-')); // gives output in an array


