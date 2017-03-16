var Card = require('./../js/card.js').cardModule;
var Player = require('./../js/player.js').playerModule;

var card1 = new Card('card1', '', 0);
var card2 = new Card('card2', '', 0);
var card3 = new Card('card3', '', 0);
var card4 = new Card('card4', '', 0);
var card5 = new Card('card5', '', 0);
var card6 = new Card('card6', '', 0);
var card7 = new Card('card7', '', 0);
var card8 = new Card('card8', '', 0);
var card9 = new Card('card9', '', 0);
var card10 = new Card('card10', '', 0);
var card11 = new Card('card11', '', 0);
var card12 = new Card('card12', '', 0);


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}




$(document).ready(function() {
  var player1;
  var player2;


  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var player1_name= $('#player-one-name').val();
    var player2_name = $('#player-two-name').val();

    player1= new Player (player1_name);
    player2 = new Player (player2_name);

    var contentArr = [];

    // Dino names calls
    $.get('http://dinoipsum.herokuapp.com/api/?format=json&words=6&paragraphs=1')
    .then(function(response) {

      // push responses into an array
      contentArr.push(response[0][0]);
      contentArr.push(response[0][1]);
      contentArr.push(response[0][2]);
      contentArr.push(response[0][3]);
      contentArr.push(response[0][4]);
      contentArr.push(response[0][5]);
      console.log(contentArr);

      // instantiate card objects
      var card1 = new Card('card1', response[0][0], 0);
      var card2 = new Card('card2', response[0][1], 0);
      var card3 = new Card('card3', response[0][2], 0);
      var card4 = new Card('card4', response[0][3], 0);
      var card5 = new Card('card5', response[0][4], 0);
      var card6 = new Card('card6', response[0][5], 0);
      console.log(card1);

      // display card content // info is hidden for now
      $('#content1').text(response[0][0]);
      $('#content2').text(response[0][1]);
      $('#content3').text(response[0][2]);
      $('#content4').text(response[0][3]);
      $('#content5').text(response[0][4]);
      $('#content6').text(response[0][5]);

      // shuffle the content array
      var shuffleArr = shuffle(contentArr);
      console.log(shuffleArr);
      var card7 = new Card('card7', shuffleArr[0], 0);
      var card8 = new Card('card8', shuffleArr[1], 0);
      var card9 = new Card('card9', shuffleArr[2], 0);
      var card10 = new Card('card10', shuffleArr[3], 0);
      var card11 = new Card('card11', shuffleArr[4], 0);
      var card12 = new Card('card12', shuffleArr[5], 0);

      // display shuffled cards content // info is hidden for now
      $('#content7').text(shuffleArr[0]);
      $('#content8').text(shuffleArr[1]);
      $('#content9').text(shuffleArr[2]);
      $('#content10').text(shuffleArr[3]);
      $('#content11').text(shuffleArr[4]);
      $('#content12').text(shuffleArr[5]);

    })
    // error message
    .fail(function(error) {
          $('#content1').text(error.responseJSON.message);
          $('#content2').text(error.responseJSON.message);
          $('#content3').text(error.responseJSON.message);
          $('#content4').text(error.responseJSON.message);
          $('#content5').text(error.responseJSON.message);
          $('#content6').text(error.responseJSON.message);
          $('#content7').text(error.responseJSON.message);
          $('#content8').text(error.responseJSON.message);
          $('#content9').text(error.responseJSON.message);
          $('#content10').text(error.responseJSON.message);
          $('#content11').text(error.responseJSON.message);
          $('#content12').text(error.responseJSON.message);
        });

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


  $('#card1').click(function(event){
    event.preventDefault();
    // $('.flipped').toggle();
    card1.toggleStatus();

    if(card1.status===1) {
      // $(this).removeClass('unflipped');
      $(this).addClass('flipped');
    } else {
      $(this).removeClass('flipped');
      // $(this).addClass('unflipped');
    }
    if (player1.flippedCard==="") {
      player1.flipCard(card1.content);
    }else {
      player1.updateScore(card1.content);
    }

    var new_score = player1.score;
    $('#player1_score').text(new_score);
  });

  $('#card2').click(function(event){
    event.preventDefault();
    // $('.flipped').toggle();
    card1.toggleStatus();

    if(card1.status===1) {
      $(this).removeClass('unflipped');
      $(this).addClass('flipped');
    } else {
      $(this).removeClass('flipped');
      $(this).addClass('unflipped');
    }
    if (player1.flippedCard==="") {
      player1.flipCard(card2.content);
    }else {
      player1.updateScore(card2.content);
    }

    var new_score = player1.score;
    $('#player1_score').text(new_score);
  });
  // $('#card2').click(function(event){});;
  // $('#card3').click(function(event);
  // $('#card4').click(function(event);
  // $('#card5').click(function(event);
  // $('#card6').click(function(event);
  // $('#card7').click(function(event);
  // $('#card8').click(function(event);
  // $('#card9').click(function(event);
  // $('#card10').click(function(event);
  // $('#card11').click(function(event);
  // $('#card12').click(function(event);
});
// document ready
