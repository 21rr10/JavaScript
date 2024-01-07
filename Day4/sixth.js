console.log("Arrays");
let marks=[20,40,60,80,100];
console.log(marks);

console.log("length of marks ",marks.length);

let heroes=["thor","ironman","hulk","antman","starlord","me"];
// for(let i=0;i<heroes.length;i++){
//     console.log(`hero ${i} is ${heroes[i]}`);
// }

for(let hero of heroes){
    console.log(`hero is ${hero}`);
}

//array methods
console.log("Array Methods");
 let food=["potato","apple","lychee","tomato"];
 console.log(food);
 console.log("Array Methods-> push()");
 food.push("chips");

 console.log(food);
 console.log("Array Methods-> pop()");
 console.log(food.pop(),food);

 console.log("Array Methods-> toString()");
 console.log(food.toString());
 console.log(food);

 console.log("Array Methods-> concat()");
let list=["jackfruit","guava"];
let allFood=food.concat(list);
console.log(allFood);

console.log("Array Methods-> Unshift");
allFood.unshift("Pineapple");
console.log(allFood);

console.log("Array Methods-> shift");
console.log(allFood.shift(),"\n",allFood);

console.log("Array Methods-> slice()");
console.log(allFood.slice(2,4));
console.log(allFood);

console.log(allFood.splice(0,2,"fuiiits",112),allFood);
//removes elements from position 0 and 1 and adds "fruits"
//112 as the elemnts in its place
console.log(allFood.splice(0,2),allFood);
//simple removes the elements from pos 0 1
//add element at a position 2
console.log(allFood.splice(2,0,"pizza"),allFood);
//replacing an element 2
console.log(allFood.splice(2 ,1,"eggs"),allFood);
