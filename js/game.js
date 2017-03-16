var Card = require('./../js/card.js').cardModule;

function Game(){

}

Game.prototype.shuffleCards = function(array) {
	  var currentIndex = contentArr.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = shuflleArr[currentIndex];
	    shuflleArr[currentIndex] = shuflleArr[randomIndex];
	    shuflleArr[randomIndex] = temporaryValue;
	  }

}

Game.prototype.getDinos = function(displayDinos, displayErrors){

	var game = new Game();
  // Dino names calls
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&words=6&paragraphs=1')
  .then(function(response) {

		var contentArr = [];
    // push responses into an array
    contentArr.push(response[0][0]);
    contentArr.push(response[0][1]);
    contentArr.push(response[0][2]);
    contentArr.push(response[0][3]);
    contentArr.push(response[0][4]);
    contentArr.push(response[0][5]);
    console.log(contentArr);

    // instantiate card objects
    card1 = new Card('card1', response[0][0], 0);
    card2 = new Card('card2', response[0][1], 0);
    card3 = new Card('card3', response[0][2], 0);
    card4 = new Card('card4', response[0][3], 0);
    card5 = new Card('card5', response[0][4], 0);
    card6 = new Card('card6', response[0][5], 0);

    // shuffle the content array

		var shuffleArr = contentArr.splice(0);
		console.log(shuflleArr);
		console.log(contentArr);
		var currentIndex = shuffleArr.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = shuflleArr[currentIndex];
	    shuflleArr[currentIndex] = shuflleArr[randomIndex];
	    shuflleArr[randomIndex] = temporaryValue;

		}

		//
    // var shuffleArr = game.shuffleCards(contentArr);

    console.log(shuffleArr);
    card7 = new Card('card7', shuffleArr[0], 0);
    card8 = new Card('card8', shuffleArr[1], 0);
    card9 = new Card('card9', shuffleArr[2], 0);
    card10 = new Card('card10', shuffleArr[3], 0);
    card11 = new Card('card11', shuffleArr[4], 0);
    card12 = new Card('card12', shuffleArr[5], 0);

    // display card content // info is hidden for now
    displayDinos(contentArr, shuffleArr);
  })
  // error messages
  .fail(function(error) {
      // displayErrors(error);
			console.log(error);
      });
};

exports.gameModule = Game;
