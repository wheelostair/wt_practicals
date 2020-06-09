var random_number
var number_of_guesses

function main () {
    alert('working')
    random_number = randomNumber

    var myButton = document.getElementById("button")

    myButton.addEventListener("click", buttonClicked)
}

function randomNumber() {
    getRandomArbitary(min,max)
}
function buttonClicked() {

} 

if (tryguess > random_number) {
    console.log("You're too high!")
} 
else if (tryguess < random_number){
    console.log("You're too low!")
}
else {
    console.log("You're Correct!")
}