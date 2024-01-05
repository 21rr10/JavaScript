//let is used to declare and define the variables and can also be updated. 
//let has block scope

let FullName="tony stark";
let age=21;
let totalPrice=100;

// var used till 2015. it can be redeclared and updated hence not used. 
//Var has global scope
//const -> here variables cannot be redeclared or updated. 
//const has block scope

const age_=24;
// age_=23;
console.log(age);


//we can also just declare the variables and not assign any values to it. 
//by default the variables are assigned "undefined"
 let a;
 console.log(a);


 {
    let h=5;
    console.log(h);

 }
//  console.log(h);// here h isnt recognised as let has a block scope


 //Data Types
 console.log(typeof FullName); 
 
 //string will be printed as tony stark is stored here
 
 let var1= BigInt("123");
 console.log(var1);//123n will be printed
 let var2=Symbol("hrllo!");
 console.log(var2);//Symbol(hrllo!) will be printed


 //objects are generally declared by const but can be declared by let
 //object has "key:value" pairs
 // to access a key of the object obj.key or obj["keyname"] is used


 const student={
    stuName:"ritesh", //, is used and : is used instead of =
    age:20,
    cgpa:8.27,
    isPass: true

 };
 console.log(student.age);
 console.log(student["stuName"]);
 //student
// {stuName: 'ritesh', age: 20, cgpa: 8.27, isPass: true}
// typeof student
// 'object'

 // to assign new values inside the object for example increase the age of the student by 1
 student["age"]=student["age"]+1;
console.log(student["age"]);

student["stuName"]="bombie";
console.log(student["stuName"]);