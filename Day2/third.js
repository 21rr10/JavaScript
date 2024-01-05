console.log("hello world!");
//console.log("hello world!");

//arithmetic operators
console.log("ARITHMETIC OPERATORS");
let a=5;
let b=2;
console.log("a and b are ",a,b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("++a=",++a);
console.log("++b=",++b);
console.log("--a=",--a);
console.log("--b=",--b);
console.log("a**b=",a**b);

//Assignment operators
console.log("assignment operators");
let val=5; //5 is assigned to the variable val
// val=val+5;
/*instead of writing val=val+5 we can write */
val+=5;
console.log("val+=5",val);
//same goes for val=val-5;
val-=5;
console.log("val-=5",val);
val*=5;
console.log("val*=5",val);
val/=5;
console.log("val/=5",val);
val%=5;
console.log("val%=5",val);
val=2;
val**=5;
console.log("val**=5 where value of val is 2",val);


//comparison operators
console.log("comparison operators");
let v1= 5;
let v2= 2;

//==
console.log("v1==v2", v1==v2);
// !=
console.log("v1!=v2", v1!=v2);

let v3=5;// number
let v4="5";// string
console.log("v3==v4", v3==v4);
/* when only numbers are stored in a string 
js sees the string as a number*/
/* if we want to differentiate between v3 and v4
then we use a stricter version of this comaprison
operator such as === and !== which also checks the
type of the variable*/
console.log("v3===v4", v3===v4);
// false will be printed as type is different
console.log("v3!==v4", v3!==v4);//true


//Logical operators
console.log("LOGICAL OPERATORS");
let x1=6;
let y1=5;

let cond1= x1<y1;//false
let cond2= x1===6; //true

console.log("cond1 && cond2 ", cond1 && cond2);
console.log("cond1 || cond2 ", cond1 || cond2);
console.log("cond 1",cond1);
console.log("not of cond1 ",!(cond1));


//conditional statements
console.log("CONDITIONAL STATEMENTS");
//if
console.log("IF");

let AGE=25;
if(AGE>18){
    console.log("AGE=25...You can vote");
}
AGE=17;
if(AGE<18){
    console.log("AGE=17....YOU CANNOT VOTE");
}
//if else
console.log("IF-else");
let mode ="blue"; 
let color;

     if(mode=="dark"){
        color="black";
     } 
     else{
        color="white";
     } 
console.log(color);

//else-if statement
console.log("else-if statements");
let age=41;
if(age<18){
    console.log("Junior");
}
else if(age>60){
    console.log("senior");
}
else{
    console.log("middle aged");
}
//ternary operator
console.log("Ternary operators");

age<18?console.log("child"):console.log("adult");

