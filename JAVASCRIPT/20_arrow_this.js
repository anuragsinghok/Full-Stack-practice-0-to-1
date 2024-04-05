const user = {
    username : "Anurag",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to wesite`); //here this means current context like agr kisi ne username ko change krdiya use kra hoga obj ko to this print krega currect context jo bhi hoga uss time pe 
    }//this refers to the current context
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);//node envirement ke ander abhi global me emtpy objt ko  global me koi obj hai hi nhi ki


// brower k ander jo global object hai wo hai window object  


// function chai (){
//     let username = "ANNU"
//     console.log(this.username); //this this is working on objects only not functions
// }

// chai()


// const chai = function(){
//     let username = "ANNU"
//     console.log(this.username); //this this is working on objects only not functions
// }
// chai()

// arrow function
const chai = () => { //function hata do bus arrow laga do and we can use it 
    let username = "ANNU"
    console.log(this.username); //this this is working on objects only not functions
}
chai()
//explict return jb return lagana padta ahi 


// const addTWO = (num1 , num2 ) => {
//     return num1+num2
// }          //{} bracket me lika to return likna padega aur ( ) me likha to return keyoword ki need nhi hai

// console.log(addTWO(3,2));

//implicit return
// const addTWO = (num1 , num2 ) =>  num1+num2

// const addTWO = (num1 , num2 ) =>  (num1+num2)

//for returning object in implicit return we return it like this
const addTWO = (num1 , num2 ) =>  ({username: "Anurag"})



console.log(addTWO(3,2));


f