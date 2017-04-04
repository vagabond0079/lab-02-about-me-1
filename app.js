'use strict';

/* console.log('lolwut this rocks');

let sushi = prompt('do you think I like sushi?');

if (sushi.toLowerCase() == 'yes') {
  alert('you are correct.');
} */

var nameArray = ['dustin', 'phil', 'kevin', 'paul', 'adam'];
var colorArray = ['red', 'blue', 'black', 'green', 'pink'];
var foodArray = ['sushi', 'soup', 'italian', 'chicken', 'fruit' ];
var languageArray = ['english', 'spanish', 'italian', 'chinese', 'german'];
var homeArray = ['west seattle', 'queen anne', 'redmond', 'northgate', 'burien'];

function randomNumber() {
   return Math.floor(Math.random() * 4);
}

alert('Welcome to the Guessing Game, try not to lose :-)');

var name = prompt('Is my name ' + nameArray[randomNumber()] '?');
var color = prompt('Is my favorite color' + colorArray[randomNumber()]);
var food = prompt('Is my favorite food ' + foodArray[randomNumber()]);
var language = prompt('Do I speak ' + languageArray[randomNumber()]);
var home = prompt('Do I live in ' + homeArray[randomNumber()]);
