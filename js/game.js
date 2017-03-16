var Card = require('./../js/card.js').cardModule;

function Game(){

}

// Game.prototype.shuffleCards = function(array) {
// 	  var currentIndex = contentArr.length, temporaryValue, randomIndex;
//
// 	  // While there remain elements to shuffle...
// 	  while (0 !== currentIndex) {
//
// 	    // Pick a remaining element...
// 	    randomIndex = Math.floor(Math.random() * currentIndex);
// 	    currentIndex -= 1;
//
// 	    // And swap it with the current element.
// 	    temporaryValue = array[currentIndex];
// 	    array[currentIndex] = array[randomIndex];
// 	    array[randomIndex] = temporaryValue;
// 	  }
//
// }

Game.prototype.getDinos = function(displayDinos, displayErrors, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12){

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
    console.log("contentArr " + contentArr);

    // instantiate card objects
    card1.content = response[0][0];
    card2.content = response[0][1];
    card3.content = response[0][2];
    card4.content = response[0][3];
    card5.content = response[0][4];
    card6.content = response[0][5];

    // shuffle the content array
		var indexArr = [];
		var shuffleArr= ["","","","","",""];
	  var count = 0;
	  while (indexArr.length<6) {

			var new_number= Math.floor(Math.random() * 6);
			if (!(indexArr.includes(new_number))) {
				indexArr.push(new_number);
				shuffleArr.splice(new_number,1,contentArr[count]);
        count++;

			}
		}

    console.log("shuffleArr " + shuffleArr);
    card7.content = shuffleArr[0];
    card8.content = shuffleArr[1];
    card9.content = shuffleArr[2];
    card10.content =  shuffleArr[3];
    card11.content =  shuffleArr[4];
    card12.content =  shuffleArr[5];

		// Create deck of cards
		
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
