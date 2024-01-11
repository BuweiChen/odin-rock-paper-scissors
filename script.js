function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1/3) {
        return "rock";
    }
    else if (rand < 2/3) {
        return "paper";
    }
    return "scissor";
}