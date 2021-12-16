//https://leetcode.com/problems/reverse-linked-list-ii/

/*
NOTE: The beginning portion builds our test case linked list. Scroll down to the section titled Our Solution for the code solution!
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// ---- Generate our linked list ----

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

// --------- Our solution -----------

//1-2-3-4-5-6-7-null
//1-2-5-4-3-6-7-null
//m=3,n=5

var reverseBetween = function (head, left, right) {
  let currentNode = head;
  let start = head;
  let currentPos = 1;

  while (currentPos < left) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let tail = currentNode;
  let prev = null;
  while (currentPos >= left && currentPos <= right) {
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
    currentPos++;
  }

  start.next = prev;
  tail.next = currentNode;

  if (left > 1) {
    return head;
  } else {
    return prev;
  }
};

printList(linkedList);
console.log("after reverse");
printList(reverseBetween(linkedList, 2, 4));
//1-2-3-4-5