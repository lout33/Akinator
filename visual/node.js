// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Binary Tree
// Part 1: https://youtu.be/ZNH0MuQ51m4
// Part 2: https://youtu.be/KFEvF_ymuzY

function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
};

Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y);
  console.log();
  if (this.animal) {
    fill(255);
    noStroke();
    text(this.animal, this.x, this.y);
  } else if(this.question){
    fill(255);
    noStroke();
    text(this.question, this.x, this.y);
  }

  stroke(255);
  noFill();
  ellipse(this.x, this.y, 20, 20);
  line(parent.x, parent.y, this.x, this.y);
  if (this.right != null) {
    this.right.visit(this);
  }
};

Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x * 0.5;
      this.left.y = this.y + 20;
    } else {
      this.left.addNode(n);
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x * 1.5;
      this.right.y = this.y + 20;
    } else {
      this.right.addNode(n);
    }
  }
};


Node.prototype.findMin = function(current){
  let current2 = current;
  // console.log(this.left);
  // console.log(current);

  // while (current2.left !== null) {
  //   current2 = this.left; 
  // }
  // return current2.value;
}
