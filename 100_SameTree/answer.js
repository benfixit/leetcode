/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function sameTree(p, q){
    if(p === null || q === null){
        if(p === null && q === null){
            return true
        }else{
            return false
        }
    }

    if(p.val !== q.val){
        return false
    }

    return sameTree(p.left, q.left) && sameTree(p.right, q.right)
}

// First Example
let pLeft = new TreeNode(2)
let pRight = new TreeNode(3)
let pRoot = new TreeNode(1, pLeft, pRight)
let qRootSame = new TreeNode(1, pLeft, pRight)

console.log(sameTree(pRoot, qRootSame))

// Second Example
let pLeft2 = new TreeNode(2)
let pRight2 = new TreeNode(2)
let pRoot2 = new TreeNode(1, pLeft2, null)
let qRootDiff = new TreeNode(1, null, pRight2)

console.log(sameTree(pRoot2, qRootDiff))

// Third Example
let pLeft3 = new TreeNode(2)
let pRight3 = new TreeNode(1)
let pRoot3 = new TreeNode(1, pLeft3, pRight3)
let qRootDiff2 = new TreeNode(1, pRight3, pLeft3)

console.log(sameTree(pRoot3, qRootDiff2))