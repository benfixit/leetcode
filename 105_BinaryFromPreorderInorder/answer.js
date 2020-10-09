/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function treeFromPreorderInorder(preorder, inorder){
    function recursive(preStart, inStart, inEnd, preorder, inorder){
        if(inStart > inEnd){
            return null;
        }

        let rootValue = preorder[preStart]
        let root = new TreeNode(rootValue);
        let rootInorderIndex = inorder.indexOf(root.val);

        root.left = recursive(preStart + 1, inStart, rootInorderIndex - 1, preorder, inorder);
        root.right = recursive(preStart + rootInorderIndex - inStart + 1, rootInorderIndex + 1, inEnd, preorder, inorder)
        return root;
    }

    return recursive(0, 0, preorder.length - 1, preorder, inorder)
}

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];

// const preorder = [3,  9,  8,  1,  2, 12, 30, 40, 20, 15, 11, 25, 7, 24, 23];
// const inorder = [1, 8,  2,  9, 30, 12, 40, 3, 11, 15, 25, 20, 24, 7, 23];

console.log(treeFromPreorderInorder(preorder, inorder))