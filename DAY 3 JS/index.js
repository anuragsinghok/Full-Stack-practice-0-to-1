console.log("hello i am conditional tutorial")
// javascript conditionals if,if-else,else ladder
let age = 0;
let grace = 12;
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

if (age>18){
    console.log("you can drive")
}
else if(age == 0) {
    console.log("are you kidding me ?")
}

else{
    console.log("you cannot drive");
}

// ternary operator  in js

// Evaluate a condition and execute a block of code based on the condition
// condition? exp1 : exp 2

// example syntax of ternary operator looks like this : 
// (marks>10)? 'yes' : 'no' -> if marks are greater then 10 , you are passed. else not 

a = 14 ;
b = 5;
let c = a>b ? (a-b): (b-a)
console.log(c)

/*
translate to :
if(a>b){
    let c = a-b;

}
else {
    let c = a-b;
}
*/