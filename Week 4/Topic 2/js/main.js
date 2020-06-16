var random_number;
var playerGuess
var number_of_guesses;

function main() {
    random_number = Math.round(Math.random() * (30 - 1)) + 1;
    console.log(random_number);
    

    var myButton = document.getElementById("tryguess");
    myButton.addEventListener("click", buttonClicked)
    }
  
function buttonClicked() {
    
    playerGuess = document.getElementById("guess").Value;
    
    if (playerGuess > random_number) {
        console.log("too high!") 
    }
    else if (playerGuess < random_number) {
        console.log("too low!")
    }
    else if (playerGuess == random_number) {
            console.log("SPOT ON!")
    }
    else { 
            console.log("Not in range.")
    }
}
