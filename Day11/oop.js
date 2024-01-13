const student={
    fName:"Ritesh Ranjan",
    marks:95,
    printMarks:()=>{
        console.log("Marks= ",this.marks);
    },
};
// console.log(student);
const employee={
    calcTax: ()=>{
        console.log("Tax rate is 10%");
    },
};

const karanArjun1={
    salary:50000,
    calcTax: ()=>{
        console.log("Tax rate is 10%");
    },
};
const karanArjun2={
    salary:50000,
};
const karanArjun3={
    salary:50000,
};
const karanArjun4={
    salary:50000,
};

karanArjun1.__proto__=employee;
karanArjun2.__proto__=employee;
karanArjun3.__proto__=employee;
karanArjun4.__proto__=employee;


class toyotaCar{
    constructor(brand,mileage){
        console.log("new object");
        this.brand=brand;
        this.mileage=mileage;

    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("Stop");
    }
    
}

let fortuner=new toyotaCar("Fortuner 21",21);

let lexus=new toyotaCar("Lexus 15",15);

class parent{
    hello(){
    console.log("hello");
    }
}
class child extends parent{

}

let obj=new child();

class person{species="homo sapiens";
    constructor(fName){
        
        console.log("parent");
        this.fName=fName;
        this.species=this.species;
        console.log("parent exit");
    }
    eat(){
        console.log("Eats");
    }
    sleep(){
        console.log("sleep whole day");
    }
    work(){
        console.log("do nothing");
    }
}


class engineer extends person{
    constructor(fName){
        console.log("child");
        super(fName);//to invoke parent constructor

        console.log("child exit");
    }
    work(){
        console.log("work whoel day");
    }
    depression(){
        console.log("Depressed whole day");
    }
}

// let ritesh=new engineer();
let me=new engineer("ritesh");



console.log("Error handling");


let a=5,b=4;
console.log(a+b);
console.log(a+b);
console.log(a+b);


    try{
        console.log(a+c);
    }catch(err){
        console.log(err);
    }
console.log(a+b);
console.log(a+b);
console.log(a+b);
