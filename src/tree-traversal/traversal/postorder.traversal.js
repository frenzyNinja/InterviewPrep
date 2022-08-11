import {Traversal} from '../common/common';

export class PostorderTraversal extends Traversal {
    traverse(root, callbackfn) {
        if (root) {
            this.traverse(root.left, callbackfn);
            this.traverse(root.right, callbackfn)
            callbackfn(root);
        }
    }
}

export class PostorderTraversalNonRecursive extends Traversal {
    
    traverse(root, callbackfn) {
        var stack1 = [], stack2 = [];
        
        stack1.push(root);

        while (stack1.length > 0) {
            var node = stack1.pop();
            stack2.push(node);

            if (node.left) {
                stack1.push(node.left);
            }

            if (node.right) {
                stack1.push(node.right);
            }
        }

        while (stack2.length > 0) {
            callbackfn(stack2.pop());
        }
    }
}