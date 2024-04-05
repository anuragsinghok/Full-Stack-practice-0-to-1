// Date and time in depth

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object

// let myCreateDate = new Date(2023,0,23)

let myCreateDate = new Date(2023,0,23,5,6)


console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000)); //to convert in second as by default it give in miliseconds

let newDAte = new Date()
console.log(newDAte);
console.log(newDAte.getMonth()+1);
console.log(newDAte.getDay());

newDAte.toLocaleString('default',{weekday : "long" })