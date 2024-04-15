
//Object de-Structure and Json 

course = {
    coursename : "js in Hindi",
    price : "999",
    courseInstructor : "Harish"
}


const {courseInstructor : instructor} = course; //destructuring 

console.log(instructor);
