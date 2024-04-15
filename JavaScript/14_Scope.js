//Global and local Scope

let a= 10;
const b = 300;
var c = 50;

//this will work normally 
console.log(a);
console.log(b);
console.log(c);

//when scope will comes into pitcure then all are work differently
//eg.
{  } // this is scope 

if(true){
   let a = 20;
   const b = 50;
   var c = 300;
}

console.log(a);
console.log(b);
console.log(c);