##Linked List Cycle     
     
- 检查是否有环         
- 以及环的起点在哪里                  
             
###if has cycle?         
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
    public boolean hasCycle(ListNode head) {
      ListNode slow = head;
      ListNode fast = head;
      while(fast!=null&& fast.next!=null&& fast.next.next!=null){
          fast = fast.next.next;
          slow = slow.next;
          if(fast.val == slow.val)
          return true;
      }
      return false;
    }
```          
###Detect Cycle Start points
####Basic Thinking
```
首先我们知道，fast每次比slow多走一步，所以重合的时候，fast移动的距离是slot的两倍，我们假设n1到n2距离为a，n2到n5距离为b，n5到n2距离为c，              
fast走动距离为a + b + c + b，而slow为a + b，有方程a + b + c + b = 2 x (a + b)，可以知道a = c，所以我们只需要在重合之后，一个指针从n1，                
而另一个指针从n5，都每次走一步，那么就可以在n2重合了。
```

```
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while(fast!=null&&fast.next!=null&&fast.next.next!=null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast==slow){//////modify this part. Important!!!!!!
                slow=head;
                while(fast!=slow){
                    fast=fast.next;
                    slow = slow.next;
                }
                return fast;
            }
        }
        return null;
    }
```
