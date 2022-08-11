import {Traversal} from '../common/common';

export class PreorderTraversal extends Traversal {
    traverse(root, callbackfn) {
        if (root) {
            callbackfn(root);
            this.traverse(root.left, callbackfn);
            this.traverse(root.right, callbackfn)
        }
    }
}

export class PreorderTraversalNonRecursive extends Traversal {
    traverse(root, callbackfn) {
        var stack = [root];
        var curr = root;

		while (stack.length > 0){
			curr = stack.pop();
            
            callbackfn(curr);

            if (curr.right) {
                stack.push(curr.right);
            }
            if (curr.left) {
                stack.push(curr.left);
            }
		}
    }
}
