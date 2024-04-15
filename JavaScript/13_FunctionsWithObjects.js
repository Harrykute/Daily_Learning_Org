//rest operator 
//rest operator will convert given arguments value into array 
function calculateCartPrice(...num1){  
         return num1;
}

console.log(calculateCartPrice(200,300,400));

//if you add more parameters
//eg.

function calculateCartPrice2(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice2(200,400,500,2000)); 

//in this case first value acquire by the val1 and val2 and remaning value will take by spread operator 

//passing object as parameter to function
function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

const obj = {
    username: "Laxman",
    price : 1000
}

handleObject(obj);

//handle Object(user)
//direct passing or creating object in parantesis as parameter

handleObject({
    username : "Swapnil",
    price : 2000
});

//Passing array as Parameter 

const myNewArray =[200,300,400];

function retrunSecondValue(getArray){
    return getArray[1];
};

console.log(retrunSecondValue(myNewArray));
console.log([500,600,1000]);







