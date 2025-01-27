const choice = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice() {
    let valid = false;
    let userChoice;

    while (!valid) {
        try {
            userChoice = prompt("Your choice (rock, paper, or scissors):").toLowerCase();

            if (!["rock", "paper", "scissor"].includes(userChoice)) {
                throw new Error("Invalid input! Please enter 'rock', 'paper', or 'scissors'.");
            }

            valid = true;
        } catch (error) {
            console.log(error.message);
        }
    }

    return userChoice;
}

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Great minds think alike!");
    } else if (
        humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper"
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
    } else {
        console.log(`You lost! ${computerChoice} beats  ${humanChoice}!`);
        computerScore += 1;
    }
}

function playGame() {
    console.log("Welcome to Rock, Paper, Scissors! Best of 5 rounds!");

    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("\nFinal Results:");
    if (humanScore > computerScore) {
        console.log(`🎉 You WIN the game! \nYour score: ${humanScore} \nComputer score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`😢 You LOSE the game. \nYour score: ${humanScore} \nComputer score: ${computerScore}`);
    } else {
        console.log(`🤝 It's a DRAW! Both scored ${humanScore}.`);
    }
}

playGame();
