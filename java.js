//Make a function computerPlay to randomly choose rock paper or scissors

let hand = ['rock', 'paper', 'scissor'];
    function computerPlay() {
        let value = hand[Math.floor(Math.random() * hand.length)];
        console.log("Computer selects",value)
        return value;
    }


const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
           let userSelection = e.target.id
            let computerSelection = computerPlay();
            playRound(userSelection,computerSelection);
            keepScore();
            announceWinner();
            });
        });

function playRound(userSelection,computerSelection) {
    if (userSelection === 'rock' && computerSelection === 'rock' ||
        userSelection === 'paper' && computerSelection === 'paper' ||
        userSelection === 'scissor' && computerSelection === 'scissor')
        {results.innerText = `${userSelection} equals ${computerSelection}. It's a DRAW!`
}   else if (userSelection === 'rock' && computerSelection === 'scissor' ||
        userSelection === 'paper' && computerSelection === 'rock' ||
        userSelection === 'scissor' && computerSelection === 'paper')
    {results.innerText = `${userSelection} beats ${computerSelection}. You win!`
}   else if (userSelection === 'rock' && computerSelection === 'paper' ||
        userSelection === 'paper' && computerSelection === 'scissor' ||
        userSelection === 'scissor' && computerSelection === 'rock')
        {results.innerText = `${userSelection} loses to ${computerSelection}. You lose`

};
};

const content = document.querySelector('body');
const results = document.createElement('div');
results.classList.add('results')
content.appendChild(results);
const myScore = document.createElement('div');
myScore.getAttribute('id', 'myScore');
content.appendChild(myScore);
const cpuScore = document.createElement('div');
cpuScore.setAttribute('id', 'cpuScore')
content.appendChild(cpuScore);

let result1 = 0;
let result2 = 0;

function keepScore() {
    if (results.innerText.includes('win')) {
        result1 += 1;
        return myScore.innerText = `My wins: ${result1}`
    }  else if (results.innerText.includes('lose')) {
        result2 += 1;
        return cpuScore.innerText = `Computer wins: ${result2}`
    }
};

function announceWinner() {
    if (result1 == 5) {
      return myScore.innerText += ' WINNER!'
    } else if (result2 == 5) {
      return cpuScore.innerText += ' CPU wins, you lose!'
    }
}



