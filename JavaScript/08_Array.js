
const myArr = [0,1,2,3,4,5];
const myHeros = ["shaktiman","naagraj"];

//declaring array using counstructor
const myArr2 = new Array(1,2,3,4);
console.log(myArr[1]);
console.log(myArr2[3]);

//Array methods
myArr.push(10);
myArr.push(7); // it will remove the element from the back of array
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9); // it will add the element at the beginning 
console.log(myArr);
console.log(myArr.length);

myArr.shift(); //it will remove the first element 
console.log(myArr); 

console.log(Array.isArray("Harish")); //it will chack given array is or not
console.log(Array.from("Harish")); // it will conert into array 



