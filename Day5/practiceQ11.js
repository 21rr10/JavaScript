console.log("Printing the 90+ marks");
let marks=[89,90,99,98,97,66,56,45,34,78,86,55];
console.log(marks);
let new_marks=marks.filter((mark)=>{
    
        return mark>=90;
    
});
console.log(new_marks);


console.log("\n\nSum and product ");
let n=prompt("Enter the value of n");
let narr=[];
for(let i=1;i<=n;i++){
    narr[i-1]=i;
}
console.log(narr);
let sum=narr.reduce((accumulate,current)=>{
    return accumulate+current;

});
let pro=narr.reduce((accumulate,current)=>{
    return accumulate*current;

});
console.log("the sum and product are",sum,pro);