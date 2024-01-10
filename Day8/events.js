let btn1=document.querySelector("#btn1");

// btn1.onclick=(e)=>{
//     console.log("evnt is",e);
//     console.log("evenst type is",e.type);
//     console.log("target is ",e.target);
//     console.log(e.clientX,e.clientY)
//     // console.log("button was clciked");
// };

btn1.addEventListener("click",(e)=>{
    console.log("button was clicked- handler 1");
});
btn1.addEventListener("click",(e)=>{
    console.log("button was clicked- handler 2");
});
const handler3=()=>{
    console.log("button was clicked- handler 3 ");
};
btn1.addEventListener("click",(e)=>{
    console.log("button was clicked- handler 4");
});

btn1.removeEventListener("click",handler3);















let div=document.querySelector("div");
let i=1;
div.onmouseover=()=>{
    console.log("I was on top of Rishit");
    if(i==1){
        console.log("Rishit!!! We did it");i++;
    } else if(i>1&&i<5){
        console.log("We did it again");i++;
    }
    else if(i==5) {
    console.log(`we did it ${i++} times and\n Ayush also joined`);
    }
    else{
        console.log(`we did it ${i++} times and\n It was way more fun`);

    }
}