let max = prompt("Enter the range");
let random = Math.floor(Math.random() * max ) + 1;

let guess = prompt("Guess the number");

while(true){
    if( guess == 'stop'){
        alert("Qitting the game!");
        break;
    }

    else if( guess == random){
        alert("Congrats! You guess the right number!!");
        break;
    } else if( guess > random ){
        guess = prompt("Your guess is large. Try again!");
    } else{
        guess = prompt("Your guess is small . Please try again!");
    }
}