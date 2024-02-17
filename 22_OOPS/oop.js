const user = {
    username : "hitesh",
    loginCount : 8,
    singedIn : true,

    getUsrDetails : function(){
        // console.log("Got user details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUsrDetails());
// console.log(this)

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.geeting = function(){
        console.log(`welcome  ${this.username}`);
    }

    return this
}

const userOne = new User("ROMI",12,true)
const userTwo = new User("Chai aur code",11,false)
console.log(userOne.constructor);
// console.log(userTwo);