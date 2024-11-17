'use strict';
const target9= document.querySelector('#target9');
let num = parseInt(prompt("Enter an integer:"));
let prime = true;
 if (num <= 1) {
            prime = false;
        } else {

            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    prime = false;
                    break;
                }
            }
        }
if (prime) {
  target9.innerHTML = `${num} is a prime number.`;
} else {
  target9.innerHTML = `${num} is not a prime number.`;
}