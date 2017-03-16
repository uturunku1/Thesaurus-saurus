var Card = require('./../js/card.js').cardModule;
var Player = require('./../js/player.js').playerModule;
var Game = require('./../js/game.js').gameModule;




function displayDinos(contentArr, shuffleArr) {
  $('#content1').text(contentArr[0]);
  $('#content2').text(contentArr[1]);
  $('#content3').text(contentArr[2]);
  $('#content4').text(contentArr[3]);
  $('#content5').text(contentArr[4]);
  $('#content6').text(contentArr[5]);
  $('#content7').text(shuffleArr[0]);
  $('#content8').text(shuffleArr[1]);
  $('#content9').text(shuffleArr[2]);
  $('#content10').text(shuffleArr[3]);
  $('#content11').text(shuffleArr[4]);
  $('#content12').text(shuffleArr[5]);
}

function displayErrors(error){
  $('#content1').text(error.statusText);
  $('#content2').text(error.statusText);
  $('#content3').text(error.statusText);
  $('#content4').text(error.statusText);
  $('#content5').text(error.statusText);
  $('#content6').text(error.statusText);
  $('#content7').text(error.statusText);
  $('#content8').text(error.statusText);
  $('#content9').text(error.statusText);
  $('#content10').text(error.statusText);
  $('#content11').text(error.statusText);
  $('#content12').text(error.statusText);
}

$(document).ready(function() {
  var player1;
  var player2;
  var card1 = new Card('card1',"", 0);
  var card2 = new Card('card2',"", 0);
  var card3 = new Card('card3',"", 0);
  var card4 = new Card('card4',"", 0);
  var card5 = new Card('card5',"", 0);
  var card6 = new Card('card6',"", 0);
  var card7 = new Card('card7',"", 0);
  var card8 = new Card('card8',"", 0);
  var card9 = new Card('card9',"", 0);
  var card10 = new Card('card10',"", 0);
  var card11 = new Card('card11',"", 0);
  var card12 = new Card('card12',"", 0);
  var deckOfCards = ["dummy", card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];
  console.log("deckOfCards: " + deckOfCards[1].content);


  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var player1_name= $('#player-one-name').val();
    var player2_name = $('#player-two-name').val();

    player1= new Player (player1_name);
    player2 = new Player (player2_name);
    game1 = new Game();
    var contentArr = [];

    // get Dinos from API
    game1.getDinos(displayDinos, displayErrors, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12);

    // Form and Game display
    $('#game-setup').hide();
    $('.col-sm-2').addClass("unflipped");
    $('#game').show();

    // console.log(content1);


    // intake form
    $('#player1_name').text(player1.getName());
    $('#player2_name').text(player2.getName());
    $('#player1_score').text(player1.getScore());
    $('#player2_score').text(player2.getScore());

  });
  // submit form

  $('.col-sm-2').click(function(event){
    event.preventDefault();
    // $('.flipped').toggle();
    var indexOfCard = parseInt($(this)[0].id);
    console.log(indexOfCard);
    // card1.toggleStatus();
    // console.log("player1 flipped Card: " + player1.flippedCard);
    console.log("card1 content: " + deckOfCards[indexOfCard].content);
    console.log("card1 status: " + deckOfCards[indexOfCard].status);
    // if(card1.status===1) {
    //   $(this).removeClass('unflipped');
    //   $(this).addClass('flipped');
    //   $('#card2').removeClass('flipped');
    //   $('#card2').addClass('unflipped');
    //
    // }
    // // else if (this.flippedCard!=compareContent) {
    // //   $(this).removeClass('unflipped');
    // // }else if (this.flippedCard===compareContent) {
    // //   $(this).addClass('flipped');
    // // }
    // else {
    //   $(this).removeClass('flipped');
    //   $(this).addClass('unflipped');
    // }
    // if (player1.flippedCard==="") {
    //   player1.flipCard(card1.content);
    //   // console.log(player1.flippedCard);
    //   // console.log("card1 content: " + card1.content);
    // }else {
    //   player1.updateScore(card1.content);
    //   // console.log(player1.flippedCard);
    //   // console.log("card1 content: " + card1.content);
    // }
    //
    // var new_score = player1.score;
    // $('#player1_score').text(new_score);
  });

  //
  //
  // $('#card1').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card1.toggleStatus();
  //   console.log("player1 flipped Card: " + player1.flippedCard);
  //   console.log("card1 content: " + card1.content);
  //   console.log("card1 status: " + card1.status);
  //   if(card1.status===1 and) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //     $('#card2').removeClass('flipped');
  //     $('#card2').addClass('unflipped');
  //
  //   } else if (this.flippedCard!=compareContent) {
  //     $(this).removeClass('unflipped');
  //   }else if (this.flippedCard===compareContent) {
  //     $(this).addClass('flipped');
  //   }else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card1.content);
  //     console.log(player1.flippedCard);
  //     console.log("card1 content: " + card1.content);
  //   }else {
  //     player1.updateScore(card1.content);
  //     console.log(player1.flippedCard);
  //     console.log("card1 content: " + card1.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  //
  // $('#card2').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card2.toggleStatus();
  //
  //   if(card2.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card2.content);
  //   }else {
  //     player1.updateScore(card2.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  //
  // $('#card3').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card3.toggleStatus();
  //
  //   if(card3.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card3.content);
  //   }else {
  //     player1.updateScore(card3.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card4').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card4.toggleStatus();
  //
  //   if(card4.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card4.content);
  //   }else {
  //     player1.updateScore(card4.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card5').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card5.toggleStatus();
  //
  //   if(card5.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card5.content);
  //   }else {
  //     player1.updateScore(card5.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card6').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card6.toggleStatus();
  //
  //   if(card6.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card6.content);
  //   }else {
  //     player1.updateScore(card6.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card7').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card7.toggleStatus();
  //
  //   if(card7.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card7.content);
  //   }else {
  //     player1.updateScore(card7.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card8').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card8.toggleStatus();
  //
  //   if(card8.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card8.content);
  //   }else {
  //     player1.updateScore(card8.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card9').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card9.toggleStatus();
  //
  //   if(card9.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card9.content);
  //   }else {
  //     player1.updateScore(card9.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card10').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card10.toggleStatus();
  //
  //   if(card10.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card10.content);
  //   }else {
  //     player1.updateScore(card10.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card11').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card11.toggleStatus();
  //
  //   if(card11.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card11.content);
  //   }else {
  //     player1.updateScore(card11.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });
  // $('#card12').click(function(event){
  //   event.preventDefault();
  //   // $('.flipped').toggle();
  //   card12.toggleStatus();
  //
  //   if(card12.status===1) {
  //     $(this).removeClass('unflipped');
  //     $(this).addClass('flipped');
  //   } else {
  //     $(this).removeClass('flipped');
  //     $(this).addClass('unflipped');
  //   }
  //   if (player1.flippedCard==="") {
  //     player1.flipCard(card12.content);
  //   }else {
  //     player1.updateScore(card12.content);
  //   }
  //
  //   var new_score = player1.score;
  //   $('#player1_score').text(new_score);
  // });

});
// document ready
