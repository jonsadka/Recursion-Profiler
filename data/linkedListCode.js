var LinkedList = function(value){
  this.head = value || null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
  if (!this.head) { this.head = value; }
  else if (this.tail) { this.tail.addToTail(value); }
  else { this.tail = new LinkedList(value); }
};

LinkedList.prototype.removeHead = function(){
  var head = this.head;
  this.head = this.tail? this.tail.head : null;
  this.tail = this.tail === null? null :
    this.tail.tail? this.tail.tail : null;
  return head;
};

LinkedList.prototype.contains = function(target){
  return this.head === target? true :
    this.tail? this.tail.contains(target) : false;
};

LinkedList.prototype.last = function() {
  return this.tail? this.tail.last() :
    this.head? this.head : null;
};

var list = new LinkedList(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);
list.contains(6);