var BinarySearchTree = function(key, value, parent) {
    this.key = key || null;
    this.value = value || null;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
};


BinarySearchTree.prototype.insert = function(key, value) {
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }
    else if (key < this.key) {
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        else {
            this.left.insert(key, value);
        }
    }
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
};


BinarySearchTree.prototype.get = function(key) {
    if (this.key == key) {
        return this.value;
    }
    else if (key < this.key && this.left) {
        return this.left.get(key);
    }
    else if (key > this.key && this.right) {
        return this.right.get(key);
    }
    else {
        throw new Error('Key Error');
    }
};


BinarySearchTree.prototype.remove = function(key) {
    if (this.key == key) {
        if (this.left && this.right) {
            var successor = this.right._findMin();
            this.key = successor.key;
            this.value = successor.value;
            successor.remove(successor.key);
        }
        else if (this.left) {
            this._replaceWith(this.left);
        }
        else if (this.right) {
            this._replaceWith(this.right);
        }
        else {
            this._replaceWith(null);
        }
    }
    else if (key < this.key && this.left) {
        this.left.remove(key);
    }
    else if (key > this.key && this.right) {
        this.right.remove(key);
    }
    else {
        throw new Error('Key Error');
    }
};


BinarySearchTree.prototype._replaceWith = function(node) {
    if (this.parent) {
        if (this == this.parent.left) {
            this.parent.left = node;
        }
        else if (this == this.parent.right) {
            this.parent.right = node;
        }

        if (node) {
            node.parent = this.parent;
        }
    }
    else {
        if (node) {
            this.key = node.key;
            this.value = node.value;
            this.left = node.left;
            this.right = node.right;
        }
        else {
            this.key = null;
            this.value = null;
            this.left = null;
            this.right = null;
        }
    }
};

BinarySearchTree.prototype._findMin = function() {
    if (!this.left) {
        return this;
    }
    return this.left._findMin();
};

BinarySearchTree.prototype.dfsInOrder = function(values) {
    values = values || [];
    if (this.left) {
        values = this.left.dfsInOrder(values);
    }
    values.push(this.value);

    if (this.right) {
        values = this.right.dfsInOrder(values);
    }
    return values;
};

BinarySearchTree.prototype.dfsPreOrder = function(values) {
    values = values || [];
    
    values.push(this.value);

    if (this.left) {
        values = this.left.dfsPreOrder(values);
    }

    if (this.right) {
        values = this.right.dfsPreOrder(values);
    }
    return values;
};

BinarySearchTree.prototype.dfsPostOrder = function(values) {
    values = values || [];

    if (this.left) {
        values = this.left.dfsPostOrder(values);
    }

    if (this.right) {
        values = this.right.dfsPostOrder(values);
    }
    values.push(this.value);
    return values;
};


var myBST = new BinarySearchTree();

myBST.insert(5,'five');
myBST.insert(2,'two');
myBST.insert(1,'one');
myBST.insert(3,'three');
myBST.insert(7,'seven');
myBST.insert(6,'six');
myBST.insert(8,'eight');



console.log('dfsInOrder: '+myBST.dfsInOrder());
console.log('dfsPreOrder: '+myBST.dfsPreOrder());
console.log('dfsPostOrder: '+myBST.dfsPostOrder());
