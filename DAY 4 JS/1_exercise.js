// create a faulty calculator using js 
// thsi faulty calculator take two numbers as input from user 
// it perform wrong operations a follows

// -> +->-
// -> *--> +
// -> -_-->/
// -> / --> **

// it perform wrong operation 10% of the time 
// you can do it using random number gerator and 10 se niche hai to eroor ayega 
// Math.random ( ) --> ka use kro aur dalo


function faultycal(a,b,user) {

    if(user == "+" && a<10 ){
        console.log("the sum wro is "+ a-b)
    }
    else if(user == "*" && b>10 ){
        console.log("the multi wro is "+ a+b)

    }
    else if(user == "-" && a>20 && a<10  ){
        console.log("the minus wro is "+ a/b)

    }
    else if(user == "/" && b>20 && a<10  ){
        console.log("the minus wro is "+ a**b)

    }
    else{
        console.log(auserb)
    }

    
}

let a = prompt("enter the first number")
let b = prompt("enter the second number")
let user = prompt("select a function you want to perform ")
faultycal(a,b,user)
