
let number1 = 33;
console.log(typeof number1); // it will print nummber

let number2 = "33";
console.log(typeof number2) // it will print string because it is wriiten in double qoute .

// so we can convert this in number 
// we have Number() 

let valueInNumber = Number(number2);
console.log(typeof valueInNumber); // it will print number because it converted string to int 

// but some case if we mistakly add string so it will consider Not a Number while using or printing it but its type is still number
//e.g.
let number3 = "33abc";
let valueInNumber2 = Number(number3);
console.log(typeof valueInNumber2); //it will print number
console.log(valueInNumber2); //it will print NaN (Not a Number)

// for boolean 

let isLoggIn = "Harish";

let convertToBoolean = Boolean(isLoggIn);
console.log(typeof convertToBoolean);
console.log(convertToBoolean); 

// 1 => true & 0=> false
// ""=> false & "Harish"=>true
// 


