// var Player = require('./../js/player.js').playerModule;

function Card(pos, content, status)
{
  this.pos= pos;
  this.content= content;
  this.status = status;
}
Card.prototype.getContent = function () {
  return this.content;
};
Card.prototype.getPos = function () {
  return this.pos;
};
Card.prototype.toggleStatus = function () {
  if (this.status===0) {
    this.status=1;
  }else {
    this.status=0;
  }
};

// Card.prototype.shuffle = function (array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// };

exports.cardModule = Card;
