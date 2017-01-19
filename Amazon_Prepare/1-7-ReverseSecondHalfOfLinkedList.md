## Reverse Second half of LinkedList
         
第三道Amazon面试coding题练习。           
这道题是说，有一个linkedlist  {1,2,3,4,5,6,7,8}转换为{1,2,3,4,8,7,6,5}，初看不难，其实也不难。LinkedList 非常好理解，就是多一个指针。          

###翻转一串LinkedList的示例网上大把，随便看看就好。                
####翻转一串LinkedList: Java Solution        
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
    public ListNode reverseList(ListNode head) {
        if(head==null || head.next==null)
        return head;
        ListNode revL = head;//reverse List
        ListNode forL = head.next;//forward List
        revL.next = null;
        while(forL!=null){
            ListNode temp = forL.next;
            forL.next = revL;
            revL = forL;
            forL = temp;
        }
        return revL;
    }
}

```                 
                                      
###Reverse Second half of LinkedList Solution                                                       
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
      

