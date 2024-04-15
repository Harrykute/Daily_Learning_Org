//object literals

const JsUser = {
    name:"Harish",
    age : 18,
    "fullName" : "Harish laxman Kute",
    location : "Pune",
    email : "Kuteharish@gmail.com",
    isLoggedIn: false ,
    lastLoginDays : ["Monday","Saturday"]
};

//console.log(JsUser.email); //this is first way to access the object values
//console.log(JsUser["email"]); // this is the good practice to access the object value
//console.log(JsUser.fullName); 

const mysm = "key1";
//using symbol in object 
const JsUser2 = {
    name:"Harish",
    age : 18,
    "fullName" : "Harish laxman Kute",
    [mysm]: "myKey1", 
    location : "Pune",
    email : "Kuteharish@gmail.com",
    isLoggedIn: false ,
    lastLoginDays : ["Monday","Saturday"]
};

//console.log(JsUser2);
//if you want to use symbol in object you have to specify the given key into square bracket 

//you can use function into the object 

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting); // it return the function reference 

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name} Good Morning`); // it will take name from current object 
}

console.log(JsUser.greetingTwo());




