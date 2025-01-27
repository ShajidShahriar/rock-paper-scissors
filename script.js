
const choice=["rock","paper","scissor"];
let humanScore=0;
let computerScore=0;


function getComputerChoice(){
    return choice[Math.floor(Math.random()*choice.length)];
}

function getHumanChoice(){
    let userChoice=prompt("your choice:").toLocaleLowerCase();
    return userChoice
}



function playRound(computerChoice,humanChoice){
    
    if(humanChoice === computerChoice){
    console.log("tie")
    }
   else if(humanChoice ==="rock" && computerChoice ==="scissor" ||
    humanChoice ==="paper" && computerChoice ==="rock" ||
    humanChoice === "scissor" && computerChoice ==="rock"){
        console.log(`you win,${humanChoice} beats ${computerChoice}`);
        humanScore+=1;
    }
    else{
        console.log(`you lost,${computerChoice} beats ${humanChoice}`);
        computerScore+=1;
    }



}



function playGame(){
    
    for (i=0;i<5;i++){
        humanSelection=getHumanChoice();
        computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection);

    }
    if (humanScore > computerScore){
        console.log( `you WIN!\nyour score :${humanScore}\ncomputer score :${computerScore}`)
    }
    else{
       console.log(`you LOSE!\nyour score :${humanScore}\ncomputer score :${computerScore}`) 
    }
}


playGame();