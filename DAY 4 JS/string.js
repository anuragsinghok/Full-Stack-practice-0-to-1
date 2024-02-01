// strings in js

let a = "Anurag"
console.log(a)
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a.length)

// let name = "Anurag"
let real_name = "Anurag"
let friend = "rohan"
// console.log("his name is "+ name+ "")this error on name is comming because phele global name ek object hota tha js me isliye
console.log("his name is "+ real_name+ "and his friend name is "+ friend)

// instead of writing above line again and again you can use template litreals in js it make it easier


console.log(`His name is ${real_name} and his friend name is ${friend}`)


// escape sequesnce charactor
// \n -> newline
// \t -> tab
// \r -> carriage return

// string property and methods
let b = "shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1,5))
console.log(b.slice(1))
console.log(b.replace("vam","cahl"))
console.log(b.concat(a,"anurag"))

// strings are immutables you can create new strings line uppercas adn all functions ka use krke kroge to new string bn jyegi but original string nhi bdlegi