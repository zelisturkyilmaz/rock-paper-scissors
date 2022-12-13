const choices = ["rock", "paper", "scissors"];
function getComputerChoice () {
    let random = Math.floor(Math.random() * 3) + 1;
    return choices[random-1];
}

// let computerScore = parseInt(document.getElementById("compScore").innerText);
// let userScore = parseInt(document.getElementById("userScore").innerText);
let computerScore = 0;
let userScore = 0;

let computerScoreText = document.getElementById("compScore");
let userScoreText = document.getElementById("userScore");

const selectionButtons = document.querySelectorAll(".selection");
let resultText = document.querySelector(".resultText");
let userSelectionImage = document.querySelector(".userChoice");
let compSelectionImage = document.querySelector(".compChoice");
let resetButton = document.querySelector(".reset");

selectionButtons.forEach ( (btn) => {

    btn.addEventListener("click", () => {
        if (computerScoreText.innerText === "5" || userScoreText.innerText === "5") return;

        let playerSelection = btn.getAttribute("id");
        console.log(playerSelection);
        userSelectionImage.src = `img/${playerSelection}.png`
        let computerSelection = getComputerChoice();
        compSelectionImage.src = `img/${computerSelection}.png`
        playRound(playerSelection, computerSelection);
        computerScoreText.innerText = computerScore;
        userScoreText.innerText = userScore;
    });
})

resetButton.addEventListener("click", () => {
    computerScore = 0;
    computerScoreText.innerText = "0";
    userSelectionImage.src = "img/questionMark.png";
    compSelectionImage.src = "img/questionMark.png"
    userScore = 0;
    userScoreText.innerText = "0";
    resetButton.classList.toggle("hidden");
    resultText.innerHTML = "<br>";
})



function playRound (playerSelection,computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            computerScore += 0;
            userScore +=0;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="It's a tie";
            }
            
        } else if ( computerSelection === "paper") {
            computerScore += 1;
            userScore +=0;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="You Lose! Paper beats Rock";
            }
        } else {
            computerScore += 0;
            userScore +=1;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="You Win! Rock beats Scissors";
            }
        } 
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            computerScore += 0;
            userScore +=1;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="You Win! Paper beats Rock";
            }
        } else if ( computerSelection === "paper") {
            computerScore += 0;
            userScore +=0;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="It's a tie";
            }
        } else {
            computerScore += 1;
            userScore +=0;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="You Lose! Scissors beat Paper";
            }
        } 
    } else {
        if (computerSelection === "rock") {
            computerScore += 1;
            userScore +=0;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="You Lose! Rock beats Scissors";
            }
        } else if ( computerSelection === "paper") {
            computerScore += 0;
            userScore +=1;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="You Win! Scissors beats Paper";
            }
        } else {
            computerScore += 0;
            userScore += 0;
            if (computerScore === 5){
                resultText.textContent = "You lost the game!"
                resetButton.classList.toggle("hidden");
            } else if ( userScore === 5) {
                resultText.textContent = "Congratulations! You win the game!"
                resetButton.classList.toggle("hidden");
            } else {
            resultText.textContent="It's a tie";
            }
        } 
    }
}