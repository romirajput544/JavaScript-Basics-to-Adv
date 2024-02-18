// let myName = "romi    "
// let myChannel = "chai    "

// console.log(myName.truelength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.romi = function(){
    console.log(`romi is present in all object`);
}

Array.prototype.heyromi = function(){
    console.log(`romi says hello`);
}

// heroPower.romi()
// myHeros.romi()
// myHeros.heyromi()
// heroPower.heyromi()


// inheritance , prototypal inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"romi".trueLength()
"iceTea".trueLength()