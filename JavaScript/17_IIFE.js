
function chai(){
    console.log("Db is Connnected");
}

chai();

//IIFE function 
(function chai(){
    console.log("Db Connected Two")
})(); // here if you don't use semicolan it will give error while excuting below function 
//here you have to end this context so use semicolon 
( () =>{
    console.log("Db is Connected three");
})();

//using parameter in function 
((name)=>{
    console.log(`db is connected in given name : ${name}`);
})('hitesh'); 



