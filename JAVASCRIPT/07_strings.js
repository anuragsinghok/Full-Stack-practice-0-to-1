// Strings in javascript

const name = "Anurag" // way to give string name 
const repoCount = 50

console.log(name+ repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// another way to give string name 

const gameName = new String('Anurags-anu-hello')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());//it changes copy of the copy not changes the original value as it is being stored in stack
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("r"));

const newString = gameName.substring(0,4) //here you cannot give negative values its does not pbey negative value just print the postiive ones 

console.log(newString);

const anotherString = gameName.slice(-8 ,4) //here you can give -ve values also 

console.log(anotherString)

const newStringOne = "  Anurag  "
console.log(newStringOne);
console.log(newStringOne.trim()); //it removes extra spaces 
 

const url = "hhtps://Anurag.com/anruag%20singh"
console.log(url.replace('%20' , '-'))

console.log(url.includes('Anurag')) //asking if it is inside string or not

console.log(gameName.split('-')); //it split 



//follow this method as it is modern
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);