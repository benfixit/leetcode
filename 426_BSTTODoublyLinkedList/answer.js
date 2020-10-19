/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function BSTToDoublyLinkedList(node){
    if(node === null){
        return null;
    }

    let curr = {}, stack = [], prev = null, temp = null

    stack.push(node);
    let currentNode = node;

    while(stack.length){
        if(currentNode.left){
            stack.push(currentNode.left);
            currentNode = currentNode.left
        } else {
            temp = stack.pop()

            if(!curr.next){
                curr.next = temp
            }

            if(prev){
                prev.next = temp
                temp.prev = prev
                prev.right = null
                prev.left = null
            }

            prev = temp

            if(temp.right){
                stack.push(temp.right)
                currentNode = temp.right
            }
        }
    }

    /**
     * Trick to make it circular
     *  prev.next = curr.next
     *  curr.next.prev = prev
     */

    return curr.next
    
}

let rootRightLeft = new TreeNode(11)
let rootRightRight = new TreeNode(13)
let rootLeftLeft = new TreeNode(7)
let rootLeftRight = new TreeNode(9)
let rootLeft = new TreeNode(8, rootLeftLeft, rootLeftRight)
let rootRight = new TreeNode(12, rootRightLeft, rootRightRight)
let root = new TreeNode(10, rootLeft, rootRight)

let test = BSTToDoublyLinkedList(root)

while(test != null){
    console.log('Value === ', test.val)
    test = test.next
}
