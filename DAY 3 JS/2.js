// javasript loops
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i)
    
}

let obj = {
    name : "Anurag",
    role : "programmer",
    company:"code with anurag"

}
// forin is used for key value pair prining

for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
        
    
}

// forof is for itrable value printing like below example

a = "Anurag"
for (const iterator of a) {
    console.log(iterator)
}

// while loop

let i = 0;
while (i<6) {
   console.log(i)
   i++;
    
}

let r = 0;
do {
    console.log(r)
    r++;
} while (r<5);