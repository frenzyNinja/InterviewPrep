import { Traversal } from "../common/common";

export class ZigZagTraversal extends Traversal {
    traverse (root, callbackfn) {
        var leftToRight = true;
        this._traverse(root, callbackfn, leftToRight);
    }

    _traverse(root, callbackfn, leftToRight) {
        var queue1 = [root], queue2 = [];
        
        while (!this._isEmpty(queue1)) {
            var node = this._dequeue(queue1);
            callbackfn(node);

            if (leftToRight) {
                if (node.left) {
                    this._enqueue(queue2, node.left);
                }
                
                if (node.right) {
                    this._enqueue(queue2, node.right);
                }
            }
            else {
                if (node.right) {
                    this._enqueue(queue2, node.right);
                }

                if (node.left) {
                    this._enqueue(queue2, node.left);
                }
            }

            if (this._isEmpty(queue1)) {
                Object.assign(queue1, queue2);
                queue2 = [];
                leftToRight = !leftToRight;
            }
        }
    }

    _isEmpty(queue) {
        return queue.length <= 0;
    }

    _enqueue(queue, data) {
        queue.unshift(data);
    }

    _dequeue(queue) {
        return queue.shift();
    }
}