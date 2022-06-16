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
        
            });
        });

function playRound(userSelection,computerSelection) {
    if (userSelection === 'rock' && computerSelection === 'rock' ||
        userSelection === 'paper' && computerSelection === 'paper' ||
        userSelection === 'scissor' && computerSelection === 'scissor')
        {results.innerHTML = `${userSelection} equals ${computerSelection}. It's a DRAW!`
}   else if (userSelection === 'rock' && computerSelection === 'scissor' ||
        userSelection === 'paper' && computerSelection === 'rock' ||
        userSelection === 'scissor' && computerSelection === 'paper')
    {results.innerhtml = `${userSelection} beats ${computerSelection}. You win!`
}   else if (userSelection === 'rock' && computerSelection === 'paper' ||
        userSelection === 'paper' && computerSelection === 'scissor' ||
        userSelection === 'scissor' && computerSelection === 'rock')
        {results.innerhtml = `${userSelection} loses to ${computerSelection}. You lose`
}    else if (userSelection === ' ' || userSelection === 'null' || userSelection === 'undefined')
        {results.innerhtml = 'field empty'
        
}
};


const content = document.querySelector('body')
const results = document.createElement('div')
results.classList.add('results')

content.appendChild(results);


    
// function game() {

//     let computerPlay = computerPlay();
//     let playerSelection = prompt('rock, paper or scissor?', '')
//     playRound(playerSelection, computerPlay);
//         console.log(`Round ${i} out of 5`)
//     }

// game();


// function playerSelection() {
//   let Selection = prompt('rock, paper or scissor?', '')
//   return Selection;
// }

// function playRound() {
//     let playerSelection = playerSelection();;
//     let computerPlay = `${computerPlay()}`
//     if (playerSelection === 'rock' && computerPlay === 'rock' ||
//         playerSelection === 'paper' && computerPlay === 'paper' ||
//         playerSelection === 'scissor' && computerPlay === 'scissor')
//         {alert(`${playerSelection} equals ${computerPlay}. It's a DRAW!`)
// }   else if (playerSelection === 'rock' && computerPlay === 'scissor' ||
//         playerSelection === 'paper' && computerPlay === 'rock' ||
//         playerSelection === 'scissor' && computerPlay === 'paper')
//     {alert(`${playerSelection} beats ${computerPlay}. You win!`)
// }   else if (playerSelection === 'rock' && computerPlay === 'paper' ||
//         playerSelection === 'paper' && computerPlay === 'scissor' ||
//         playerSelection === 'scissor' && computerPlay === 'rock')
//         {alert(`${playerSelection} loses to ${computerPlay}. You lose`)
// }    else if (playerSelection === ' ' || playerSelection === 'null' || playerSelection === 'undefined')
//         {alert('field empty')

        
// }
// };

