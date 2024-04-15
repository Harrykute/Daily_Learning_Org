
const tinderUser = new Object(); // this is singlton object 
console.log(tinderUser); // it will print empaty object 

const tinderUser2 = {}; // this is non singlton object 
console.log(tinderUser2);  

//object within the object 
//nesting of object

const regularUser = {
    empName : "Harry",
    fullName : {
        userFullName :{
            firstName : "Harish",
            lastName : "Kute"
        }
    },
    mobNo : 9604052 
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);

// combine the object (Merge)
const obj1 = { 1:"a" , 2 :"b"};
const obj2 = {3:"a" , 4: "b"};

const obj3 = { obj1 , obj2} ;
console.log(obj3);

//another way 
const objnew = Object.assign({},obj1,obj2); // it will copmbine the objects value into single value 
console.log(objnew); 

//actual use 
//using spread operator 
const objnew2 = {...obj1,...obj2};
console.log(objnew); 


const users = [
    {
        id : 1,
        email : "k@gmail.com"
    },
    {
        id : 2,
        email : "h@gmail.com"
    },
    {
        id : 3,
        email : "l@gmail.com"
    },
    {
        id : 4,
        email : "m@gmail.com"
    }

];

console.log(users);
console.log(users[1].email);

console.log(Object.keys(users));
console.log(Object.values(users));


console.log(Object.entries(users));
