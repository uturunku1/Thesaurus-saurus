function Player(name)
{
  this.name= name;
  this.score= 0;
  this.flippedCard="";
}
Player.prototype.getName = function () {
  return this.name;
};
Player.prototype.getScore = function () {
  return this.score;
};
Player.prototype.flipCard = function (flippedCard) {
  this.flippedCard = flippedCard;
};
Player.prototype.unflipCard = function () {
  this.flippedCard = "";
};

// Player.prototype.updateScore = function (points) {
//   console.log(points);
//   console.log(this.score);
//   this.score = this.score+ points ;
//   return this.score;
// };
Player.prototype.updateScore = function (compareContent) {
  console.log("content: " + compareContent);
  console.log("score before: " + this.score);
  if (this.flippedCard===compareContent) {
    this.score +=50;
    this.flippedCard = "";
  } else {
    this.score -=10;
  }
  console.log("score after: " + this.score);
};

exports.playerModule = Player;
