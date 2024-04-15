
//function declaration 
function addTwoNumbers(number1 , number2){
     return number1 + number2;
}

console.log(addTwoNumbers(1,2));

const result = addTwoNumbers(5,4);

  console.log(result);

  //unreacheble statement in functions

  function addNumbers (a,b){
    return a+b;
    console.log(10); // unreacheble code detected it will not print  
  }

   console.log(addNumbers(3.5,5));
  //in this you have to write code before the return 
  //eg.
  function addNumbers2(a,b){
     console.log("Adding Numbers");
     return a+b;
  }

  console.log(addNumbers2(5,6));

  function loginUserMessage(username){
      return  `${username} just logged in`;
  }

  console.log(loginUserMessage("Harish")); 

  //if you don't pass anything it will take print undefined for given parameter
  //eg. 
  console.log(loginUserMessage());

  // you can handle this sitvation using if else

  function loginUserMessage2(username){
          
     if(!username){
       console.log("please enter the username");
       return ;
     }

    return  `${username} just logged in`;
}

console.log(loginUserMessage2());
  
//you can also defined default value in function


function loginUserMessage3(username= "sam"){
   if(!username){
         console.log("Please enter the username ");
         return;
   }
   return `${username} just loggind In`;

}

console.log(loginUserMessage3()); // this is without any arguments
//with arguments it will override the value

console.log(loginUserMessage3("Kute"));
