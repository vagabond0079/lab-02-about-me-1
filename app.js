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
var count = 0;

function randomNumber() {
   return Math.floor(Math.random() * 4);
}

var nameAnswer = nameArray[randomNumber()];
var colorAnswer = colorArray[randomNumber()];
var foodAnswer = foodArray[randomNumber()];
var languageAnswer = languageArray[randomNumber()];
var homeAnswer = homeArray[randomNumber()];

alert('Welcome to the Guessing Game, try not to lose :-)');
var nameQuestion = prompt('Is my name ' + nameAnswer + '?');
// var colorQuestion = prompt('Is my name ' + colorAnswer + '?');
// var foodQuestion = prompt('Is my favorite food ' + foodAnswer + '?');
// var languageQuestion = prompt('Do I speak ' + languageAnswer + '?');
// var homeQuestion = prompt('Do I live in ' + homeAnswer + '?');

  if ( (nameAnswer == 'dustin') && (nameQuestion.toLowerCase().trim() == 'yes') )  {
      console.log('Correct');
      count ++;
    } else if ( (nameAnswer == 'dustin') && (nameQuestion.toLowerCase().trim() == 'y') )  {
      console.log('Correct');
      count ++;
    } else if ( (nameAnswer != 'dustin') && (nameQuestion.toLowerCase().trim() == 'no') ) {
      console.log('Correct');
      count ++;
    } else if ( (nameAnswer != 'dustin') && (nameQuestion.toLowerCase().trim() == 'n') ) {
      console.log('Correct');
      count ++;
    } else {
      console.log('Nope');
    }

    if ( (colorAnswer == 'red') && (nameQuestion.toLowerCase().trim() == 'yes') )  {
        console.log('Correct');
        count ++;
      } else if ( (colorAnswer == 'red') && (nameQuestion.toLowerCase().trim() == 'y') )  {
        console.log('Correct');
        count ++;
      } else if ( (colorAnswer != 'red') && (nameQuestion.toLowerCase().trim() == 'no') ) {
        console.log('Correct');
        count ++;
      } else if ( (colorAnswer != 'red') && (nameQuestion.toLowerCase().trim() == 'n') ) {
        console.log('Correct');
        count ++;
      } else {
        console.log('Nope');
      }

      if ( (foodAnswer == 'sushi') && (nameQuestion.toLowerCase().trim() == 'yes') )  {
          console.log('Correct');
          count ++;
        } else if ( (foodAnswer == 'sushi') && (nameQuestion.toLowerCase().trim() == 'y') )  {
          console.log('Correct');
          count ++;
        } else if ( (foodAnswer != 'sushi') && (nameQuestion.toLowerCase().trim() == 'no') ) {
          console.log('Correct');
          count ++;
        } else if ( (foodAnswer != 'sushi') && (nameQuestion.toLowerCase().trim() == 'n') ) {
          console.log('Correct');
          count ++;
        } else {
          console.log('Nope');
        }

        if ( (languageAnswer == 'english') && (nameQuestion.toLowerCase().trim() == 'yes') )  {
            console.log('Correct');
            count ++;
          } else if ( (languageAnswer == 'english') && (nameQuestion.toLowerCase().trim() == 'y') )  {
            console.log('Correct');
            count ++;
          } else if ( (languageAnswer != 'english') && (nameQuestion.toLowerCase().trim() == 'no') ) {
            console.log('Correct');
            count ++;
          } else if ( (languageAnswer != 'english') && (nameQuestion.toLowerCase().trim() == 'n') ) {
            console.log('Correct');
            count ++;
          } else {
            console.log('Nope');
          }

          if ( (homeAnswer == 'west seattle') && (nameQuestion.toLowerCase().trim() == 'yes') )  {
              console.log('Correct');
              count ++;
            } else if ( (homeAnswer == 'west seattle') && (nameQuestion.toLowerCase().trim() == 'y') )  {
              console.log('Correct');
              count ++;
            } else if ( (homeAnswer != 'west seattle') && (nameQuestion.toLowerCase().trim() == 'no') ) {
              console.log('Correct');
              count ++;
            } else if ( (homeAnswer != 'west seattle') && (nameQuestion.toLowerCase().trim() == 'n') ) {
              console.log('Correct');
              count ++;
            } else {
              console.log('Nope');
            }

console.log(nameQuestion.toLowerCase().trim());

// trueOrFalse(nameArray[0], name);
// console.log('Name: ' + name);
// trueOrFalse(colorArray[0], color);
// console.log('Color: ' + color);
// trueOrFalse(foodArray[0], food);
// console.log('Food: ' + food);
// trueOrFalse(languageArray[0], language);
// console.log('Language: ' + language);
// trueOrFalse(homeArray[0], home);
// console.log('Home: ' + home);
