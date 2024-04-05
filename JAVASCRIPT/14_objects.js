const course = {
    coursename : "js in Hindi",
    price : "999",
    courseInstructor : "hitesh"

}

//course.courseinstructor //this is way to access the value of course instructor

const {courseInstructor: instructor} = course //another way to print now we dont need to write all again and again
// console.log(courseInstructor);
console.log(instructor); // object destructor basically bar bar course.course krne se aacha const{ } ka use krke dal skte hai 




// this is react concept Object destrucutre {} when this is used
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

//  JSON -> {} Object he hai json without any name of obj it is treated as json
//api is traah brackets me ate hai 
// {
//     "name" :"Anurag Singh",
//     "coursename" : " js in hindi ",
//     "price" : "free" 
// }