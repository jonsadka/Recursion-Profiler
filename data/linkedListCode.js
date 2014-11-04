var LinkedList = function(value){
  this.head = value || null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
  if (!this.head) { this.head = value; }
  else if (this.tail) { this.tail.addToTail(value); }
  else { this.tail = new LinkedList(value); }
};

LinkedList.prototype.contains = function(target){
  return this.head === target? true :
    this.tail? this.tail.contains(target) : false;
};

var list = new LinkedList(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.contains(6);
