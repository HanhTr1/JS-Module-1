'use strict';

const target6 = document.querySelector('#target6');
let calConfirm = confirm("Should I calculate the square root?");
if (calConfirm) {
    let number = prompt("Enter a number: ");
    number = parseFloat(number);
    if (number < 0) {
        target6.innerHTML = "Invalid number";
    } else {
        let squareRoot = Math.sqrt(number);
        target6.innerHTML = `The square root of ${number} is ${squareRoot}`;
    }
}



