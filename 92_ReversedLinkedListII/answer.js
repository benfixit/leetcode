/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function reversedLinkedListII(head, m, n){
    const dummy = new ListNode(-1, head)
    let prev = dummy
    let stop = m - 1;
    while(stop > 0){
        prev = prev.next
        stop--
    }
    let current = prev.next;
    const gap = n - m;
    for(let i = 0; i < gap; i++){
        let temp = current.next;
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }
    
    return dummy.next;
}

/**
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
 */

const five = new ListNode(5, null)
const four = new ListNode(4, five)
const three = new ListNode(3, four)
const two = new ListNode(2, three)

const head = new ListNode(1, two)
// console.log(head)
console.log(reversedLinkedListII(head, 2, 4))