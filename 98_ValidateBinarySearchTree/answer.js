/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function validateBinarySearch(root){
    function isValidBST(node, min, max){
        if(node === null){
            return true;
        }

        if(node.val < min || node.val > max){
            return false
        }

        return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val + 1, max)
    }

    return isValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

// let left = new TreeNode(1)
// let right = new TreeNode(3)
// let root = new TreeNode(2, left, right)

// console.log(validateBinarySearch(root))

let rootRightLeft = new TreeNode(6)
let rootRightRight = new TreeNode(20)
let rootLeft = new TreeNode(5)
let rootRight = new TreeNode(15, rootRightLeft, rootRightRight)
let root2 = new TreeNode(10, rootLeft, rootRight)
console.log(validateBinarySearch(root2))

// let rootRightLeft = new TreeNode(3)
// let rootRightRight = new TreeNode(6)
// let rootLeft = new TreeNode(1)
// let rootRight = new TreeNode(4, rootRightLeft, rootRightRight)
// let root2 = new TreeNode(5, rootLeft, rootRight)
// console.log(validateBinarySearch(root2))

// let left3 = new TreeNode(1)
// let root3 = new TreeNode(1, left3)

// console.log(validateBinarySearch(root3))