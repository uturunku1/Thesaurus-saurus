var Card = require('./../js/card.js').cardModule;
var Player = require('./../js/player.js').playerModule;


$(document).ready(function() {
  var player1;
  var player2;
  var card1 = new Card('card1', 'card1', 0);
  var card2 = new Card('card2', 'card2', 0);
  var card3 = new Card('card3', 'card3', 0);
  var card4 = new Card('card4', 'card4', 0);
  var card5 = new Card('card5', 'card5', 0);
  var card6 = new Card('card6', 'card6', 0);
  var card7 = new Card('card7', 'card7', 0);
  var card8 = new Card('card8', 'card8', 0);
  var card9 = new Card('card9', 'card9', 0);
  var card10 = new Card('card10', 'card10', 0);
  var card11 = new Card('card11', 'card11', 0);
  var card12 = new Card('card12', 'card12', 0);

  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var player1_name= $('#player-one-name').val();
    var player2_name = $('#player-two-name').val();

    player1= new Player (player1_name);
    player2 = new Player (player2_name);



  // Form and Game display
  $('#game-setup').hide();
  $('.col-sm-2').addClass("unflipped");
  $('#game').show();


  // intake form
  $('#player1_name').text(player1.getName());
  $('#player2_name').text(player2.getName());
  $('#player1_score').text(player1.getScore());
  $('#player2_score').text(player2.getScore());

  // card display
  // $('#card1').text(card1.content);
  // $('#card2').text(card2.content);
  // $('#card3').text(card3.content);
  // $('#card4').text(card4.content);
  // $('#card5').text(card5.content);
  // $('#card6').text(card6.content);
  // $('#card7').text(card7.content);
  // $('#card8').text(card8.content);
  // $('#card9').text(card9.content);
  // $('#card10').text(card10.content);
  // $('#card11').text(card11.content);
  // $('#card12').text(card12.content);
  });
  // submit form

  // if (currentPlayer === "playerOne") {
  //          $(this).parent().addClass("oprah");
  //        } else if (currentPlayer === "playerTwo") {
  //          $(this).parent().addClass("malcolm");
  //        }
  // click events
  $('.col-sm-2').click(function(event){
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
    var new_score = player1.updateScore(1);
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
