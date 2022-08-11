import { PreorderTraversalNonRecursive } from "./traversal/preorder.traversal";
import { PostorderTraversalNonRecursive } from "./traversal/postorder.traversal";
import { InorderTraversalNonRecursive } from "./traversal/inorder.traversal";
import { ZigZagTraversal } from "./traversal/zig-zag.traversal";
import { BoundaryTraversal } from "./traversal/boundary.traversal";

import { Node } from "./common/common";
import { displayTitle, printNode } from "./common/console.utilities";

function buildSampleTree() {
    var nodes = Array.from({length: 10}).map((_, i) => new Node(i + 1));
    nodes[0].left = nodes[1];
    nodes[0].right = nodes[2];
    
    nodes[1].left = nodes[3];
    nodes[1].right = nodes[4];
    
    nodes[2].left = nodes[5];
    nodes[2].right = nodes[6];
    
    nodes[3].left = nodes[8];
    nodes[4].right = nodes[9];
    
    nodes[5].left = nodes[7];

    return nodes[0];
}

// driver method
var _rootNode = buildSampleTree();

var inorderTraversal = new InorderTraversalNonRecursive();
displayTitle('In-order Traversal');
inorderTraversal.traverse(_rootNode, printNode);

var preorderTraversal = new PreorderTraversalNonRecursive();
displayTitle('Pre-order Traversal');
preorderTraversal.traverse(_rootNode, printNode);

var postorderTraversal = new PostorderTraversalNonRecursive();
displayTitle('Post-order Traversal');
postorderTraversal.traverse(_rootNode, printNode);

var zigZagTraversal = new ZigZagTraversal();
displayTitle('Zig-Zag Traversal');
zigZagTraversal.traverse(_rootNode, printNode);

var boundaryTraversal = new BoundaryTraversal();
displayTitle('Boundary Traversal');
boundaryTraversal.traverse(_rootNode, printNode);
