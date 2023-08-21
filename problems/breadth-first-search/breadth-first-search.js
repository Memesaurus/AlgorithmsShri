// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_ширину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function bfs(tree) {
    const queue = [tree];
    const traversal = [];

    while(queue.length) {
        const node = queue.shift();

        if (!node) {
            continue;
        }

        traversal.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
    }

    return traversal;
}
