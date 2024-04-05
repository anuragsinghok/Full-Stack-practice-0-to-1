// word vs keyword


// word eg.
// anurag
// is 
// Good 
// man 

// //keyword
// for 
// if 
// let 
// var


// var const let

// variable and constants

// score = 6;
// lives = 1;


// code mein koi nhi data store karne ke liye jiska user hota hai use kahte hai varible


var dulha = "lab";
const  dulhan = "laby";
console.log(dulha + dulhan);

// dulhan = "labb"  // connot change it throws an error
// console.log(dulha + dulhan);

// ---------------hosting


// hoisting - varible and function are hoisted which mean there declaration is moved on the top of the code
console.log(a); // hoisting means we can use a here before declration // a will be give undefined
var a = 12; //  this part will get converted into (var a;) (a = 12;) and (var a;) part will go on top so it will show undefined


// undefined and not - defined 

// undefined is when you have a thing but you dont know the value of it 

// not- defined is when you dont have the thing


//----------types in js
//1. primitive
//2. reference

// primitive  = number , string ,null, undefined , Boolean

// Reference == [] { } ()

// aise koi bhi value jisko copy karne par real value copy nhi hota balki us main value ka Reference  pass hojaata HTMLDetailsElement, use hum Reference  value kahte hai aur jska copy karne par real copy ho jaaye wo value primitive type value hoti hai 


// reference type eg
var a = [12,13]
var b = a;
b.pop();
console.log(b);
console.log(a);

// non bracket -> primitive
// bracket -> Reference

// -------------------conditionals - if else else-if

// if(true){}
// else if(true){}
// else{}


//---------loops
// for ,while

// loop ka mtlb repeat



// Loops - for loops
// For (start ; end; change){}

// Console.log(0)

// While loop: 
// -> while(true/false){
// }

// while(a<20){
// a++;
// }


// --> Function

// fucntion ka mtlb app kuch code ko likh kar koi naam de skte ho and baad mein usey use kar sakte ho with that name as many times as you want

//function mainliy teen kaaam ke liye hota hai 

//jab apka code app turant nhi chalana chaahta future mein chalana chahte ho 
// 2) jab app code ap reuse karna chahte ho
// 3> jab ap code chalana chaahte ho har baar with difference data



// --> arguement = real value jo hum dete hai fnc chalate waqt
// --> parameter = varibales jinme value store hoti hai arguement wali



//arrays - >  hum ek vaiable main ek value stpore kar paate hai par jab humein ek se jada value sote karni ho tob fir use hota hai array ka matlb ki array apko free deta hai ek se jafa value use krne ki

// array =  grp of value


// push pop shift unshift

// let arr = [1,2,3,4,5,6]
// arr.unshift(0); array ke suru me value lagane ke liye unshift
// arr.shift(0); array ke suru me se ek value hatane ke ata hai yield


// arr.splice(2,1) it is used to pop out value from the middle in an array phle value name kon si , then kitni

//ek se jada bande ki baat ki to hua arrray , ek bande ke baarre main sarri baat ki to hua object





let z  = {
    name : "Anurag", 
    age : "18"
}

console.log(typeof(z));