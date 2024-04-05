// stack and heap in javascript

// Stack (primitive) , Heap (non-primitive) me store hote hai

let myyoutubename = "anuragsinghok"

let anotherName = myyoutubename // a copy of original value was alloted or given 
 
anotherName = " code and art " // a copy of the varibale is given and change later

console.log(anotherName);


let userOne = {
    email : "abc@gmail.com", //reference of original value is given
    upi : "@abc"
}

let userTwo = userOne

userTwo.email = " Anurag@gmail.com" //value didnot chage same value reference are given again and again 

console.log(userTwo);
console.log(userOne);