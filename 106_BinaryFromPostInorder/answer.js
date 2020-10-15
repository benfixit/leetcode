/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function treeFromPostInorder(inorder, postorder){
    function recursive(postStart, postEnd, inStart, inEnd, inorder, postorder){
        if(inStart > inEnd || postStart > postEnd){
            return null;
        }
        let rootValue = postorder[postEnd]
        let rootInorderIndex = inorder.indexOf(rootValue);
        let root = new TreeNode(rootValue)
        const rightCount = rootInorderIndex - (inStart + 1)
        
        root.left = recursive(postStart, postStart + rightCount, inStart, rootInorderIndex - 1, inorder, postorder);
        root.right = recursive(postStart + rootInorderIndex - inStart, postEnd - 1, rootInorderIndex + 1, inEnd, inorder, postorder);
        return root;
    }

    return recursive(0, postorder.length - 1, 0, inorder.length - 1, inorder, postorder)
}

const inorder = [9,3,15,20,7]
const postorder = [9,15,7,20,3]

// const postorder = [1,  2,  8, 30, 40, 12, 9, 11, 25, 15, 24, 23, 7, 20,  3]

// const inorder = [1, 8,  2,  9, 30, 12, 40, 3, 11, 15, 25, 20, 24, 7, 23];

console.log(treeFromPostInorder(inorder, postorder))