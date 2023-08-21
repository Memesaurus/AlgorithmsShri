// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_глубину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function dfs(tree) {
    const traversal = [];

    const traverse = (node) => {
        if (!node) {
            return;
        }

        traversal.push(node.val);
        traverse(node.left);
        traverse(node.right)
    }

    traverse(tree);
    return traversal;
}

// if (!tree) {
//     return;
// }

// return [tree.val, ...dfs(tree.left), ...dfs(tree.right)];
