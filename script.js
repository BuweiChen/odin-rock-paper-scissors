function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1/3) {
        return "rock";
    }
    else if (rand < 2/3) {
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "it's a tie.";
                    
                case "paper":
                    return "you lose.";
                
                case "scissors":
                    return "you win.";
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "you win.";
                    
                case "paper":
                    return "it's a tie.";
                
                case "scissors":
                    return "you lose.";
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "you lose.";
                    
                case "paper":
                    return "you win.";
                
                case "scissors":
                    return "it's a tie.";
            }
            break;
        default:
            return "please type either rock, paper, or scissors."
    }
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    alert(`computer chose ${computerChoice}!`);
    let result = playRound(userChoice, computerChoice);
    alert(result);
    if (result == "please type either rock, paper, or scissors.") {
        i--;
    }
    else if (result == "you win.") {
        playerScore++;
    }
    else if (result == "you lose.") {
        computerScore++;
    }

    if (playerScore >= 5) {
        alert("you win!");
    }
    if (computerScore >= 5) {
        alert("you lose!");
    }
    scoreBoard.removeAttribute("hidden");
    scoreBoard.innerText = `Player ${playerScore} : Computer ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));

const scoreBoard = document.createElement("div");
scoreBoard.style.textAlign = "center";
document.body.appendChild(scoreBoard);
scoreBoard.innerText = `Player ${playerScore} : Computer ${computerScore}`;
scoreBoard.setAttribute("hidden", "");

alert("let's play rock paper scissors, first to five!");