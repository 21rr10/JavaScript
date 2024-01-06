console.log("hola world");
//for loop
console.log("for loop");

for(let i=0;i<5;i++){
    console.log("ho ho ho ")
}

console.log("sum of first n numbers and numbers from 1 to n");
 let n= prompt("Enter a number ");
 let sum=0;
 for(let i=1;i<=n;i++){
    sum+=i;
    console.log(i);
 }
console.log("the sum of first",n,"numbers is",sum);


//while loop
console.log("While loop");
let i=1;
while(i<=n){
    console.log(i);
    i++;
}

//Do-while loop
console.log("Do-while loop");
i=1;
do{
    console.log(i);
    i++;
}while(i<=n);

// for-of loop
console.log("for-of loop");

let str="apnacollege";
let len=0;
 for(let i of str){
    console.log(i);
    len++;
 }
 console.log("the size of the string is ", len);

 // for-in loop
 console.log("For-in loop");
 let student={
    name:"rahul",
    age: 20,
    cgpa:8.3,
    isPass:true
};
for(let i in student){
    console.log(i);
    console.log(student[i]);
}