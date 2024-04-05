// objects in javascript 

//singleton or declare obj by constructor

// both are the way to define object
// const tinderUser = new Object() //this is single ton object
const tinderUser = {}

tinderUser.id = "123AS"
tinderUser.name = "sammy"
tinderUser.isloggedin = false

console.log(tinderUser);
const regularUser = {
    email : "abc@abc.com",
    fullname: {
        username:{
            firstname : "Anurag",
            lastname: "singh"

        }
    }

}

console.log(regularUser.fullname.username.firstname); //nesting prints 
console.log(regularUser.fullname?.username.firstname); //? cheacks is this is inside or not
const obj1 = {1:"a" ,2:"b",}
const obj2 = {3:"a" ,4:"b",}
// const obj3 = {obj1,obj2}

// 3 ways to combine 2 objects

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({}obj1,obj2) //jitnni bhi value hai utni exect ayegi {} iska mtlb yhi hai 
const obj3 = {...obj1,...obj2}

console.log(obj3);

console.log(Object.keys(tinderUser)); //data type of all keys are array ,,you can use and apply loops on it
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id')); //it is to check if value is there or not 

// rest you can check on console on brower 