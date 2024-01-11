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