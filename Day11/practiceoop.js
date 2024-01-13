let data="old info";
class User{
    constructor(fName,email){
        this.name=fName;
        this.email=email;
    }
    
    viewData(){
        // console.log(this.name);
        // console.log(this.email);
        console.log("data= ",data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);

    }
    editData(){
      data="some data";

    }
}

let user1=new User("ritesh","22@kiit.ac.in");
let user2=new Admin("admin","admine@gmail");
