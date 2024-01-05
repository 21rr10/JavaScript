let score= prompt("Enter you score");

if(score>=90 && score<=100){
    console.log("Grade is A")
}else if(score>=70 && score<=89){
    console.log("Grade is B")
}else if(score>=60 && score<=69){
    console.log("Grade is C")
}else if(score>=50 && score<=59){
    console.log("Grade is D")
}else if(score>=0 && score<=49){
    console.log("Grade is F")
}else {
    console.log("Invalid marks");
}