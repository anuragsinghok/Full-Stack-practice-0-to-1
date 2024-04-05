function one(){
    const username  = " Anurag "

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()

//in if else

if (true) {
    const username = "Anurag"
    if (username === "Anurag") {
        const website = "youtube"
        console.log(username + website);
        
    }
    // console.log(website); //out of scope
    
}

// console.log(username); //out of scope


//=================================intresting ===============================
console.log(addone(5))

function addone(num){
      return num + 1
}

 // both up adn down are way to declare function
 console.log(addtwo(5)) //it is showing error as declaration type is different
const addtwo = function(num){
    return num +2
}

