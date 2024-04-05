// Array in js
//array in js are resizeables 
const myArr = [0,1,2,3,4,5]

const myHeros = ["ahaktiman" ,"naagraj"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[1]);
// javasript array-copy operations create shallow copies


//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //it adds the value in the start of arrray
// myArr.shift() 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //join -> adds all the elements of an array into a string speperated by the specificed seperator

// console.log(newArr);
// console.log(typeof newArr);
// console.log(myArr);
// console.log(typeof myArr);

//slice ,splice
// slice manupulates the original array (it doesnt includes the last value )
// splice do not manupulates the original array (it includes the full range)

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);

