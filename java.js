//Make a function computerPlay to randomly choose rock paper or scissors

let hand = [Rock, Paper, Scissor];
function computerPlay() {
   let value = hand[Math.floor(Math.random() * hand.length)];
   return value;

}
console.log(computerPlay);
