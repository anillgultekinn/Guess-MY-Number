'use strict';

// 0 ila 20 arasında random bir sayı üretiriz
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    // 0 FALSE DEĞERİNE EŞİTTİR

    // input girişi olmadığında

    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number!';
        displayMessage('No Number!');
    }
    // kullanıcı oyunu kazandığında
    else if (guess === secretNumber) {

        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b34f';
        document.querySelector('.number').style.width = '30rem';

        // highscore güncellemesi
        if (score > highScore) {
            highScore = score;

            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // tahmin yanlış olduğunda
    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? 'Too high!' : 'Too Low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
            score--;

            document.querySelector('.score').textContent = score;
        } else {

            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!');

            document.querySelector('.score').textContent = 0;
        }
    }

    // tahmin yüksek olduğunda
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // // tahmin düşük olduğunda
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low !';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage("Start guessing... ");
    document.querySelector('.score').textContent = score; //score tekrar 20
    document.querySelector('.number').textContent = '?'; //
    document.querySelector('.guess').value = ''; //value değerini sıfırlar
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
