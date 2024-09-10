let input = document.getElementById("input")
const submitButton = document.getElementById("submit")
let randomNumber = Math.floor(Math.random() * 25)

submitButton.addEventListener("click", guessButton)

console.log(randomNumber)

    
function guessButton(){

    if(input > randomNumber){
        console.log("lower")
    } 
    else if(input === randomNumber){
        console.log("win")
    }
    else{
        console.log("higher")
    }
}