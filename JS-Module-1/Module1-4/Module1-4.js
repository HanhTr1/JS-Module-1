'use strict';
const target4 =document.getElementById('target4')
let name= prompt("Enter your name:");
let houseNumber= Math.ceil(Math.random()*4);
let house;
if (houseNumber === 1) {
        house = 'Gryffindor';
} else if (houseNumber === 2) {
        house = 'Slytherin';
} else if (houseNumber === 3) {
        house = 'Hufflepuff';
} else {
        house = 'Ravenclaw';
    }
target4.innerHTML =`${name}, you belong to ${house}`;