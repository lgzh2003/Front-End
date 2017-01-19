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
//reverse second half of linked list
public class ReverseSecondHalfLinkedList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		App5 app = new App5();
		ListNode head = new ListNode(1);
		ListNode l1 = new ListNode(2);
		ListNode l2 = new ListNode(3);
		ListNode l3 = new ListNode(4);
		ListNode l4 = new ListNode(5);
		ListNode l5 = new ListNode(6);
		ListNode l6 = new ListNode(7);
		head.next = l1;
		l1.next = l2;
		l2.next = l3;
		l3.next = l4;
		l4.next = l5;
		l5.next = l6;
		l6.next = null;
		/*ListNode newList = app.reverse(head);
		while(newList!=null){
		System.out.println(newList.val);
		newList = newList.next;
		}*/
		
		ListNode newListSecondHalf = app.reverseSecondHalf(head);
		while(newListSecondHalf!=null){
		System.out.println(newListSecondHalf.val);
		newListSecondHalf = newListSecondHalf.next;
		}
	}

}
class App5{
	
	ListNode reverse(ListNode head){
		if(head==null)
			return null;
		if(head.next==null){
			return head;
		}
		ListNode revL = head;// reverse List
		ListNode forL = head.next;//forward List
		revL.next = null;
		while(revL!=null && forL!=null){
			ListNode temp = forL.next;
			forL.next = revL;
			revL = forL;
			forL = temp;
		}
		
		return revL;
	}
	
	int getListSize(ListNode head){
		int count = 0;
		if(head==null||head.next==null){
			return 0;
		}
		while(head!=null){
			count++;
			head = head.next;
		}	
		return count;
	}
	
	ListNode reverseSecondHalf(ListNode head){
		int size = getListSize(head);
		System.out.println("size:"+size);
		if(size<=1){
			return head;
		}
		if(size==2){
			return reverse(head);
		}
		ListNode result = head;
		
		for(int i = 0; i < size/2-1; i++ ){
			head = head.next;
		}
		ListNode secondHalf = reverse(head.next);
		head.next = secondHalf;		
		return result;
	}
	
}
class ListNode {
	int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

```         
      

