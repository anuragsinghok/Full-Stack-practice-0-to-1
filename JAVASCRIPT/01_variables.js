// let , const and var
// const meaning value is locked we cannot change it 

// we dont use var because it has scope problems like { } this scope in any where loops etc like agr iss {} cope ke ander variable banaya aur bhr iske koi variable bna hai to wo bhi change ho jata tha so we use let 

const accountId = 144553
let accountEmail = "Anurag@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //we can declare an varibale like thsi 
let accountState;  // we do not assign any value then it will be undefined

// accountId = 2  //not allowed
 
console.log(accountId);

accountEmail = "as@as.com"
accountPassword = "23212"
accountCity = "Delhi"

/*
prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // thsi way you can print mutliple console.log in a tbale format 