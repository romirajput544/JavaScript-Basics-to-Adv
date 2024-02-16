const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls , cryptography , N/W calls
    setTimeout(function(){
        console.log('Asyanc task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Asyan task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Asyan 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"romi",email:"abcd@123.gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username:"romi",password:"123"})
        }else{
            reject('ERROR"Something went wrong')
        }
    } , 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(`${username}`)
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getALLUsers(){
//     try{
//         const respone = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await respone.json()
//         console.log(data);
//     }catch (error){
//         console.log(error);
//     }
// }

// getALLUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
