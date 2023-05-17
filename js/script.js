const userDice = Math.random() * (6 - 1) + 1;
const botDice = Math.random() * (6 - 1) + 1;
console.log('Your number is : ' + userDice.toFixed(0));
console.log('Bot number is : ' + botDice.toFixed(0));
if (userDice.toFixed(0) > botDice.toFixed(0)){
    console.log('You won!');
} else if (userDice.toFixed(0) < botDice.toFixed(0)){
    console.log('You lose! :(');
} else {
    console.log('DRAW!')
}