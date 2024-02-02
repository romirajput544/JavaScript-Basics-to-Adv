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
    // console.log(item.languageName);
} )


// const codings = ["js", "ruby", "java", "python", "cpp"]

// const val = coding.forEach( (item) => {
//     console.log(item);
//     return item; // koi val return nai krta hai
// } )

// console.log(val);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4;
// }) 
// 

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num);
//     } 
// })
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userbooks = books.filter((bk) => bk.genre === 'History')

  userbooks = books.filter ( (bk) =>{return bk.publish >= 2000})

  userbooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
  })

  console.log(userbooks)