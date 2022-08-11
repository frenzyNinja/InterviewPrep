export class Node {
    constructor (data, left = null, right = null) {
        this._data = data;
        this._left = left;
        this._right = right;
    }

    get right() {
        return this._right;
    }

    set right(node) {
        this._right = node;        
    }

    get left() {
        return this._left;
    }

    set left(node) {
        this._left = node;        
    }

    get data() {
        return this._data;
    }
}

export class Traversal {

    traverse(root, callbackfn) { 
        throw new Error('Not Implemented');
    }

}
