// immediately invoked function expression (iife)
//global scope se pollute na ho functions isliye we use iifa and jo function immediately execute ho jye

//named iife
(function chai(){
    console.log(`DB connected`);
}) () ;
// ; to end the fucntion here 

// this is the iife way same like arrow implicite just bracketes laga do

// chai()

// this iife will wrok here just ; needed to put as it will tell end of the first fucntion

// unknown iffe
(()=>{
    console.log(`db connected 21`);
} )();

// first function defination and 2nd function execution 

//varibale expect wala - name lene wala

// input value iife

((name)=>{
    console.log(`db connected 21 ${name}`);
} )('ANurag')


