let gameNum=25;
let guess=prompt("guess the number");
let attempt=1;
while(gameNum!=guess){
    console.log("Number guessed is ",guess);
    ++attempt;
    if(guess>gameNum){
        guess=prompt("Number too large!! GUESS AGAIN");
    }else{

    guess=prompt("Number too small!!! GUESS AGAIN");
    }
}
console.log("you guessed correct!!!");
console.log("you guessed",guess,"the game number was",gameNum);
console.log("YOu guessed in ",attempt,"attempts");