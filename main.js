let submitButton = document.getElementById("submit") // Set as "let" so that it can be changed when the game needs to be reset
let randomNumber = Math.floor(Math.random() * 25) // RNG
let changeText = document.getElementById("change") // Label "Guess:"
let backgroundFlash = document.getElementById("flasher") // Flash on live loss
let livesRemaining = Infinity // Infinite lives so that you cannot lose the game unless in hardmode
let consoleNum = 0 // Variable for the tellMode function to display what mode the game is being played in
let num // input data

// hard mode heart img elements
const lifeOne = document.getElementById("lifeOne")
const lifeTwo = document.getElementById("lifeTwo")
const lifeThree = document.getElementById("lifeThree")
const lifeFour = document.getElementById("lifeFour")
const lifeFive = document.getElementById("lifeFive")
const hardModeOnButton = document.getElementById("lives") // Button to toggle hard mode on

submitButton.addEventListener("click", decideFunction); // Calls decideFunction 
submitButton.addEventListener("click", liveRemoval) // Calls liveRemoval function
hardModeOnButton.addEventListener("click", hardMode) // When the user toggles hardmode, Calls hardMode
backgroundFlash.classList.remove("flash") // Stops background flash on wrong answer from triggering on page load
tellMode() // Calls a function which shows if it is hardmode or not

console.log("Correct number = " + randomNumber) // Tells correct answer

function decideFunction(){ // Decides which function is best depending on the circumstance of the input
    if(submitButton.innerText === "reset"){
        resetGame() // Calls resetGame
    }
    guessButton() // Calls guessButton
    
}
    
function guessButton(){ // Decides wether you guess correct or incorrect

    num = document.getElementById("input").value;

    if(num === ""){ // Do not display "guess higher" when input data is non existent
        changeText.innerText = "Guess:"
        changeText.style.color = "black"
        changeText.style.fontWeight = "normal"
        changeText.style.fontSize = "16px"
        return 
    }
    num = parseInt(document.getElementById("input").value);

    if(num > randomNumber){ // If input data is lower than correct answer then deduct a life and change label
        changeText.innerText = "Guess lower!"
        changeText.style.color = "red"
        changeText.style.fontSize = "18px"
        triggerFlash() // Calls triggerFlash
        livesRemaining = (livesRemaining - 1)
        console.log("<- lower") 
        if(livesRemaining < 6){ // Only show lives remaining when hard mode is on
            console.log("lives = " + livesRemaining)
        }
    } 
    else if(num === randomNumber){ // If input data is correct then display win game and prompt a reset
        changeText.innerText = "GG you won!"
        changeText.style.color = "green"
        changeText.style.fontWeight = "bold"
        changeText.style.fontSize = "26px"
        submitButton.innerText = "reset"
        console.log("win")
    }
    else{ // If input data is higher than the correct answer then deduct a life and change label
        changeText.innerText = "Guess higher!"
        changeText.style.color = "red"
        changeText.style.fontSize = "22px"
        console.log("higher ->")
        triggerFlash() // Calls triggerFlash
        livesRemaining = (livesRemaining - 1)
        if(livesRemaining < 6){ // Only show lives remaining when hard mode is on
            console.log("lives = " + livesRemaining)
        }
    }
}

function triggerFlash(){ // When input data is incorrect and submitted, Flash the background of the body

    backgroundFlash.classList.add("flash");
    setTimeout(() => {
    backgroundFlash.classList.remove("flash");
    }, 250);
}

function resetGame(){ // Once user wins and clicks on "reset" clear the field, return to the base properties, Then generate a new number

    randomNumber = Math.floor(Math.random() * 25) // Generate new number
    submitButton.innerText = "Check"
    document.getElementById("input").value = ""; // Clear the input field
    console.log("Correct number = " + randomNumber) // Print new number
    livesRemaining = (livesRemaining - 10 + 5) // Clear lives and reset back to 5
    tellMode()

}

function hardMode(){ // Toggles the hardmode difficulty

    hardModeOnButton.style.display = "none"
    document.getElementById("input").value = ""
    changeText.innerText = "Guess:"
    changeText.style.color = "black"
    changeText.style.fontWeight = "normal"
    changeText.style.fontSize = "16px"
    livesRemaining = 5 // Sets livesRemaining to 5 so that you have 4 wrong guesses before the game is lost
    consoleNum = (1) // Variable for the tellMode function to display what mode the game is being played in
    console.log("lives = " + livesRemaining)
    lifeOne.classList.add("heart")
    lifeTwo.classList.add("heart")
    lifeThree.classList.add("heart")
    lifeFour.classList.add("heart")
    lifeFive.classList.add("heart")
    tellMode() // Calls a function which shows if it is hardmode or not
}

function liveRemoval(){ // Gives functionality to the hardmode lives and removes 1 heart when one life point is removed

    if(livesRemaining < 5){ // after 1st hit remove the 1st heart
        lifeOne.classList.remove("heart")
    }
    if(livesRemaining < 4){ // after 2nd hit remove the 2nd heart
        lifeTwo.classList.remove("heart")
    }
    if(livesRemaining < 3){ // after 3rd hit remove the 3rd heart
        lifeThree.classList.remove("heart")
    }
    if(livesRemaining < 2){ // after 4th hit remove the 4th heart
        lifeFour.classList.remove("heart")
    }
    if(livesRemaining < 1){ // Game is lost 0 lives remaining, Reset the field
        lifeFive.classList.remove("heart")
        changeText.innerText = "Guess:"
        changeText.style.color = "black"
        changeText.style.fontWeight = "normal"
        changeText.style.fontSize = "16px"
        document.getElementById("input").value = ""
        hardModeOnButton.style.display = "block"
    }
}

function tellMode(){ // Prints the current mode to the console after checking for the variable "consoleNum"
    if(consoleNum === 0){
        console.log("not hard mode")
    }
    else{
        console.log("hard mode active")
    }
}