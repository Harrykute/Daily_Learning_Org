
const accountId = 1456;
let hk = "Harish"; // it is scope varibale 
var id= 45;

console.log(accountId);

//accountId = 56;

//let hk = 45; it will throw because we can not use alredy defined variable name 
//but in the scope we can declared it . and it can be any type 

var id = 56;

console.log(id); // it works because we can use alredy declared varibale name 

//Scope variable 
{
    let hk = 10; 
    console.log(hk);
}
console.log(hk);

//if you use var varibale in scope it will reflect varibale value to outside declared var 

var empName = "Swapnil";

{
    empName="Harish Laxman Kute"; // here it will reassigned varibale empName 
}

console.log(empName); 

// you can use direct name without any var let or const keyword 
// the variable is implicitly declared in the global scope
mobileNo = 84834561;
console.log(mobileNo); 
                       

let MobileNo = 845678;
console.log(MobileNo);  

accountCity = "Pune";
console.log(accountCity);

console.table([accountId,hk,accountCity]);

