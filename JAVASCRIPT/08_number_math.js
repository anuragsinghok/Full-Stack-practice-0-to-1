// numbers and maths in javascript

// numbers and maths in JS

// const score = 400
// console.log(score);
// // output: 400
// //both up and down are same way we can define both way 
// // const balance =  new number(100)
// // console.log(balance)
// //output : [number: 100]

// console.log(score.toString().length);
// console.log(score.toFixed(2)); //point ke baad 2 value tk ata hai

// const otherNumber = 123.9324

// console.log(otherNumber.toPrecision(3)) //precision value deta hai 

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) //it give accprding to indian now after giving en - IN but default it give us value

//++++++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  //negative ko positive bna deta hai
console.log(Math.round(4.6));  //round of the value
console.log(Math.floor(4.6));  //just round off to nearest calue

console.log(Math.min(2,3,4,5,6,7));
console.log(Math.max(2,3,4,5,6,7));


// where we use most we use most on random pe

console.log(Math.random()); //random value will be between 0 to 1 

console.log((Math.random()*10)+1); //thsi simple means value will be greater then 1 and less then 10

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);//+1 taki 0 values na aaye  (+min isliye kra taki min value 10 jo hai usse jada hi de value)