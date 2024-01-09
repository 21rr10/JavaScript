// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","newclass"));

// let div=document.querySelector("div");
// div.style.backgroundColor="red";
// div.style.fontSize="20px";
// div.innerText="HELLO!!";


let newBtn= document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

let div=document.querySelector("div");
// div.prepend(newBtn);
// div.append(newBtn);
div.after(newBtn);
// div.before(newBtn);

let newhead=document.createElement("h1");
newhead.innerHTML="<i>Hi, I am new</i>";

document.querySelector("body").prepend(newhead);

let para=document.querySelector("p");
para.remove();