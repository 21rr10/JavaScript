let mode=document.querySelector("toggle");
let currMode="light";
mode=addEventListener("click",()=>{
    
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light ";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(currMode);
});
  