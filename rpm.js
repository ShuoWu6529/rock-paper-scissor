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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper"){
        return "paper";
    }
    return "scissors";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let loseOrWin = 2
        if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper"
        ) {
            loseOrWin = 1;

        } else if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock"
        ) {
            loseOrWin = 0;
        }

        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        switch (loseOrWin) {
            case 0:
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
                break;
            case 1:
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
                break;
            case 2:
                console.log(`You drew! ${humanChoice} draws ${computerChoice}`);
                break;
        }
    }

    for (let i = 0; i < 5; i++){
        playRound(getComputerChoice(), getHumanChoice());
    }
}

playGame();