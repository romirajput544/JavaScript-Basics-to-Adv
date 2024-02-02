//for of

 // ["", "", ""]
// [{}, {}, {}]

const arr = [1 , 2 , 3 , 4 , 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}



//Maps
const map = new Map() //it is also an object,remembers the  order that elements were added
map.set('romi',1)
map.set('somi',2)

map.set('nessu',3) 
map.set('romi',1)//store uniquevalue

// console.log(map)
for (const [key,value] of map) {
    // console.log(key , ":-" ,value);
}


const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObj) {
//     console.log(key , ":-" ,value);
// }

//******************************************************objects****************************************************************//

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}


for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map1 = new Map() // iteratable nai hai
map.set('romi',1)
map.set('somi',2)
map.set('nessu',3) 
map.set('romi',1)


// for (const key in map) {
//     console.log(key);
// }

//**************************************************************for each *****************************************//

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    // console.log(item);
})

coding.forEach((val) => {
    // console.log(val);
})


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item,index,arr) => {
    // console.log(item , index , arr);
})

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