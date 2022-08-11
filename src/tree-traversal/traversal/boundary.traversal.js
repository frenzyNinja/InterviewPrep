import { Traversal } from "../common/common";
import { InorderTraversal } from "./inorder.traversal";

export class BoundaryTraversal extends Traversal {
    
    traverse (root, callbackfn) {
        if (root) {
            if (!this._isLeaf(root)) {
                callbackfn(root);
            }

            this._traverseLeftBoundary(root).forEach(callbackfn);
            this._traverseLeafBoundary(root).forEach(callbackfn);
            this._traverseRightBoundary(root).forEach(callbackfn);
        }
    }

    _traverseLeftBoundary(node) {
        var leftBoundaryElements = [];
        var currentNode = node.left;

        while (currentNode) {
            if (!this._isLeaf(currentNode)) {
                leftBoundaryElements.push(currentNode);
            }

            if (currentNode.left) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }

        return leftBoundaryElements;
    }

    _traverseRightBoundary(node) {
        var rightBoundaryElements = [];
        var currentNode = node.right;

        while (currentNode) {
            if (!this._isLeaf(currentNode)) {
                rightBoundaryElements.push(currentNode);
            }
            
            if (currentNode.right) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }

        return rightBoundaryElements.reverse();
    }

    _traverseLeafBoundary(node) {
        var leafNodes = [];
        new InorderTraversal().traverse(node, _traversedNode => {
            if (this._isLeaf(_traversedNode)) {
                leafNodes.push(_traversedNode);
            }
        });

        return leafNodes;
    }

    _isLeaf(node) {
        return node.left == null && node.right == null; 
    }
}