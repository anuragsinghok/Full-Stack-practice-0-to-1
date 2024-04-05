// var let const

// the difference between var let const
 

// var
// var old js mein tha 
// var functon scoped hota hai =>  var apne parent function me kahi bhi use ho skta hai 
//var adds itself to the window object
function abcd() {
    for (var i = 0; i < 12; i++) {
        console.log(i);
        
    }
    console.log(i); //it will work fine
    
}



// let const new js mein hai
//let braces scoped hota hai 
//var adds itself to the window
