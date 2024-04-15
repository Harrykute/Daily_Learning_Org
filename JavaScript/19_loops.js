
const myArr = [1,1,2,3,4,5,6];

for (const key of myArr) {
    console.log(key);
}

const myStringArr = ["Harish", "Laxman" , "Kute"];
const Str = "Hello world";
for (const key of myStringArr) {
    console.log(key);
}

for (const key of Str) {
    console.log(key);
}


for (const key in myArr) {
   console.log(key + " " + myArr[key]);
}

for (const key in myStringArr) {
   console.log(key +" "+ myStringArr[key]);
}

//for each loop 

myStringArr.forEach((items)=>console.log(items));