/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function sortedArrayToBST(nums){
    function recursive(start, end, nums){
        if(start > end){
            return null;
        }
        const rootIndex = Math.floor(start + (end - start) / 2)
        let rootVal = nums[rootIndex]
        const root = new TreeNode(rootVal);
        root.left = recursive(start, rootIndex - 1, nums);
        root.right = recursive(rootIndex + 1, end, nums);
        return root;
    }

    return recursive(0, nums.length - 1, nums)
}

const nums = [-10,-3,0,5,9]

console.log(sortedArrayToBST(nums))