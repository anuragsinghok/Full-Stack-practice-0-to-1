// Primitive
// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt


const score = 100

const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null 

let userEmail;

const id = Symbol('123')

const anotherID = Symbol('123')

console.log(id === anotherID);


const bigNumber = 34265345724573457n


// Reference (Non primitive)

// Array, Objects,Functions

const heros = ["saktiman" , "naagraj"] //array

let myobj = { //object example
    name : "Anurag",
    age: 22
}

const myFunction = function(){
    console.log("hello world")
}

console.log(typeof myFunction);


// Type of val - 	Result
// Undefined -	"undefined"
// Null	- "object"
// Boolean - 	"boolean"
// Number - 	"number"
// String	- "string"
// Object (native and does not implement [[Call]]) - 	"object"
// Object (native or host and does implement [[Call]])	- "function"
// Object (host and does not implement [[Call]]) - 	Implementation-defined except may not be "undefined", "boolean", "number", or "string".