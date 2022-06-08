//Make a function computerPlay to randomly ccomputerSelectionhoose rock paper or scissors

let hand = ['rock', 'paper', 'scissor'];
function computerPlay() {
  let value = hand[Math.floor(Math.random() * hand.length)];
  return value;
}

const buttons = document.querySelectorAll('button');
    let playerSelection = buttons.forEach((button) => {
        button.addEventListener('click', () => {
            computerPlay();
            playRound();
            return button.id;
        });
    });
   

function playRound() {
    
    if (playerSelection === 'rock' && computerPlay === 'rock' ||
        playerSelection === 'paper' && computerPlay === 'paper' ||
        playerSelection === 'scissor' && computerPlay === 'scissor')
        {console.log(`${playerSelection} equals ${computerPlay}. It's a DRAW!`)
}   else if (playerSelection === 'rock' && computerPlay === 'scissor' ||
        playerSelection === 'paper' && computerPlay === 'rock' ||
        playerSelection === 'scissor' && computerPlay === 'paper')
    {console.log(`${playerSelection} beats ${computerPlay}. You win!`)
}   else if (playerSelection === 'rock' && computerPlay === 'paper' ||
        playerSelection === 'paper' && computerPlay === 'scissor' ||
        playerSelection === 'scissor' && computerPlay === 'rock')
        {console.log(`${playerSelection} loses to ${computerPlay}. You lose`)
}    else if (playerSelection === ' ' || playerSelection === 'null' || playerSelection === 'undefined')
        {console.log('field empty')
        
}
};

    
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

