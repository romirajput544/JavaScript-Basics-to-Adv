function sayMyName(){
    console.log("ROMI");
}

// sayMyName()

// function addTwoNo(num1 , num2){
//     console.log(num1 + num2);
// }

function addTwoNo(num1 , num2){
    return num1 + num2;
}


const res = addTwoNo(3,5)
// console.log("Result: ",res);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Pls enter a username");
        return
    }
    return `${username} just logged in`
} 

// console.log(loginUserMessage("ROMI"));
// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,500,2000));

const user = {
    username : "romi",
    prices : 199
}

function handleObject(anyObj){
    console.log(`User name is ${anyObj.username} and price is ${anyObj.price}`);
}

// handleObject(user)
handleObject({
    username:"John Doe",
    price : 399
})

const myNewArray = [200 , 400 , 100 , 600]

function returnSecVal(getArr){
    return getArr[1]
}
// console.log(returnSecVal(myNewArray));
console.log(returnSecVal([200,400,100,500]));