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
exports.cardModule = Card;
