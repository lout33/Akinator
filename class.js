/* Binary Search Tree */

class Node {
  constructor(data,x,y,level,animal,question,left = null, right = null) {
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
  add(data,animal,question) {
    const node = this.root;
    let levelDepth = 1
    let counterLeft = 0
    let counterRight = 0
    let iter = 0
    if (node === null) {
      this.root = new Node(data,width/2,16,levelDepth,animal,question);
      return;
    } else {

      const searchTree = function(node) {
        if (data[iter] != null && data[iter] == 0) {
          if (node.left === null) {
            levelDepth++
            counterLeft++
            iter++

            node.left = new Node(data,node.x - width/Math.pow(2, levelDepth) ,node.y + 40,levelDepth,animal,question);
            // console.log(levelDepth,"levelDepth-left");
            // console.log(node.data,node.x,"rigth",node.level);
            return;
          } else if (node.left !== null) {
            levelDepth++
            counterLeft++
            iter++
            // console.log(node.data,node.x,"left",node.level);
            return searchTree(node.left);
          }
        } else if (data[iter] != null && data[iter] == 1) {
          if (node.right === null) {
            levelDepth++
            counterRight++
            iter++

            // console.log(levelDepth,"levelDepth-right");
            node.right = new Node(data,node.x+width/Math.pow(2, levelDepth) ,node.y + 40,levelDepth,animal,question);
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
  remove(data) {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
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
      let traverseInOrder =  (node,nodeParent = node) => { 



        node.left && traverseInOrder(node.left,node);
        result.push(node.data);

        fill(255);
        noStroke();
        // console.log(node,"data");
        // console.log(this.root,"root");
        stroke(255)
        line(nodeParent.x,nodeParent.y,node.x,node.y)
     


        // text(node.data,node.x,node.y);
        if (node.animal) {
          text(node.animal, node.x + 15, node.y);
        } else if(node.question){
          text(node.question, node.x + 15, node.y);
        }

        node.right && traverseInOrder(node.right,node);


       
      }
      traverseInOrder(this.root);
      return result;
    };
  }
  preOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    };
  }
  postOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      };
      traversePostOrder(this.root);
      return result;
    }
  }
  
  levelOrder() {
      let result = [];
      let Q = []; 
      if (this.root != null) {
          Q.push(this.root);
          while(Q.length > 0) {
              let node = Q.shift();
              result.push(node.data);
              if (node.left != null) {
                  Q.push(node.left);
              };
              if (node.right != null) {
                  Q.push(node.right);
              };
          };
          return result;
      } else {
          return null;
      };
  };
}



// const bst = new BST();

// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// console.log('inOrder: ' + bst.inOrder());
// console.log('preOrder: ' + bst.preOrder());
// console.log('postOrder: ' + bst.postOrder());

// console.log('levelOrder: ' + bst.levelOrder());