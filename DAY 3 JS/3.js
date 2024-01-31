// javascript Functions
function nice(name) {
    console.log("Hey "+ name +" you are nice")
    console.log("Hey "+ name +" you are nice!")
    console.log("Hey "+ name +" you are good!")
    console.log("Hey "+ name +" you are cute!!")
    console.log("Hey "+ name +" you are happy")
    
}
nice("Anurag")

nice("harry")

function sum(a,b,c = 4) {

    // console.log(a+b)
    return a+b+c
    
}
result = sum(3,5)
console.log(result)

// this is arrow fucntion ek varibale ke uder hi function ko store krane ka tarika fucn1 is varibale and fucntion both
const func1 = (x) =>{
    console.log("i am an arrow function", x)
}

func1(34);
func1(244);
