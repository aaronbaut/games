//Make a function computerPlay to randomly choose rock paper or scissors

let hand = ['rock', 'paper', 'scissor'];
function computerPlay() {
  let value = hand[Math.floor(Math.random() * hand.length)];
  return value;
}

function playerSelection() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            return button.id;
        });
    });
}


function playRound() {
    let playerSelection = playerSelection();
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper' ||
        playerSelection.toLowerCase() === 'scissor' && computerSelection === 'scissor')
        {console.log(`${playerSelection} equals ${computerSelection}. It's a DRAW!`)
}   else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||
        playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper')
    {console.log(`${playerSelection} beats ${computerSelection}. You win!`)
}   else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor' ||
        playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock')
        {console.log(`${playerSelection} loses to ${computerSelection}. You lose`)
}    else if (playerSelection === ' ' || playerSelection === 'null' || playerSelection === 'undefined')
        {console.log('field empty')
        
}
};

    
// function game() {

//     let computerSelection = computerPlay();
//     let playerSelection = prompt('rock, paper or scissor?', '')
//     playRound(playerSelection, computerSelection);
//         console.log(`Round ${i} out of 5`)
//     }

// game();


// function playerSelection() {
//   let Selection = prompt('rock, paper or scissor?', '')
//   return Selection;
// }

// function playRound() {
//     let playerSelection = playerSelection().toLowerCase();;
//     let computerSelection = `${computerPlay()}`
//     if (playerSelection === 'rock' && computerSelection === 'rock' ||
//         playerSelection === 'paper' && computerSelection === 'paper' ||
//         playerSelection === 'scissor' && computerSelection === 'scissor')
//         {alert(`${playerSelection} equals ${computerSelection}. It's a DRAW!`)
// }   else if (playerSelection === 'rock' && computerSelection === 'scissor' ||
//         playerSelection === 'paper' && computerSelection === 'rock' ||
//         playerSelection === 'scissor' && computerSelection === 'paper')
//     {alert(`${playerSelection} beats ${computerSelection}. You win!`)
// }   else if (playerSelection === 'rock' && computerSelection === 'paper' ||
//         playerSelection === 'paper' && computerSelection === 'scissor' ||
//         playerSelection === 'scissor' && computerSelection === 'rock')
//         {alert(`${playerSelection} loses to ${computerSelection}. You lose`)
// }    else if (playerSelection === ' ' || playerSelection === 'null' || playerSelection === 'undefined')
//         {alert('field empty')

        
// }
// };

