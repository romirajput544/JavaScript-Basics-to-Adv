//object literals
// Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name : "Romi",
    "full name" : "Romi kumar singh",
    [mySym] : "myKey1", 
    age : 22,
    location : "Bhopal",
    email : "romirajput544@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]); // email in treated as string that is why we use double quote
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Abc@gmail.com"
// Object.freeze(JsUser) // object is freezed and now it cannot be changed

JsUser.email = "Abc@12345gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser , ${this.name}`);
}


// console.log(JsUser.greeting())
// console.log(JsUser.greeting2())

//*******************************************************************part-2************************************ *//

// const tinderUser = new Object() // singleton obj
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "soejnd@gmail.com",
    fullName :  {
        userFullName : {
            firtsName : "Romi",
            LastName : "rajput"
        }
    }
}

// console.log(regularUser.fullName.userFullName.LastName);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj6 = {5 : "a" , 6 : "b"}

// const obj5 = {obj1 , obj2}
// const obj3 = Object.assign(obj1 , obj2)
// console.log(obj3);
// const obj4 = Object.assign({} , obj1 , obj2 , obj6) // {} => target ,and is same as obj4


const obj7 = {...obj1,...obj2,...obj6}
// console.log(obj7);


const users = [
    {
        id : 1,
        email : "djjs@gmail.com"
    },
    {
        id : 2,
        email : "djjs@gmail.com"
    },
    {
        id : 3,
        email : "djjs@gmail.com"
    },
    {
        id : 4,
        email : "djjs@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//IMP

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//*************************************************************part-3 Destructuring and JSON *//

const course = {
    courseName: "js in hindi",
    price : "999",
    courseInstruct : "Hitesh"
}

// course.courseInstruct

const {courseInstruct : Instruct} = course //destructuring

// console.log(course.courseInstruct);
console.log(Instruct);

// {
//     "name" : "romi",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {},
]


