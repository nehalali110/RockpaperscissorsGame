let buttons = document.querySelectorAll('.playerSelection')
let rock = document.querySelector('.rock')
let displayResult = document.querySelector('.results')
let displayScore = document.querySelector('.score');
// console.log(buttons)
let score = 0; 
buttons.forEach((button)=>{
    let result = button.addEventListener('click',()=>playRound(button.id));
    if(score===5){
        displayScore.textContent = `You have won the game with a score of ${score}`
        
    }
})


// the random choice of the computer player
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors']
    let computerChoiceIndex = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[computerChoiceIndex]
    return computerChoice;
}



// Let's start the game now 
function playRound(playerSelection){
    let result;
    // let playerSelection = prompt("You choose rock/paper/scissors?: ");
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
    
    displayResult.textContent = result
    if(result === "The humans have proved why they are smarter"){
        score += 1;
    }

    displayScore.textContent = `YOUR CURRENT SCORE IS ${score}`

    if(score === 5){
        displayScore.textContent = `YOU WON THE GAME WITH 5 POINTS WOHOO`
        score = 0
    }
}







