var BinarySearchTree = function(key, value, parent) {
  var publicKey = key || null,
      publicValue = value || null,
      publicParent = parent || null,
      publicLeft = null,
      publicRight = null;

  var insert = function(key, value) {
    if (publicKey === null) {
      publicKey = key;
      publicValue = value;
    }
    else if(key < publicKey) {
      if (publicLeft === null) {
        publicLeft = new BinarySearchTree(key, value, this);
      }
      else {
        publicLeft.insert(key, value);
      }
    }
    else {
      if (publicRight === null) {
        publicRight = new BinarySearchTree(key, value, this);
      }
      else {
        publicRight.insert(key, value);
      }
    }
  }


  var get = function(key) {
    if (publicKey === key) {
      return publicValue;
    }
    else if (key < publicKey && publicLeft) {
      return publicLeft.get(key);
    }
    else if (key > publicKey && publicRight) {
      return publicRight.get(key);
    }
    else {
      throw new Error('Key Error');
    }
  };


  var remove = function(key) {
    if(publicKey === key) {
      if(publicLeft && publicRight) {
        var successor = publicRight.privateFindMin();
        publicKey = successor.key;
        publicValue = successor.value;
        successor.remove(successor.key);
      }
      else if (publicLeft) {
        privateReplaceWith(publicLeft);
      }
      else if (publicRight) {
        privateReplaceWith(publicRight);
      }
      else {
        privateReplaceWith(null);
      }
    }
    else if (key < publicKey && publicLeft) {
      publicLeft.remove(key);
    }
    else if (key > publicKey && publicRight) {
      publicRight.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }


  var privateReplaceWith = function(node) {
    if(publicParent) {
      if (this === publicParent.publicLeft) {
        publicParent.publicLeft = node;
      }
      else if (this === publicParent.publicRight) {
        publicParent.publicRight = node;
      }

      if (node) {
        node.parent = publicParent;
      }
    }
    else {
      if (node) {
        publicKey = node.key;
        publicValue = node.value;
        publicLeft = node.left;
        publicRight = node.right;
      }
      else {
        publicKey = null;
        publicValue = null;
        publicLeft = null;
        publicRight = null;
      }
    }
  };

  var privateFindMin = function() {
    if (!publicLeft) {
      return this;
    }
    return publicLeft.privateFindMin();
  };

  return{
    get: get,
    insert: insert,
    remove: remove,
    findMin: privateFindMin
  }
};


var binarySearchTree = BinarySearchTree();

binarySearchTree.insert(5, "Surbhi");
binarySearchTree.insert(10, "Ten");
binarySearchTree.insert(3, "Three");
console.log(binarySearchTree.get(5));
