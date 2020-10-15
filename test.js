/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const one = new TreeNode(1)
const two = new TreeNode(2)
const eight = new TreeNode(8, one, two)
const thirty = new TreeNode(30)
const forty = new TreeNode(40)
const twelve = new TreeNode(12, thirty, forty)

const eleven = new TreeNode(11)
const twentyFive = new TreeNode(25)
const fifteen = new TreeNode(15, eleven, twentyFive)
const twentyFour = new TreeNode(24)
const twentyThree = new TreeNode(23)
const seven = new TreeNode(7, twentyFour, twentyThree)

const nine = new TreeNode(9, eight, twelve)
const twenty = new TreeNode(20, fifteen, seven)

const root = new TreeNode(3, nine, twenty)

const preorderTraversal = node => {
    let result = [];
    const recursive = node => {
        if(node !== null){
            result.push(node.val)
            recursive(node.left)
            recursive(node.right)
        }
    }

    recursive(node)
    return result;
}

console.log(preorderTraversal(root))

const inorderTraversal = node => {
    let result = [];
    const recursive = node => {
        if(node !== null){
            recursive(node.left)
            result.push(node.val)
            recursive(node.right)
        }
    }

    recursive(node)
    return result;
}

console.log(inorderTraversal(root))

const postorderTraversal = node => {
    let result = [];
    const recursive = node => {
        if(node !== null){
            recursive(node.left)
            recursive(node.right)
            result.push(node.val)
        }
    }

    recursive(node)
    return result;
}

console.log(postorderTraversal(root))

