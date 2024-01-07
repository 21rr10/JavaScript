function vowel(inputS){
    for(let i of inputS){
        if(i=="a"||
            i=="e"||
            i=="i"||
            i=="o"||
            i=="u")
        {
            console.log(i);
        }
    }
}

let inputss=prompt("string");
vowel(inputss);

const vowels=(inputs)=>{
    for(let i of inputs){
        if(i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
            console.log(i);
        }
    }

};
vowels(inputss);


console.log("next q");
let ar=[1,2,3,4,5,6,7];

// const square=(val)=>{
//     return  val*val;
// }
ar.forEach((a)=>{
    console.log(a**2);
})
