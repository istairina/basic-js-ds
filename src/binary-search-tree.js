const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addData(this.rootTree, data);
    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addData(node.left, data);
      } else{
        node.right = addData(node.right, data);
      }
      
      return node;

    }
  }

  has(data) {
    return hasData(this.rootTree, data);
    
    function  hasData(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      } 

      if (data < node.data) {
        return hasData(node.left, data);
      } else {
        return hasData(node.right, data);
      }
    }

  }

  find(data) {
    return findData(this.rootTree, data);

    function findData(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }

  }

  remove(data) {
    this.rootTree = removeData(this.rootTree, data);
    function removeData(node, data) {
      if (!node) {
        return null;
      }

      console.log(data + " " + node.data + node);
      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        //console.log("node right " + node.right + "minFromRight: " + minFromRight);
        while (minFromRight.left) {
          //console.log(minFromRight.left);
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        //console.log("node data " + node.data);

        node.right = removeData(node.right, minFromRight.data);

        return node;
      }

    }
  }

  min() {
    if (this.rootTree == null) {
      return;
    }

    let node = this.rootTree;

    while (node.left) {
      node = node.left;
    }

    return node.data;

  }

  max() {
    if (this.rootTree == null) {
      return;
    }

    let node = this.rootTree;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

//const tree = new BinarySearchTree();

/*tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);

console.log(tree.root().data); // 1;

console.log(tree.min()); // 1

console.log(tree.max()); // 5

tree.remove(5);

console.log(tree.has(4));// false

console.log(tree.max());   // 4*/


/*tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(2);
tree.remove(9);
console.log(tree.has(14));  //false
console.log(tree.has(8));  //false
console.log(tree.has(9));    //false
console.log(tree.has(2));   //true
console.log(tree.has(6));
console.log(tree.has(128));
console.log(tree.has(31));
console.log(tree.has(54));
console.log(tree.has(1));*/
