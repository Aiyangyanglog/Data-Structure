/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 时间复杂度O(n) 空间复杂度O(1)
var hasCycle = function (head) {
  let p1 = head;
  let p2 = head;
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};
