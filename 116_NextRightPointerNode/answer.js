/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function nextRightPointerNode(root){
    if(root === null){
        return result
    }
    const queue = [];
    queue.push(root);
    while(queue.length){
        let queueLength = queue.length
        for(let i = 0; i < queueLength; i++){
            let current = queue.shift();
            if(i < queueLength - 1){
                current.next = queue[0]
            } else{
                current.next = null
            }
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }
    return root
}

const four = new TreeNode(4)
const five = new TreeNode(5)
const six = new TreeNode(6)
const seven = new TreeNode(7)

const two = new TreeNode(2, four, five)
const three = new TreeNode(3, six, seven)

let root = new TreeNode(1, two, three)

console.log(nextRightPointerNode(root))