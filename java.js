//Make a function computerPlay to randomly choose rock paper or scissors

let hand = ['rock', 'paper', 'scissor'];
function computerPlay() {
  let value = hand[Math.floor(Math.random() * hand.length)];
  return value;
}

function playRound(playerAnswer, computerAnswer) {
    if (playerAnswer === 'rock' && computerAnswer === 'rock' ||
        playerAnswer === 'paper' && computerAnswer === 'paper' ||
        playerAnswer === 'scissor' && computerAnswer === 'scissor')
        {console.log(`${playerAnswer} equals ${computerAnswer}. It's a DRAW!`)
}   else if (playerAnswer === 'rock' && computerAnswer === 'scissor' ||
        playerAnswer === 'paper' && computerAnswer === 'rock' ||
        playerAnswer === 'scissor' && computerAnswer === 'paper')
    {console.log(`${playerAnswer} beats ${computerAnswer}. You win!`)
}   else if (playerAnswer === 'rock' && computerAnswer === 'paper' ||
        playerAnswer === 'paper' && computerAnswer === 'scissor' ||
        playerAnswer === 'scissor' && computerAnswer === 'rock')
        {console.log(`${playerAnswer} loses to ${computerAnswer}. You lose`)
}    else if (playerAnswer === ' ' || playerAnswer === 'null' || playerAnswer === 'undefined')
        {console.log('field empty')
}
};
let computerAnswer = computerPlay();
let playerAnswer = 'rock'
    playerAnswer.toLowerCase();

    playRound(playerAnswer, computerAnswer);




// function playerSelection() {
//   let answer = prompt('rock, paper or scissor?', '')
//   return answer;
// }

// function playRound() {
//     let playerAnswer = playerSelection().toLowerCase();;
//     let computerAnswer = `${computerPlay()}`
//     if (playerAnswer === 'rock' && computerAnswer === 'rock' ||
//         playerAnswer === 'paper' && computerAnswer === 'paper' ||
//         playerAnswer === 'scissor' && computerAnswer === 'scissor')
//         {alert(`${playerAnswer} equals ${computerAnswer}. It's a DRAW!`)
// }   else if (playerAnswer === 'rock' && computerAnswer === 'scissor' ||
//         playerAnswer === 'paper' && computerAnswer === 'rock' ||
//         playerAnswer === 'scissor' && computerAnswer === 'paper')
//     {alert(`${playerAnswer} beats ${computerAnswer}. You win!`)
// }   else if (playerAnswer === 'rock' && computerAnswer === 'paper' ||
//         playerAnswer === 'paper' && computerAnswer === 'scissor' ||
//         playerAnswer === 'scissor' && computerAnswer === 'rock')
//         {alert(`${playerAnswer} loses to ${computerAnswer}. You lose`)
// }    else if (playerAnswer === ' ' || playerAnswer === 'null' || playerAnswer === 'undefined')
//         {alert('field empty')

        
// }
// };

