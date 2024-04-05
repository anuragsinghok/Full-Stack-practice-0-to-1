function printing(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("G");
   
}


printing()

// function ADDTwoNumber(number1,number2) {
//     console.log(number1+number2);
// }

function ADDTwoNumber(number1,number2) {

    return number1+number2 //after return no result will be printed function does not work
    console.log("Anurag");

    
}

const result = ADDTwoNumber(3,4) // when you return the value from fucntion then you can store it somewhere 
console.log(result);



function loginUserMessage(username){
    if (username ===undefined) { //(!username) -> same as if conditon just another name to write it
        console.log("please enter the user name ");
        
    }
    return`${username} just logged in`
    // `` -> string interpulation value and written text dono sath me print kr skte hai python me like f string ki trah 
}

const reult = loginUserMessage()
console.log(reult);