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

//1=2=3=4=5=null
//5=4=3=2=1=null
var reverseList = function (head) {
  let currentNode = head;
  let prev = null;
  while (currentNode) {
    //2
    let next = currentNode.next; //3
    currentNode.next = prev; //2= 1 = null
    prev = currentNode; //1=null
    currentNode = next; //2
  }
  return prev;
};

printList(linkedList);
console.log("after reverse");
printList(reverseList(linkedList));
