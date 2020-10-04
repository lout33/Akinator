let animals = [
  "Is this animal a mammal?" 
,"Is this animal a carnivore?", 
"Does this animal stand on four legs?"];
// It is a lion
// Diference between a lion and a elephant
// Do it have tuskS?
let answers = []

function Node(obj) {
  this.animal = obj.animal;
  this.question = obj.question
  this.pattern = obj.pattern;
  this.value = obj.val;
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


let array = [
{val:8,animal:null,question:"Does it have feathers?"},
{val:4,animal:null,question:"Does it live in a barnyard?"},
{val:12,animal:null,question:"It is a mammal"},
{val:1,animal:"chicken",question:null},
{val:3,animal:"owl",question:null},
{val:5,animal:"turkey",question:null},
{val:7,animal:"i dont now",question:null},
]
for (let i = 0; i < array.length; i++) {
  var index = new Node(array[i]);
    tree.addNode(index);
}
let oo = 0

console.log(tree);
KeepQuestioning(tree.root);
console.log(answers);

function KeepQuestioning(node,nodeParent,i){
  
  // is a leaf?
  if (!node.left && !node.rigth) {
     alert(`Your animal is ${node.animal}`);
  }else{
    var YOrN = prompt(`${animals[oo]}`);
    // let nodeParent = node;
    if (YOrN == "n") {
      // left:ç
      answers.push("n");
      oo++
      KeepQuestioning(node.left,nodeParent,i)
    } else if(YOrN == "y"){
   // rigth:
      answers.push("y");
      oo++
      KeepQuestioning(node.rigth,nodeParent,i)
    }
  }
}

// let Answers = [];
// for (let i = 0; i < animals.length; i++) {
//    let Answer = prompt(animals[i]);
//    Answers.push(Answer)
// }

// console.log(Answers);
