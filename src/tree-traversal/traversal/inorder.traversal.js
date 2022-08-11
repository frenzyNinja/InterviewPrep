import {Traversal} from '../common/common';

export class InorderTraversal extends Traversal {
    traverse(root, callbackfn) {
        if (root) {
            this.traverse(root.left, callbackfn);
            callbackfn(root);
            this.traverse(root.right, callbackfn)
        }
    }
}

export class InorderTraversalNonRecursive extends Traversal {
    traverse(root, callbackfn) {
        var stack = [];
        var curr = root;

		while (curr || stack.length > 0){
			while (curr) {
				stack.push(curr);
				curr = curr.left;
			}
			curr = stack.pop();
			callbackfn(curr);
			curr = curr.right;
		}
    }
}
