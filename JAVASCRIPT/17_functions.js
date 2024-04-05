// when argument pata na ho kitne ane wale hai 

// function  calculateCartPrice(...num1){ //rest operator (same ... use for spread operator) rest means jitne mili hai wo bhot sari gudri unorganished  hai muje wo sb dedo aur value sari array me ayegi
function  calculateCartPrice(val1 , val2 ,...num1){ // isme pheli value jo bhi milegi wo val1 ke ander jyegi aur val2 me second aur baki rest op num me
    return num1
}

console.log(calculateCartPrice(2,34,44,23,22))

// now lets see object ko function ke ander kaise pass kiya jata hai 

const user = {
    username: "Anurag",
    price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({ //u can pass object direct
    username : "Anurag",
    price : 534
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){ //array access through function
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([122,3232,4232,231,232]));
