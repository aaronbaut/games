//Make a function computerPlay to randomly choose rock paper or scissors

let hand = ['rock', 'paper', 'scissor'];
function computerPlay() {
   let value = hand[Math.floor(Math.random() * hand.length)];
   return value;
}

function playerSelection() {
    prompt('rock, paper or scissor?', '')
}

function start() {
    playerSelection();
    computerPlay();
}