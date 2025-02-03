const choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateScores() {
    document.getElementById('playerScore').textContent = `Player: ${humanScore}`;
    document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;
    document.getElementById('rounds').textContent = `Round ${roundsPlayed}/${maxRounds}`;
}

function showFinalResult() {
    let result = document.getElementById('result');
    if (humanScore > computerScore) {
        result.innerHTML = "🎉 You win the game! 🎉<br>Click any button to play again!";
    } else if (computerScore > humanScore) {
        result.innerHTML = "😢 Computer wins the game! 😢<br>Click any button to play again!";
    } else {
        result.innerHTML = "🤝 It's a tie game! 🤝<br>Click any button to play again!";
    }
    
    // Reset scores for new game
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
}

function playRound(humanChoice) {
    if (roundsPlayed >= maxRounds) return;
    
    const computerChoice = getComputerChoice();
    let resultText = '';
    
    if (humanChoice === computerChoice) {
        resultText = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText = `🎉 You win! ${humanChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        resultText = `😢 Computer wins! ${computerChoice} beats ${humanChoice}!`;
    }

    document.getElementById('result').innerHTML = resultText;
    roundsPlayed++;
    updateScores();

    if (roundsPlayed === maxRounds) {
        setTimeout(showFinalResult, 1000);
    }
}

// Event listeners
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissor').addEventListener('click', () => playRound('scissor'));