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

const loginBtn = document.getElementById('loginBtn');
const loggedMail = [
    'alex@boolean.com',
    'giorgia@boolean.com',
    'laura@boolean.com',
    'paolo@boolean.com',
    'fabio@boolean.com',
    'robarta@boolean.com',
    'napoli@boolean.com',
    'sazio@boolean.com',
    'pollo@boolean.com'
];
const loginMsg = document.querySelector('pre#output')

loginBtn.addEventListener('click', function(){
    let userMail = document.querySelector('input#userMail');
    for (let i = 0; i < loggedMail.length; i++){
        if (userMail.value === loggedMail.at(i)){
            loginMsg.innerHTML = 'WELCOME BACK';
            userMail.classList.add('form-control-plaintext');
            loginBtn.classList.add('d-none');
        }
    }
    if (loginMsg.innerHTML != 'WELCOME BACK'){
        loginMsg.innerHTML = 'WRONG MAIL, PLEASE TYPE AGAIN!';
    }
});

