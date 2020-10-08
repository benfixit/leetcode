/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function symmetricTree(root){
    if(root === null){
        return true
    }
    function recursive(leftTree, rightTree){
        if(leftTree === null || rightTree === null){
            return (leftTree === null && rightTree === null)
        }

        if(leftTree.val !== rightTree.val){
            return false
        }
        return recursive(leftTree.left, rightTree.right) && recursive(leftTree.right, rightTree.left)
    }

    return recursive(root.left, root.right)
}

let rootLeftLeft = new TreeNode(3)
let rootLeftRight = new TreeNode(4)
let rootRightLeft = new TreeNode(4)
let rootRightRight = new TreeNode(3)
let rootLeft = new TreeNode(2, rootLeftLeft, rootLeftRight)
let rootRight = new TreeNode(2, rootRightLeft, rootRightRight)
let root = new TreeNode(1, rootLeft, rootRight)
console.log(symmetricTree(root))

let rootLeft2 = new TreeNode(2, null, rootLeftRight)
let rootRight2 = new TreeNode(2, null, rootRightRight)
let root2 = new TreeNode(1, rootLeft2, rootRight2)
console.log(symmetricTree(root2))