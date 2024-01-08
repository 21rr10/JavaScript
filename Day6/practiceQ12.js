let h2=document.querySelector("h2");

console.dir(h2.innerText);
h2.innerText=h2.innerText+" from india college";
console.dir(h2.innerText);

let divs=document.querySelectorAll(".box");
let idx=0;
for(let div of divs ){
    console.log(div.innerText);
    console.log(divs[idx]);
    console.dir(divs[idx++]);
    // console.log(divs[idx]);

}
let ids=0;
for(let div of divs ){
    // console.dir(div[])
    console.log(divs[ids]);
   div.innerText=`new value ${ids++}`;
//    console.log(div[ids])

}