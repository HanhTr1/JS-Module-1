'use strict';
const target7 =document.querySelector('#target7')
let sum = 0;
let numDice =+ prompt('Number of dice: ')
for (let i = 0; i < numDice; i++) {
  let roll = Math.ceil(Math.random() * 6);
  sum += roll;
}
target7.innerHTML = `Sum of dice rolls is: ${sum}`;