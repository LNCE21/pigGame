'use strict';

//Selecting elements
const scoreElement0 = document.querySelector("#score--0");
const scoreElement1 = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");

//Setting initial conditions of score zero elements
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;

//Select the element with class "dice". And add the element with class "hidden" to -Hide the dice-
diceElement.classList.add("hidden");

