// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Binary Tree
// Part 1: https://youtu.be/ZNH0MuQ51m4
// Part 2: https://youtu.be/KFEvF_ymuzY
var tree;
// console.log(bst);

function setup() {
  createCanvas(1000, 1000);
  background(51);
  // tree = new Tree();
  // for (var i = 0; i < 10; i++) {
  //   tree.addValue(floor(random(0, 10)));
  // }
  // console.log(tree);
  // tree.traverse();


  const bst = new BST();
  let array = [
    { animal: null, question: "Does it have feathers?", pattern: null },
    { animal: null, question: "Does it live in a barnyard?", pattern: [0] },
    { animal: null, question: "It is a mammal", pattern: [1] },
    { animal: null, question: "It says miau", pattern: [0, 0] },
    { animal: null, question: "It saywau", pattern: [0, 1] },
    { animal: null, question: "It say rauwwww", pattern: [1, 0] },
    { animal: null, question: "It say muuu", pattern: [1, 1] },
    { animal: "owl", question: null, pattern: [0, 0, 0] },
    { animal: "cat", question: null, pattern: [0, 0, 1] },
    { animal: "turkey", question: null, pattern: [0, 1, 0] },
    { animal: "dog", question: null, pattern: [0, 1, 1] },
    { animal: "chicken", question: null, pattern: [1, 0, 0] },
    { animal: "tiger", question: null, pattern: [1, 0, 1] },
    { animal: "turkey", question: null, pattern: [1, 1, 0] },
    { animal: "beef", question: null, pattern: [1, 1, 1] }
  ]
  for (var i = 0; i < array.length; i++) {
    bst.add(array[i].pattern, array[i].animal, array[i].question);
  }

  // const bst = require('./treeSaved');


  console.log(JSON.stringify(bst));

  let counter = 0
  let answers = []

  KeepQuestioning(bst.root);

  function KeepQuestioning(node) {

    // is a leaf?
    if (!node.left && !node.right) {
      var predicion = prompt(`Your animal is ""${node.animal}"" ?`);
      if (predicion == "y") {
        alert(`Iam a genius`);
      } else if (predicion == "n") {

        let newAnimal = prompt(`Who was your animal?`);
        let questionToDiference = prompt(`Whats the diference between your ${newAnimal} and ${node.animal}`);
        let wrongAnimal = node.animal;

        node.animal = null
        node.question = questionToDiference
        // let nodeData = node.data.slice(0)
        let newPartern = node.data.slice(0)
        newPartern.push(1)
        console.log(newPartern);
        bst.add(newPartern, newAnimal)  //here we going againt


        let leftPatern = node.data.slice(0)
        leftPatern.push(0)
        console.log(leftPatern);
        bst.add(leftPatern, wrongAnimal)  //here we going againt

        // console.log(JSON.stringify(bst));
        // fs = require('fs');
        // fs.writeFile('tree.json', JSON.stringify(bst.root), function (err) {
        //   if (err) return console.log(err);
        //   console.log('Hello World > helloworld.txt');
        // });
        //  alert(`So your animal is ${newAnimal} and the diference is ${diference}`);
        // alert(`Lest start again please`);
        // KeepQuestioning(bst.root);
      }
    } else {
      var YOrN = prompt(`Your animal ${node.question}`);
      // let nodeParent = node;
      if (YOrN == "n") {
        // left:
        answers.push("n");
        counter++
        KeepQuestioning(node.left)
      } else if (YOrN == "y") {
        // rigth:
        answers.push("y");
        counter++
        KeepQuestioning(node.right)
      }
    }
  }
  // bst.add(9);
  // bst.add(4);
  // bst.add(17);
  // bst.add(3);
  // bst.add(6);
  // bst.add(22);
  // bst.add(5);
  // bst.add(7);
  // bst.add(20);

  let order = bst.inOrder()
  //   console.log(order);
}
