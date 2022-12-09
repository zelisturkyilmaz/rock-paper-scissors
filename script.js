const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    return choices[random-1];
}


let computerScore = 0;
let userScore = 0;
function playRound(playerSelection,computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            computerScore += 0;
            userScore +=0;
            console.log("It's a tie");
        } else if ( computerSelection === "paper") {
            computerScore += 1;
            userScore +=0;
            console.log("You Lose! Paper beats Rock");
        } else {
            computerScore += 0;
            userScore +=1;
            console.log("You Win! Rock beats Scissors");
        } 
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            computerScore += 0;
            userScore +=1;
            console.log("You Win! Paper beats Rock");
        } else if ( computerSelection === "paper") {
            computerScore += 0;
            userScore +=0;
            console.log("It's a tie");
        } else {
            computerScore += 1;
            userScore +=0;
            console.log("You Lose! Scissors beat Paper");
        } 
    } else {
        if (computerSelection === "rock") {
            computerScore += 1;
            userScore +=0;
            console.log("You Lose! Rock beats Scissors");
        } else if ( computerSelection === "paper") {
            computerScore += 0;
            userScore +=1;
            console.log("You Win! Scissors beats Paper");
        } else {
            computerScore += 0;
            userScore += 0;
            console.log("It's a tie");
        } 
    }
}

function game() {
    
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose between Rock, Paper or Scissor").toLowerCase();
        const computerSelection = getComputerChoice();  
        
        playRound(playerSelection, computerSelection);
    }
    if (userScore > computerScore) {
        console.log("You win the game!")
    } else if (userScore < computerScore) {
        console.log("You lost the game!")
    } else {
        console.log("It's a tie!")
    }
}

game();