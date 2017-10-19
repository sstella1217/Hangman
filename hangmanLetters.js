var letter = function(let) {
		this.charac = let;
		this.appear = false;
		this.letterRender = function() {
			 	return (this.appear) ? "_" : this.charac;
		};
};

module.exports = hangmanLetters;


// create an array of hangman letters

// write a function that takes a guess, and 
//var inquirer = require('inquirer');
//inquirer.prompt(['Choose a Letter ']).then(function (answer) {

//    };

//});

//    for each HL, marks it guessedCorrectly if it
//	  was  write a function that displays all HangmanLetters
// example:  co_ing	