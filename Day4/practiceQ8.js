let marks=[85,97,44,37,76,60];
let total=0;
for(let mark of marks){
    total+= mark;
    console.log(` mark = ${mark}`);
}
console.log(`Average marks is ${total/marks.length}`);


let items=[250,645,300,900,50];

let discount=0.1;
for(let item of items ){
    item=item-(discount*item);
    console.log(`price ${item}`);
}

