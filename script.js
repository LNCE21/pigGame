'use strict';

//Selecting elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


let scores, currentScore, activePlayer, playing;
//Function initialization executed when we load the page for the first time and when the button "new game" is clicked
const init = function () {
    //To store the scores, we are using the -scores- variable, contains an array wich holds scores of player 0 at position 0 and player 1 at position 1
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    //Setting initial conditions of score zero elements
    scoreElement0.textContent = 0;
    scoreElement1.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    //Select the element with class "dice". And add the element with class "hidden" to -Hide the dice-
    diceElement.classList.add("hidden");
    player0Element.classList.remove("player--winner");
    player1Element.classList.remove("player--winner");
    player0Element.classList.add("player--active");
    player1Element.classList.remove("player--active");
}
//Calling the function
init();

//Switch function 
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
}

//Function to roll the dice
btnRoll.addEventListener("click", function () {
    if (playing) {
        //1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        //2. Display Dice
        diceElement.classList.remove("hidden");
        diceElement.src = `img/dice-${dice}.png`;
        //3. Check for rolled 1: If true, score to 0 and switch to next player
        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;
            //Display the score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //Switch to next player and delete the score
            switchPlayer();
        }
    }

});


btnHold.addEventListener("click", function () {
    if (playing) {
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        //Now, display the score
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            //Finish the game
            playing = false;
            diceElement.classList.add("hidden");
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        } else {
            //Switch to the next player
            switchPlayer();
        }
    }
});


btnNew.addEventListener("click", init);