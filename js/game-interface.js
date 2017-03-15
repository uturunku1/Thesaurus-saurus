var Card = require('./../js/card.js').cardModule;
var Player = require('./../js/player.js').playerModule;

card1 = new Card('card1', 'card1', 0);
card2 = new Card('card2', 'card2', 0);
card3 = new Card('card3', 'card3', 0);
card4 = new Card('card4', 'card4', 0);
card5 = new Card('card5', 'card5', 0);
card6 = new Card('card6', 'card6', 0);
card7 = new Card('card7', 'card7', 0);
card8 = new Card('card8', 'card8', 0);
card9 = new Card('card9', 'card9', 0);
card10 = new Card('card10', 'card10', 0);
card11 = new Card('card11', 'card11', 0);
card12 = new Card('card12', 'card12', 0);
$(document).ready(function() {
  $('#intake-form').submit(function(event) {
    event.preventDefault();
    var player1_name= $('#player-one-name').val();
    var player2_name = $('#player-two-name').val();

    var player1= new Player (player1_name);
    var player2 = new Player (player2_name);

    var card1pos = card1.getPos();
  $('#form').hide();
  $('#game').show();
  $('#player1_name').append(player1.getName());
  $('#player2_name').append(player2.getName());
  $('#card1').text(card1.content);
  $('#card2').text(card2.content);
  $('#card3').text(card3.content);
  $('#card4').text(card4.content);
  $('#card5').text(card5.content);
  $('#card6').text(card6.content);
  $('#card7').text(card7.content);
  $('#card8').text(card8.content);
  $('#card9').text(card9.content);
  $('#card10').text(card10.content);
  $('#card11').text(card11.content);
  $('#card12').text(card12.content);
  });
});
