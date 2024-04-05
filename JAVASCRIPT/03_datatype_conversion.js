// Datatype conversion confusion
// let score = null
// let score = undefined
// let score = "24"

// console.log(typeof score);
// console.log(typeof (score));

// let valueINNumber = Number(score)
// console.log(typeof valueINNumber);
// console.log(valueINNumber); // it will print NAN means not a number when we convert a alphanumeric number into number type of this will be number but value will not be number



// "33" => 33
//"33abc" => NAN
//true => 1; false =>0

let isLoggedIn = "Anurag"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=> true; 0 = > false
//"" => false"
//"Anurag" => true

let someNumber =33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let num = 34

let strg = String(num)
console.log(strg);
console.log("num is " ,typeof(strg));
/****************************Operations*****************************************/

let value = 3
let negValue = -value
// console.log(negValue);

console.log(2**2); //means 2 ki power 2

let str1 = "Hello"
let str2 = "Anurag"

let str3  = str1+str2
console.log(str3);


// tricky conversions avoid doing
// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+"2")

// console.log("1"+2+2);
// console.log(1+2+ "3");

console.log(+true);
console.log(+"");

let num1,num2,num3

num1 = num2 = num3 = 2+2

let gameCounter = 100
// gameCounter++; try prefix and postfix
++gameCounter;
console.log(gameCounter);