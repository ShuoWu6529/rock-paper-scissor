function getComputerChoice() {
    let computerChoice =  Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
    }
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ) {
        return 1;

    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock"
    ) {
        return -1;
    }

    return 0;
}

function updateText(outcome, humanChoice, computerChoice){
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    const result = document.querySelector(".result")
    switch (outcome) {
        case -1:
            result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
            break;
        case 1:
            result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            break;
        case 0:
            result.textContent = `You drew! ${humanChoice} draws ${computerChoice}`;
            break;
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const choices = document.querySelector(".choices");
    choices.addEventListener("click", function listener(event) {
        const target = event.target;
        const humanChoice = target.className;
        const computerChoice = getComputerChoice()
        let outcome = playRound(humanChoice, computerChoice);

        updateText(outcome, humanChoice, computerChoice);

        const human = document.querySelector(".human");
        const computer = document.querySelector(".computer")
        switch (outcome) {
            case 1:
                humanScore++;
                human.textContent = `Your score: ${humanScore}`;
                break;
            case -1:
                computerScore++;
                computer.textContent = `Computer score: ${computerScore}`;
        }

        const result = document.querySelector(".result")
        if (humanScore === 5) {
            result.textContent = "You win the game!";
            choices.removeEventListener("click", listener);
        } else if (computerScore === 5) {
            result.textContent = "You lost the game!";
            choices.removeEventListener("click", listener);
        }

    })
}

playGame();