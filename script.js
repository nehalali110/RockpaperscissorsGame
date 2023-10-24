// the random choice of the computer player
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    let computerChoiceIndex = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[computerChoiceIndex]
    return computerChoice;
}


let result;
// Let's start the game now 
function playRound(){
    let playerSelection = prompt("You choose rock/paper/scissors?: ");
    if(playerSelection === null || playerSelection === ''){
        alert('Invalid response')
        return;
    }
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = getComputerChoice();
    if (playerSelection === 'paper' && computerSelection === 'rock'){
        result = "The humans have proved why they are smarter"
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        result = "The humans have proved why they are smarter"
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        result = "The humans have proved why they are smarter"
    }
    else if(playerSelection === computerSelection){
        result = "There is a tie"
    }
    else{
        result = "Machines have won, get up and end this dream now"
    }
    return result

}

let score = 0;

function game(){
    for(let i = 0; i<5; i++){
        let result = playRound();
        console.log(result)
        if(result === "The humans have proved why they are smarter"){
            score += 1;
        }
    }
    console.log(score)
}


game()