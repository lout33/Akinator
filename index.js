function Node(val) {
  this.value = val;
  this.left = null;
  this.rigth = null;
}
Node.prototype.addNodetoNode = function(node) {
  if (this.value > node.value) {
    if (this.left == null) {
      this.left = node;
    } else {
      this.left.addNodetoNode(node);
    }
  } else if (this.value < node.value) {
    if (this.rigth == null) {
      this.rigth = node;
    } else {
      this.rigth.addNodetoNode(node);
    }
  }
};

function Tree() {
  this.root = null;
}

Tree.prototype.addNode = function(node) {
  if (this.root == null) {
    this.root = node;
  } else {
    this.root.addNodetoNode(node);
  }
};
var tree = new Tree();


// let array = [5,2,7,1,4,6,9,3,8];
let array = [10,7,15,5,9,13,19,4,6,11,14,16,20,1,12,17,2,18,3];
for (let i = 0; i < array.length; i++) {
  var index = new Node(array[i]);
    tree.addNode(index);
}

console.log(tree);
KeepQuestioning(tree.root);

function KeepQuestioning(node,nodeParent){
  // is a leaf?
  if (!node.left && !node.rigth) {
    let semeGuest = prompt(`Is yur number ${node.value} ?`);
    if (semeGuest == "n") {
      alert(`Your number is  ${nodeParent.value}`);
    } else if(semeGuest == "y"){
      alert(`Your number is  ${node.value}`);
    }

  }else{
    var YOrN = prompt(`Is yur number mayor que ${node.value}`);

    let nodeParent = node;
    if (YOrN == "n") {
      // left:
      console.log(node.left.value);
         if(node.left == null){
          alert(`Your number is  ${node.value}`);
         }else{
          KeepQuestioning(node.left,nodeParent)
         }
  
    } else if(YOrN == "y"){
   // rigth:
  
      if(node.rigth == null){
        alert(`Your number is  ${node.value}`);
  
      }else{
        KeepQuestioning(node.rigth,nodeParent)
      }
    }
  }
  
}
