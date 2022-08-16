// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

// 方法一:loop循环依次对比
// var mergeTwoLists = function (l1, l2) {
//   var head = new ListNode();
//   var h = head;
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       head.next = l1;
//       l1 = l1.next;
//     } else {
//       head.next = l2;
//       l2 = l2.next;
//     }
//     head = head.next;
//   }
//   if (l1) head.next = l1;
//   if (l2) head.next = l2;
//   return h.next;
// };

// 方法二:递归
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
