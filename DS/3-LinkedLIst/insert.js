class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//insert Node in beginning
function insertAtBegin(head, data) {
  let temp = new Node(data);
  temp.next = head;
  return temp;
}

//print linked list
function printList(node) {
  let current = node;
  while (current !== null) {
    process.stdout.write(`${current.data} -> `);
    current = current.next;
  }
  process.stdout.write("null\n");
}

//reverse a linked list
//The idea is to use three pointers curr, prev, and next to keep track of nodes to update reverse links.
function reverseList() {}

function main() {
  let head = null;
  head = insertAtBegin(head, 1);
  head = insertAtBegin(head, 2);
  head = insertAtBegin(head, 3);
  head = insertAtBegin(head, 4);
  head = insertAtBegin(head, 5);
  head = insertAtBegin(head, 6);

  printList(head);
}
main();
