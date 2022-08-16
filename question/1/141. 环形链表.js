// 给定一个链表，判断链表中是否有环。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 如果链表中存在环，则返回 true 。 否则，返回 false 。

// 方法一:利用双指针(同起点一快一慢)，如果有机会相遇必定是环形，否则不是环形
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

// 方法二:JSON.stringify会自动检测对象是否为环，如果成功执行，那说明传入的对象一定不是环
var hasCycle = function (head) {
  try {
    JSON.stringify(head);
    return false;
  } catch {
    return true;
  }
};
