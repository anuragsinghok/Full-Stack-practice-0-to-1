// objects in depth in js

//singleton
// Object.create //we can create object like thsi (construotr method)

// -> lterals ki trah banante hai to singleton nhi construcotr se banate hai to singleton hota hai


//object literals
const mysum = Symbol("key1")

const Jsuser = { //objects ke ander key and value ka chakker hota hai 

    name :"Anurag",
    "full name" : "Anurag Singh",
    [mysum] : "mykey1",//a way to define symbol data type in object normal way without square brackets make it a string
    age: 22,
    location : "jaipur",
    email : "anurag@google.com",
    isLoggesin : false,
    lastLogininDays : ["monday " ,"saturday"]
}

// console.log(Jsuser.email);//dont use this method to access object why not to use becuse "full name you cannot access only you can use []to access it"

// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysum]);

Jsuser.email = "Anurag@gbt.com" 
// Object.freeze(Jsuser) //this help to freez the object and after it wecan not change it 

Jsuser.greeting = function(){
    console.log("good morning");
}

Jsuser.greeting2 = function(){
    console.log(`good morning,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

// value access ke liye moslty . and [] se kr skte hai remember this