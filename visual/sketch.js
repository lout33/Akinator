// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Binary Tree
// Part 1: https://youtu.be/ZNH0MuQ51m4
// Part 2: https://youtu.be/KFEvF_ymuzY

var tree;

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
    { val: 8, animal: null, question: "Does it have feathers?",pattern:null },
    { val: 4, animal: null, question: "Does it live in a barnyard?",pattern:[0] },
    { val: 12, animal: null, question: "It is a mammal",pattern:[1] },
    { val: 1, animal: "chicken", question: null,pattern:[0,0] },
    { val: 5, animal: "owl", question: null ,pattern:[0,1]},
    { val: 9, animal: "turkey", question: null,pattern:[1,0] },
    { val: 13, animal: "dragun", question: null ,pattern:[1,1]}
  ]
  for (var i = 0; i < array.length; i++) {
    // tree.addValue(floor(random(0, 10)));
    bst.add(array[i].val, array[i].animal, array[i].question);

  }



  console.log(bst);

  let counter = 0
  let answers = []

  KeepQuestioning(bst.root);

  function KeepQuestioning(node) {

    // is a leaf?
    if (!node.left && !node.rigth) {
      var predicion = prompt(`Your animal is ""${node.animal}"" ?`);
      if (predicion == "y") {
        alert(`Iam a genius`);

      } else if(predicion == "n") {
       let newAnimal =  prompt(`Who was your animal?`);
       let diference =  prompt(`Whats the diference between your ${newAnimal} and ${node.animal}`);
      //  alert(`So your animal is ${newAnimal} and the diference is ${diference}`);
       alert(`Lest start again please`);
       KeepQuestioning(bst.root);
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
