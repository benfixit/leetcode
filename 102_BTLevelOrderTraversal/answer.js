/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function btLevelOrderTraversal(node){
    if(node === null){
        return [];
    }

    let queue = [], result = [];
    queue.push(node)

    while(queue.length){
        const queueSize = queue.length;
        const current = [];
        for(let i = 0; i < queueSize; i++){
            let currentNode = queue.shift()
            current.push(currentNode.val);

            if(currentNode.left){
                queue.push(currentNode.left)
            }

            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        result.push(current)
    }

    return result;
}

let rootRightLeft = new TreeNode(11)
let rootRightRight = new TreeNode(13)
let rootLeftLeft = new TreeNode(7)
let rootLeftRight = new TreeNode(9)
let rootLeft = new TreeNode(8, rootLeftLeft, rootLeftRight)
let rootRight = new TreeNode(12, rootRightLeft, rootRightRight)
let root = new TreeNode(10, rootLeft, rootRight)

console.log(btLevelOrderTraversal(root))