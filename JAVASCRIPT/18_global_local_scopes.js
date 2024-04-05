// global and local scope in javascript
// let a = 10
// const b = 20
// var c = 30

//global scope

if (true) {//block scope
    let a = 10
    const b = 20
    var c = 30
    
}// abc are inside thsi scope to iske bhr ana bhi nhi chaiye bus var nhi krta var scope nhi dekta 

// console.log(a);
// console.log(b);
console.log(c);

// {} -> this is scope  any where these are used scope comes here
let a = 100
if (true) {//block scope
    let a = 10
    const b = 20
    console.log(`inner : ${a}`);
}

console.log(a);

// windows me apne brower me inspect me linkte hai aur vs code ya compiler me jo node lik ke print krte hai wo alag hai 