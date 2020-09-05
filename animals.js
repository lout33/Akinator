let animals = ["Is this animal a mammal?" ,"Is this animal a carnivore?", "Does this animal stand on four legs?"];
let answers = []

function Node(obj) {
  this.animal = obj.animal;
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
{val:8,data:"nothing here"},
{val:4,data:"nothing here"},
{val:12,data:"nothing here"},
{val:2,data:"nothing here"},
{val:6,data:"nothing here"},
{val:10,data:"nothing here"},
{val:14,data:"nothing here"},
{val:1,data:"nothing here",pattern:"n n n",animal:"pigeon "},
{val:3,data:"nothing here",pattern:"n n y",animal:"parrot "},
{val:5,data:"nothing here",pattern:"n y n",animal:"owl"},
{val:7,data:"nothing here",pattern:"n y y",animal:"i dont now"},
{val:9,data:"nothing here",pattern:"y n n",animal:"i dont now"},
{val:11,data:"nothing here",pattern:"y n y",animal:"deer"},
{val:13,data:"nothing here",pattern:"y y n",animal:"dog"},
{val:15,data:"nothing here",pattern:"y y y",animal:"bear"}
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
     alert(`Your animal is ${node.animal}, ${node.pattern}`);
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
