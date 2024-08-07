// Spread Operator with Array
let arr1 = [1,2,3,4];
let arr2 = [0,...arr1,5];
console.log(arr2)

// create a Copy
let a1 = [2,3];
let a2 = [...a1];
console.log(a2)

// Concatenation
let c1 = [1,2,3,4];
let c2 = [9,8,6,5];
let c3 = [...c1,...c2];
console.log(c3)

//Spread Operator With Objects
let person = {name:"gokul",age:26};
let personDetails = {...person,City:"Namakkal"};
console.log(personDetails);

// Create a Copy
let person1 = {name:"gokul",age:26,City:"Namakkal",role:"Developer"};
let personDetails1 = {...person1};
console.log(personDetails1);

// concatenation
let p1 = {firstname:"gokul",gokulage:26};
let p2= {lastname:"raj",rajage:25};
let p3 = {...p1,...p2};
console.log(p3);

// Spread Operator with Function Call
function add(a,b,c,d){
    return a+b+c+d;
}
let num = [1,2,3,4,5];
console.log(add(...num));

// Rest Parameter
function number(...value){
    console.log(value);
}
number(1,2,3);

// Destructuring Array and object with rest parameter
// Array
let [q1,w1,...rest] = [1,2,3,4,5];
console.log(q1);
console.log(w1);
console.log(rest);
// Object
let {finalName,...rest1} = {
    finalName:"gokulraj",
    finalName2:"mani",
    age:25,
}
console.log(finalName);
console.log(rest1);
// Function Parameter
function numberName(a,b,...rest2){
console.log(a);
console.log(b);
console.log(rest2);
}
numberName(0,9,8,7,6,5);

//Function
function numbervalue(a=2,b=5){
    console.log(a);
    console.log(b);
}
numbervalue();

