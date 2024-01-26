const user = {
    username  :"romi",
    price :999,

    welcomeMsg : function(){
        console.log(`${this.username} , Welcome to our website`);
        // console.log(this);
    }
}
// user.welcomeMsg();
// user.username = "sam"
// user.welcomeMsg();

// console.log(this);

// function chai() {
//     let username = "romi"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "romi"
//     console.log(this.username);
// }


const chai = () => {
    let username = "romi"
    console.log(this.username);
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2 // explicit return 
// }

// console.log(addTwo(3,4));


// const addTwo = (num1 , num2) => (num1 + num2) // Implicit return 


const addTwo = (num1 , num2) => ({username : "romi"}) 


console.log(addTwo(3,4));


const myArr = [2,3,4,5,6]
