//for


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best no.");
    }
    // console.log(element);    
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop : ${i}`);
    for (let j = 0; j < 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    } 
}


let myArray = ["flash","Batman","Superman"]

for (let i = 0; i < myArray.length; i++) {
    const ele = myArray[i];
    // console.log(`Value at index ${i}: ${ele}`);
}

//break and continue

for (let i = 0; i < 20 ; i++){
    if(i == 5){
        // console.log('Detected 5');
        break;
    }
    // console.log(`Value of i is : ${i}`);
}

for (let i = 0; i < 20 ; i++){
    if(i == 5){
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i is : ${i}`);
}