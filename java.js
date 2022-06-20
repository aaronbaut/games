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
results.classList.add('results');
content.appendChild(results);
const myScore = document.createElement('div');
myScore.classList.add('myScore');
myScore.innerText = 'My wins: '
content.appendChild(myScore);
const cpuScore = document.createElement('div');
cpuScore.classList.add('cpuScore')
cpuScore.innerText = 'Computer wins:'
content.appendChild(cpuScore);

function keepScore() {
    if (results.innerText.includes('win')) {
        return myScore.innerText += '1';
}  else if (results.innerText.includes('lose')) {
        return cpuScore.innerText += '1'
}

}