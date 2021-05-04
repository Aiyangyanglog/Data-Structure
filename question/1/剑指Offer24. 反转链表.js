// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 利用双指针(不同起点一前一后)，一个从head开始，一个从null开始遍历(时间复杂度O(n),空间复杂度O(1))
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
  }
  return p2;
};
