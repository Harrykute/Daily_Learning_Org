//This keyword used to access the current context 

const user = {
    username : "harish",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);  // it will print current context 
    }
}

user.welcomeMessage();

//if you change username
user.username = "Kute"; //we have changed context here
//it will change the existing username 
user.welcomeMessage();

// Arrow Functions 

//first way
const chai = ()=>{
    let username = "Harish";
    console.log(this.username);
}

chai();

const addTwo = (num1 , num2) =>{
    return num1+num2;
}

console.log(addTwo(5,6));

const addTwo2 = (num1 , num2 ) => num1 + num2;
console.log(addTwo(5,7));




