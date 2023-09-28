
class Node {
    constructor(value = null, next = null) {
      this.value = value;
      this.next = next;
    }
  }

function get_node_by_index(node, index) {
    while(index) {
        node = node.next;
        index -= 1;
    }
    return node;
}


function solution(head, idx) {
  if (idx === 0) {
    head = head.next
    return head;
  }
  const previous_node = get_node_by_index(head, idx - 1);
  const next_node = get_node_by_index(head, idx + 1);
  if (next_node != null) {
    previous_node.next = next_node;
  } else {
    previous_node.next = null;
  }
  
  return head;
}

function test() {
  var node3 = new Node("node3");
  var node2 = new Node("node2", node3);
  var node1 = new Node("node1", node2);
  var node0 = new Node("node0", node1);
  console.log(solution(node0, 1));
  /*
  Output is:
  node0
  node1
  node2
  node3
  */
}

test();