//Make a function computerPlay to randomly choose rock paper or scissors

let hand = ['rock', 'paper', 'scissor'];
function computerPlay() {
  let value = hand[Math.floor(Math.random() * hand.length)];
  return value;
}
let computerAnswer = hand
let response = function playerSelection() {
  prompt('rock, paper or scissor?', '')
}
let playerSelection = response

let playerAnswer = playerSelection.toLowerCase()

function start() {
  playerSelection();
  computerPlay();
    if playerAnswer === 'rock' && computerAnswer === 'rock' ||
    playerAnswer === 'paper' && computerAnswer === 'paper' ||
    playerAnswer === 'scissor' && computerAnswer === 'scissor';
    alert(`${playerAnswer} equals ${computerAnswer}. It's a DRAW!`)
}