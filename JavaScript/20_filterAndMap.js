
const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> {
    return num > 4;
})

console.log(newNums);

// you can write also wothout curly braces then no need to use 
// return statement 

const newNums2 = myNums.filter((num)=> num>4);
console.log(newNums2);

//Map 
const myNumbers = [1,2,3,4,5,6,7,8,10];

const newNums3 = myNumbers.map();