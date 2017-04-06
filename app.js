'use strict';

//TODO: I wasnt to prompt the user to guess the number 12
// and get 4 chances

// Var correctNumber = 12;
// var notDone = true;
//
// var guess;
// for (var guesses = 3; guesses > 0 && notDone; guesses--) {
//   guess = prompt('whats my fav num');//  guess = parseInt(guess);
//   if (guess === correctNumber) {
//     alert('you got the right number');
//     notDone = false;
//   }

var nameArray = ['dustin', 'phil', 'kevin', 'paul', 'adam'];
var colorArray = ['red', 'blue', 'black', 'green', 'pink'];
var foodArray = ['sushi', 'soup', 'italian', 'chicken', 'fruit' ];
var languageArray = ['english', 'spanish', 'italian', 'chinese', 'german'];
var homeArray = ['west seattle', 'queen anne', 'redmond', 'northgate', 'burien'];
var superheroArray = ['gambit', 'the hulk', 'wolverine', 'deadpool'];
var heroGuess = false;
var myAge = 32;
var count = 0;

var nameAnswer = nameArray[Math.floor(Math.random() * 4)];
var colorAnswer = colorArray[Math.floor(Math.random() * 4)];
var foodAnswer = foodArray[Math.floor(Math.random() * 4)];
var languageAnswer = languageArray[Math.floor(Math.random() * 4)];
var homeAnswer = homeArray[Math.floor(Math.random() * 4)];

var userName = prompt('Welcome to the Guessing Game, try not to lose!\n\nWhat is your name?');

function nameQ() {
  var nameQuestion = prompt('Is my name ' + nameAnswer + '?');
  console.log('Is my name ' + nameAnswer + '?');
  console.log('User answer: ' + nameQuestion);
}

function colorQ() {
  var colorQuestion = prompt('Is my favorite color ' + colorAnswer + '?');
  console.log('Is my favorite color ' + colorAnswer + '?');
  console.log('User answer: ' + colorQuestion);
}

function foodQ() {
  var foodQuestion = prompt('Is my favorite food ' + foodAnswer + '?');
  console.log('Is my favorite food ' + foodAnswer + '?');
  console.log('User answer: ' + foodQuestion);
}

function langQ() {
  var languageQuestion = prompt('Do I speak ' + languageAnswer + '?');
  console.log('Do I speak ' + languageAnswer + '?');
  console.log('User answer: ' + languageQuestion);
}

function homeQ() {
  var homeQuestion = prompt('Do I live in ' + homeAnswer + '?');
  console.log('Do I live in ' + homeAnswer + '?');
  console.log('User answer: ' + homeQuestion);
}

function guessHowOld() {
  for (var guesses = 3; guesses > 0; guesses--) {
    var userAgeGuess = prompt('How old am I? You have ' + guesses + ' guesses left.');
    if (parseInt(userAgeGuess) === myAge) {
      guesses = 0;
      alert('Age guessed correctly');
      console.log('Age guessed correctly');
      count++;
    } else if (parseInt(userAgeGuess) > myAge) {
      alert('I said how old am I, not how ELDERLY! Guess again.')
    } else {
      alert('I know I have a baby face, but for serious. Guess again.')
    }
  }
}



for (var guesses = 6; guesses > 0 && heroGuess === false; guesses--) {
  var userHeroGuess = prompt('What is a superhero that I like?\nYou have ' + guesses + ' guesses left');
    for (var i = 0; i < superheroArray.length; i++) {
      if (superheroArray[i] === userHeroGuess.toLowerCase().trim()) {
        heroGuess = true;
        alert('True. You guessed one of the following correct answers: ' + superheroArray);
        count++;
       }
    }
}

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

            if (count < 4) {
                alert(count + ' out of 7.\nNot very good, try again SUCKA! (' + userName + ')');
              } else if (count < 7) {
                alert(count + ' out of 7.\nWow you got them all! Stalk much there, ' + userName + '?');
              } else if (count == 7) {
                alert(count + ' out of 7.\nPretty good...But not perfect...' + userName.toUpperCase() );
//             }

nameQ();
colorQ();
foodQ();
langQ();
homeQ();

guessHowOld();

// Class three code demo


// DATA TYPES is JS

// Object
// Function
// Array

//primitives
// String
// Boolean
// Number
// null
// undefined




























//
