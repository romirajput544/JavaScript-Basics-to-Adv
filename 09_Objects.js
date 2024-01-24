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


console.log(JsUser.greeting())
console.log(JsUser.greeting2())