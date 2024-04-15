
if(2 ==+"2"){
    console.log("Executed");
}

const balance = 1000;


//using multiple lines with if else block without any scope or curly braces
//but not recommended
if(balance){
    if(balance > 500) console.log("test") , console.log("test2");
}

 //falsy values 
  //flase , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 

  //truthy values
  // "0" , 'false' , " " , [] , {} , function(){}

   //Nullish Coalescing Operator(??) : null undefined
    let val1;
    val1 = 5 ?? 10;
    val1= null ?? 10;
    val1 = undefined ?? 10;
    //this operator use for null and undefined 
    console.log(val1);