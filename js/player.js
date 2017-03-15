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

exports.playerModule = Player;
