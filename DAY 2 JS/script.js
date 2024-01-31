console.log("hey this is a new day 2 ")
let a = 5;
let b = 6;
let c ="Anurag";
let _a = "anruag ";

// var is globally scoped not blocked scope like agr let use kre and ek block ke ander redefine krke print kre like below to uska print hoga globally ka nhi  but var ke case me no block scope .
{
    let a = 66;
    console.log(a)
}
console.log(a)
// var 33a = "anurag"; not allowed

// console.log(a+b+8)
// console.log(typeof a ,typeof b, typeof c)

// const a = 6;
// a = a+1; this give an error as assignment to constant is not allowed 



let x = "anurag";
let y = 33;
let z = 3.44;
const p = true;
let q = undefined ;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// type of null -> obejct hota hai javascript me 

// to create a object is js
let o ={
    name :"ANurag",
    " job role": 5700
}
console.log(o)
o.salary = "100crores";
console.log(o)
o.salary = "500crores";
console.log(o)
// you can use multiple key value pairs in it 