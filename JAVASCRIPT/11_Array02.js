//Array basics 2

const marvelHeros = ["thor","iron","spiderman"]

const dcHeros = ["superman","flash", "batman"]

marvelHeros.push(dcHeros)

// console.log(marvelHeros);

const newHeros = marvelHeros.concat(dcHeros)//concat-> combine two or more arrays . this method return a new array without modifying any existing arrays

// console.log(marvelHeros)

//concat return new array and push modify existing array

const new_all_heros = [...marvelHeros,...dcHeros] //spread operator it spread values

// console.log(new_all_heros);

const another_array = [1,2,3,4,[5,6,7,8],[10,11,[2,4]]]

const realAnotherArray = another_array.flat(Infinity) //all array which are array inside array it solves all adn give you a simple array by using flat and (you need to how much depth 1, 2, or infinty)
console.log(realAnotherArray);


//use in data scraping 
console.log(Array.isArray("Anurag")); //check it is a array or not
console.log(Array.from("Anurag")); //it convert it into array
console.log(Array.from({from:"Anurag"}))  //it give empty array as we didnt define to maek value array or keys array  //intresting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3)); //to convert all into array


