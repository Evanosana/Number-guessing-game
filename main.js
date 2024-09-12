let submitButton = document.getElementById("submit");
let randomNumber = Math.floor(Math.random() * 25);
let changeText = document.getElementById("change")
let backgroundFlash = document.getElementById("flasher")
let livesRemaining = Infinity
let num;

const lifeOne = document.getElementById("lifeOne")
const lifeTwo = document.getElementById("lifeTwo")
const lifeThree = document.getElementById("lifeThree")
const hardModeOnButton = document.getElementById("lives")


submitButton.addEventListener("click", decideFunction);
submitButton.addEventListener("click", liveRemoval)
hardModeOnButton.addEventListener("click", hardMode)
backgroundFlash.classList.remove("flash");

console.log(randomNumber);

function decideFunction(){
    if(submitButton.innerText === "reset"){
        resetGame();
    }
    guessButton();
    
}
    
function guessButton(){

    num = document.getElementById("input").value;

    if(num === ""){
        changeText.innerText = "Guess:"
        changeText.style.color = "black"
        changeText.style.fontWeight = "normal"
        changeText.style.fontSize = "16px"
        return
    }
    num = parseInt(document.getElementById("input").value);

    if(num > randomNumber){
        changeText.innerText = "Guess lower!"
        changeText.style.color = "red"
        changeText.style.fontSize = "18px"
        triggerFlash()
        livesRemaining = (livesRemaining - 1)
        console.log("lower")
        console.log(livesRemaining)
    } 
    else if(num === randomNumber){
        changeText.innerText = "GG you won!"
        changeText.style.color = "green"
        changeText.style.fontWeight = "bold"
        changeText.style.fontSize = "26px"
        submitButton.innerText = "reset"
        console.log("win")
    }
    else{
        changeText.innerText = "Guess higher!"
        changeText.style.color = "red"
        changeText.style.fontSize = "22px"
        console.log("higher")
        triggerFlash()
        livesRemaining = (livesRemaining - 1)
        console.log(livesRemaining)
    }
}

function triggerFlash(){

    backgroundFlash.classList.add("flash");
    setTimeout(() => {
    backgroundFlash.classList.remove("flash");
    }, 250);
}

function resetGame(){

    randomNumber = Math.floor(Math.random() * 25);
    submitButton.innerText = "guess"
    document.getElementById("input").value = ""; // Clear the input field
    console.log(randomNumber)
}

function hardMode(){

    hardModeOnButton.style.display = "none"
    changeText.innerText = "Guess:"
    changeText.style.color = "black"
    changeText.style.fontWeight = "normal"
    changeText.style.fontSize = "16px"
    livesRemaining = 3
    console.log(livesRemaining)
    lifeOne.classList.add("heart")
    lifeTwo.classList.add("heart")
    lifeThree.classList.add("heart")
}

function healthLoss(){

    if(livesRemaining <= 0)
    console.log("out of lives")
}

function liveRemoval(){

    if(livesRemaining < 3){
        lifeOne.classList.remove("heart")
    }
    if(livesRemaining < 2){
        lifeTwo.classList.remove("heart")
    }
    if(livesRemaining < 1){
        lifeThree.classList.remove("heart")
        changeText.innerText = "Guess:"
        changeText.style.color = "black"
        changeText.style.fontWeight = "normal"
        changeText.style.fontSize = "16px"
        document.getElementById("input").value = ""
        hardModeOnButton.style.display = "block"
    }
}