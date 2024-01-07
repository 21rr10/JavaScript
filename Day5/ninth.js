console.log("Functions");

function hello(){
    console.log("Welcome to Jumanji");
    return;
}

for (let i=0;i<5;i++){
    hello();
}

function myFunction(msg){//() contains parameter
    console.log(msg);
}

myFunction("Banana");// parameter inside the function call is called argument


function sum(a,b){
    s=a+b;
    return s;
}

let add=sum(5,6);
console.log(add);

console.log("\n\nArrow Functions");

const arrowSum=(a,b)=>{
    console.log(a+b);
};
arrowSum(5,4);


//to multiply two numbers using arrow functions
const arrowMul=(a,b)=>{
    console.log(a*b);
};
arrowMul(5,3);


const print=()=>{
    console.log("printing hello");
};
print();




function abc(){
    console.log("hello");
}
function myFunc(abc){
    return abc;
}


console.log("forEach");

let arr=[1,2,3,4,5];

// arr.forEach(function prrint(val,index,arr){//each value at each index will be passsed
//     console.log(val,index,arr);

// });
//or
arr.forEach((val,index,arr)=>{//each value at each index will be passsed
    console.log(val,index,arr);

});


console.log("Map method");
//to print all the values
let arrar=[4,5,6];

arrar.map((val)=>{
    console.log(val);
});

//to make new array
let newarr=arrar.map((val)=>{
    return val**2;
});

console.log(newarr);

console.log("filter method");
 let dsq=[1,2,3,4,5,6];
 console.log(dsq);

 let d_sq=dsq.filter((val)=>{
    return val%2==0;
 });

 console.log(d_sq);

console.log("\n\nReduce Method");
let Val_A=[1,2,3,4,5,6,7];

let res=Val_A.reduce((accemulator,current)=>{
    return accemulator+current
});
console.log(res);

console.log("to return the largest number");
let large=Val_A.reduce((prev,current)=>{
    return prev>current?prev:current;
})
console.log(large);
