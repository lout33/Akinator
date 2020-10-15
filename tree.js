/* Binary Search Tree */

class Node {
  constructor(data, x, y, level, animal, question, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.x = x;
    this.y = y;
    this.level = level
    this.animal = animal
    this.question = question

  }
}



class BST {
  constructor() {
    this.root = null;
  }
  add(data, animal, question) {
    const node = this.root;
    let levelDepth = 1
    let counterLeft = 0
    let counterRight = 0
    let iter = 0
    if (node === null) {
      this.root = new Node(data, 1000 / 2, 16, levelDepth, animal, question);
      return;
    } else {

      const searchTree = function (node) {
        if (data[iter] != null && data[iter] == 0) {
          if (node.left === null) {
            levelDepth++
            counterLeft++
            iter++
            node.left = new Node(data, node.x - 1000 / Math.pow(2, levelDepth), node.y + 40, levelDepth, animal, question);
            return;
          } else if (node.left !== null) {
            levelDepth++
            counterLeft++
            iter++
            return searchTree(node.left);
          }
        } else if (data[iter] != null && data[iter] == 1) {
          if (node.right === null) {
            levelDepth++
            counterRight++
            iter++
            node.right = new Node(data, node.x + 1000 / Math.pow(2, levelDepth), node.y + 40, levelDepth, animal, question);
            // find nivel
            // console.log(node.data,node.x,"rigth",node.level);
            return;
          } else if (node.right !== null) {
            levelDepth++
            counterRight++
            iter++
            // console.log(node.data,node.x,"rigth",node.level);
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }
  inOrder() {
    // let nodeParent = this.root
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      let traverseInOrder = (node, nodeParent = node) => {
        node.left && traverseInOrder(node.left, node);
        result.push(node.data);
        node.right && traverseInOrder(node.right, node);
      }
      traverseInOrder(this.root);
      return result;
    };
  }



}

var tree;

const btsJSON = require('./tree.json');
// console.log(bts,"BTSSS");
const bst = new BST();

bst.root = btsJSON.root
// let array = [
//   { animal: null, question: "Does it have feathers?", pattern: null },
//   { animal: null, question: "Does it live in a barnyard?", pattern: [0] },
//   { animal: null, question: "It is a mammal", pattern: [1] },
//   { animal: "chicken", question: null, pattern: [0, 0] },
//   { animal: "owl", question: null, pattern: [0, 1] },
//   { animal: "turkey", question: null, pattern: [1, 0] },
//   { animal: "dragun", question: null, pattern: [1, 1] }
// ]
// for (var i = 0; i < array.length; i++) {
//   bst.add(array[i].pattern, array[i].animal, array[i].question);

// }



// let stringTree = JSON.stringify(bst)
// console.log(stringTree);

// fs = require('fs');
// fs.writeFile('tree.json', stringTree, function (err) {
//   if (err) return console.log(err);
// });


let counter = 0
let answers = []

function KeepQuestioning (node, socketId,userInfo,lastinfo)  {

  // is a leaf?
  if (!node.left && !node.right) {
    counter = 0;
    // answers = [];
    if(!userInfo.lastAnswer ){
      // let quest = `Your animal is ""${node.animal}"" ?`
      let rpta = {rpta:node.animal}
      return rpta;
    }

    let lastAnswerBACK = "n"
    // if (lastAnswerBACK == "y") {
    //   // nunca llegara aca 
    //   return ""
    //   // alert(`Iam a genius`);
    // } else 
    if (lastAnswerBACK == "n") {

      console.log("adding new children");
      // let newAnimal = prompt(`Who was your animal?`);
      // let questionToDiference = prompt(`Whats the diference between your ${newAnimal} and ${node.animal}`);
      let wrongAnimal = node.animal;
      let questionToDiference = lastinfo.newQuestion
      let newAnimal = lastinfo.newAnimal

      node.animal = null
      node.question = questionToDiference
      // let nodeData = node.data.slice(0)
      let newPartern = node.data.slice(0)
      newPartern.push(1)
      console.log(newPartern); //right pattern
      bst.add(newPartern, newAnimal)  //here we going againt


      let leftPatern = node.data.slice(0)
      leftPatern.push(0)
      // console.log(leftPatern);
      // bst.add(leftPatern, wrongAnimal)  //here we going againt
      bst.add(leftPatern, wrongAnimal)
      console.log(bst);
      return "end";
    }
  } else {
    // var YOrN = prompt(`Your animal ${node.question}`);
    //send questions to user 

    // function getQuestion(){
    //   return node.question
    // }
    console.log(userInfo.answer,"rpta");

    if (counter >= userInfo.answer.length) {
      console.log("Not has RPTA");
      console.log(node.question,"node.question");
      let question = node.question
      counter = 0
      return question;
    } else if (counter < userInfo.answer.length) {
      console.log(" has RPTA");

      // let share = await sharetQuestion(node.question);
      // var YOrN = await getAnswer(node.question, idUserSocket);
      //wait to get the response from frontend
      // console.log(rpta,'rpta');
      var YOrN = userInfo.answer[counter]
      // let nodeParent = node;
      if (YOrN == "n") {
        // left:
        answers.push("n");
        counter++
        return  KeepQuestioning(node.left,socketId,userInfo,lastinfo)
      } else if (YOrN == "y") {
        // rigth:
        answers.push("y");
        counter++
        return KeepQuestioning(node.right,socketId,userInfo,lastinfo)
      }
    }

  }
}
// let order = bst.inOrder()
function getAnswer(question, socketId) {
  // call the emit funciton here to the socket
  let info = { question: question, socketId: socketId }

}



let shareAnswer = null
function getNextQuestion(answers) {
  shareAnswer = answers
  let nextQuestion
  // get nextQuestion
  // let nextQuestion = 
  return nextQuestion
}

module.exports = {
  KeepQuestioning,
  getNextQuestion
}; 