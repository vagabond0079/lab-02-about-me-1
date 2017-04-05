'use strict';

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
var colorQuestion = prompt('Is my favorite color ' + colorAnswer + '?');
var foodQuestion = prompt('Is my favorite food ' + foodAnswer + '?');
var languageQuestion = prompt('Do I speak ' + languageAnswer + '?');
var homeQuestion = prompt('Do I live in ' + homeAnswer + '?');


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

console.log('Is my favorite color ' + colorAnswer + '?');
console.log('User answer: ' + colorQuestion);
    if ( (colorAnswer == 'red') && (colorQuestion.toLowerCase().trim() == 'yes') )  {
        console.log('Correct');
        count ++;
      } else if ( (colorAnswer == 'red') && (colorQuestion.toLowerCase().trim() == 'y') )  {
        console.log('Correct');
        count ++;
      } else if ( (colorAnswer != 'red') && (colorQuestion.toLowerCase().trim() == 'no') ) {
        console.log('Correct');
        count ++;
      } else if ( (colorAnswer != 'red') && (colorQuestion.toLowerCase().trim() == 'n') ) {
        console.log('Correct');
        count ++;
      } else {
        console.log('Nope');
      }

console.log('Is my favorite food ' + foodAnswer + '?');
console.log('User answer: ' + foodQuestion);


      if ( (foodAnswer == 'sushi') && (foodQuestion.toLowerCase().trim() == 'yes') )  {
          console.log('Correct');
          count ++;
        } else if ( (foodAnswer == 'sushi') && (foodQuestion.toLowerCase().trim() == 'y') )  {
          console.log('Correct');
          count ++;
        } else if ( (foodAnswer != 'sushi') && (foodQuestion.toLowerCase().trim() == 'no') ) {
          console.log('Correct');
          count ++;
        } else if ( (foodAnswer != 'sushi') && (foodQuestion.toLowerCase().trim() == 'n') ) {
          console.log('Correct');
          count ++;
        } else {
          console.log('Nope');
        }

  console.log('Do I speak ' + languageAnswer + '?');
  console.log('User answer: ' + languageQuestion);

        if ( (languageAnswer == 'english') && (languageQuestion.toLowerCase().trim() == 'yes') )  {
            console.log('Correct');
            count ++;
          } else if ( (languageAnswer == 'english') && (languageQuestion.toLowerCase().trim() == 'y') )  {
            console.log('Correct');
            count ++;
          } else if ( (languageAnswer != 'english') && (languageQuestion.toLowerCase().trim() == 'no') ) {
            console.log('Correct');
            count ++;
          } else if ( (languageAnswer != 'english') && (languageQuestion.toLowerCase().trim() == 'n') ) {
            console.log('Correct');
            count ++;
          } else {
            console.log('Nope');
          }

    console.log('Do I live in ' + homeAnswer + '?');
      console.log('User answer: ' + homeQuestion);

          if ( (homeAnswer == 'west seattle') && (homeQuestion.toLowerCase().trim() == 'yes') )  {
              console.log('Correct');
              count ++;
            } else if ( (homeAnswer == 'west seattle') && (homeQuestion.toLowerCase().trim() == 'y') )  {
              console.log('Correct');
              count ++;
            } else if ( (homeAnswer != 'west seattle') && (homeQuestion.toLowerCase().trim() == 'no') ) {
              console.log('Correct');
              count ++;
            } else if ( (homeAnswer != 'west seattle') && (homeQuestion.toLowerCase().trim() == 'n') ) {
              console.log('Correct');
              count ++;
            } else {
              console.log('Nope');
            }

            switch (count) {
              case 0:
              case 1:
              case 2:
                alert('Not very good, try again SUCKA!')
                break;
              case 5:
                alert('Wow you got them all! Stalk much?')
                break;
              default:
                alert('Pretty good...But not perfect.');
            }
