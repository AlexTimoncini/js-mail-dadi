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
const playBtn = document.getElementById('playGame');

loginBtn.addEventListener('click', function(){
    let userMail = document.querySelector('input#userMail');
    for (let i = 0; i < loggedMail.length; i++){
        if (userMail.value === loggedMail.at(i)){
            loginMsg.innerHTML = 'WELCOME BACK!';

            loginMsg.classList.add('text-success');
            loginMsg.classList.remove('text-danger');

            userMail.classList.add('form-control-plaintext');
            userMail.setAttribute("disabled", "");

            loginBtn.classList.add('d-none');

            playBtn.removeAttribute('disabled');
        }
    }
    if (loginMsg.innerHTML != 'WELCOME BACK!'){
        loginMsg.innerHTML = 'WRONG MAIL, PLEASE TYPE AGAIN!';
        loginMsg.classList.add('text-danger');
    }
});

playBtn.addEventListener('click', function(){
    const userDice = Math.random() * (6 - 1) + 1;
    const botDice = Math.random() * (6 - 1) + 1;

    const userResult = document.getElementById('userResult');
    const botResult = document.getElementById('botResult');
    const finalResult = document.getElementById('finalResult');

    userResult.innerHTML = 'Your number is : ' + userDice.toFixed(0);
    botResult.innerHTML = 'Bot number is : ' + botDice.toFixed(0);

    if (userDice.toFixed(0) > botDice.toFixed(0)){
        finalResult.innerHTML = 'You won!';
        finalResult.classList.add('text-success');
        finalResult.classList.remove('text-danger');
        finalResult.classList.remove('text-secondary');
    } else if (userDice.toFixed(0) < botDice.toFixed(0)){
        finalResult.innerHTML = 'You lose! :(';
        finalResult.classList.add('text-danger');
        finalResult.classList.remove('text-success');
        finalResult.classList.remove('text-secondary');
    } else {
        finalResult.innerHTML = 'DRAW!'
        finalResult.classList.add('text-secondary');
        finalResult.classList.remove('text-success');
        finalResult.classList.remove('text-danger');
}
});