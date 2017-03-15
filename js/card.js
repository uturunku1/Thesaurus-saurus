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
exports.cardModule = Card;
