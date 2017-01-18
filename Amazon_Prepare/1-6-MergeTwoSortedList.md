## Merge Two Sorted List (increase order)
         
1. 首先，进行边界条件判断，如果任一一个表是空表，就返回另外一个表。        
2. 然后，对于新表选取第一个node，选择两个表表头最小的那个作为新表表头，指针后挪。        
3. 然后同时遍历两个表，进行拼接。          
4. 因为表已经是sorted了，最后把没有遍历完的表接在新表后面。           
5. 由于新表也会指针挪动，这里同时需要**fakehead**帮助记录原始表头。**(That's why "return head.next")**                       
                                      
                                                       
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode head = new ListNode(0);
        ListNode cur = head;
        while(l1!=null && l2!=null){
            if(l1.val<=l2.val){
                cur.next = l1;
                l1 = l1.next;
            }else{
                 cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }
        cur.next = (l1!=null) ? l1 : l2;
        return head.next;
    }
}
```         
      

