"use strict";

setup();

function setup() {
    let numbers = [];

    for (let i = 0; i < 100; i++) {
        numbers[i] = Math.random() * 100;
    }

    let numbers2 = [];


    for (let i = 0; i < 100; i++) {
        numbers2[i] = Math.random() * 100;
    }

    console.log(calculateAverage(numbers));
    console.log(calculateAverage(numbers2));
}

function calculateAverage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total / numbers.length;
}