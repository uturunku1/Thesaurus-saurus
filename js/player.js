function Player(name)
{
  this.name= name;
  this.score= 0;
}
Player.prototype.getName = function () {
  return this.name;
};
Player.prototype.getScore = function () {
  return this.score;
};
Player.prototype.updateScore = function (points) {
  console.log(points);
  console.log(this.score);
  this.score = this.score+ points ;
  return this.score;
};

exports.playerModule = Player;
