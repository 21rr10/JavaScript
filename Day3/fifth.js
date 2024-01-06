console.log("Hello X");
let str="Hello X";
let len=str.length;
console.log(len);
console.log(str[4]);


console.log("Template literal");

let specialString=`this is a template literal`;
console.log(specialString);

let obj={
    item:"pen",
    price:10,
};
console.log("the cost of ",obj.item," is ",obj.price);
//instead of printing in bits and pieces we can print in one\
//string itself using template literals
let output=`The cost of ${obj.item} is ${obj.price} `;
console.log(output);


console.log(str.toUpperCase());
console.log(str);
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(1,4));