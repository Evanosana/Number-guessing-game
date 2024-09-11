let submitButton = document.getElementById("submit");
let randomNumber = Math.floor(Math.random() * 25);
let changeText = document.getElementById("change")
let backgroundFlash = document.getElementById("flasher")
let num;

submitButton.addEventListener("click", decideFunction);

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
        changeText.style.fontSize = "20px"
        triggerFlash()
        console.log("lower")
    } 
    else if(num === randomNumber){
        changeText.innerText = "GG you won!"
        changeText.style.color = "green"
        changeText.style.fontWeight = "bold"
        changeText.style.fontSize = "24px"
        submitButton.innerText = "reset"
        console.log("win")
    }
    else{
        changeText.innerText = "Guess higher!"
        changeText.style.color = "red"
        changeText.style.fontSize = "20px"
        console.log("higher")
        triggerFlash()
    }
}

function triggerFlash(){

    backgroundFlash.classList.add("flash");
    changeText.classList.add("flashTwo")
    setTimeout(() => {
        backgroundFlash.classList.remove("flash");
    }, 400);
    setTimeout(() => {
        backgroundFlash.classList.remove("flashTwo");
    }, 400);
}

function resetGame(){

    randomNumber = Math.floor(Math.random() * 25);
    submitButton.innerText = "guess"
    document.getElementById("input").value = ""; // Clear the input field
    console.log(randomNumber)
}