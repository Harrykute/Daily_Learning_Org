
let empName = new String('Harish');

console.log(empName.length);
let newEmpwithUCase = empName.toUpperCase(); // this method will convert string into uppercase
console.log(newEmpwithUCase);
console.log(empName.toLowerCase()); // thisb method will convrt string into lower case 

//Slice method 
let newempName = empName.slice(1,4); //it will return substring of string but slice(start-index,end-index)
console.log(newempName); //ari

//replace String 
let name = "Harry bhai ";
let newName = name.replace("bhai","BHai"); // it will replace given string replace(previous-String,changeble-String)
console.log(newName); 

//concat String
let name2 = "Harry";
let name21 = " Kute";

let newName2 = name2.concat(name21," yes"); // it will concat the string along with we can add another string also after that 
console.log(newName2);


//trim (remove the spaces from the string)
let name3 = "  Harish Kute    ";
console.log(name3); // while printing it it will consider the spaces also 
let newName3 = name3.trim(); // after using the trim method it will remove the spaces from front and end not between the word 
console.log(newName3); 

// charAt(index) 
let name4 = "Harish Laxman Kute";
console.log(name4.charAt(2)); // it will return the character from the given index 

//index of()
let name5="Laxman Kute";
console.log(name5.indexOf('a')); // it will return the index of character which comes at first occurance

//lastindex
let name6="Chandrabahga kute";
console.log(name6.lastIndexOf('a')); // it will retun the last index of given character which comes at last occurance

//search 
let name7 = "Aditya kute";
console.log(name7.search(' k')); // it will search given character and and print the index
