## IsSubtree(Binary Tree)
        
Check if a binary tree is subtree of another binary tree                 
  
###Basic Idea          
- boolean isSameTree(TreeNode T1, TreeNode T2) // Judge if T2 is the same tree with T1     
- boolean isSubtree(TreeNode T1, TreeNode T2) // Using isSameTree(t1,t1) recursively in this function to judge is T2 is the Subtree of T1          
       
####isSameTree(TreeNode T1, TreeNode T2)
```
boolean isSametree(TreeNode root1, TreeNode root2){
		if(root1==null&&root2==null)
			return true;
		if(root1==null||root2==null)
			return false;
		return (root1.data==root2.data) &&(isSametree(root1.left,root2.left))&&(isSametree(root1.right,root2.right));
	}
```           
       
####isSubtree(TreeNode T1, TreeNode T2)      
```
// if root2 is Subtree of root1
	boolean isSubtree(TreeNode root1, TreeNode root2){
		if(root2==null)
			return true;
		if(root1==null)
			return false;
		if(isSametree(root1, root2))
			return true;
		return isSubtree(root1.left,root2)||isSubtree(root1.right,root2);
	}
```     
               
###Whole Code     
```

public class isSubtree {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		App6 tree = new App6();
		
		//root1
		 // TREE 1
        /* Construct the following tree
              26
             /   \
            10     3
           /    \     \
          4      6      3
           \
            30  */
		 tree.root1 = new TreeNode(26);
	        tree.root1.right = new TreeNode(3);
	        tree.root1.right.right = new TreeNode(3);
	        tree.root1.left = new TreeNode(10);
	        tree.root1.left.left = new TreeNode(4);
	        tree.root1.left.left.right = new TreeNode(30);
	        tree.root1.left.right = new TreeNode(6);
	   //root2
	     // TREE 2
	        /* Construct the following tree
	           10
	         /    \
	         4      6
	          \
	          30  */
	           
	        tree.root2 = new TreeNode(10);
	        tree.root2.right = new TreeNode(6);
	        tree.root2.left = new TreeNode(4);
	        tree.root2.left.right = new TreeNode(30);
	        
	        System.out.println("root2 is root1's Subtree?"+tree.isSubtree(tree.root1, tree.root2));
	        System.out.println("root1 is root2's Subtree?"+tree.isSubtree(tree.root2, tree.root1));
	}

}

class TreeNode{
	 int data;
	    TreeNode left, right;
	  
	    TreeNode(int item) 
	    {
	        data = item;
	        left = right = null;
	    }
	
}

class App6{
	TreeNode root1, root2;
	boolean isSametree(TreeNode root1, TreeNode root2){
		if(root1==null&&root2==null)
			return true;
		if(root1==null||root2==null)
			return false;
		return (root1.data==root2.data) &&(isSametree(root1.left,root2.left))&&(isSametree(root1.right,root2.right));
	}
	// if root2 is Subtree of root1
	boolean isSubtree(TreeNode root1, TreeNode root2){
		if(root2==null)
			return true;
		if(root1==null)
			return false;
		if(isSametree(root1, root2))
			return true;
		return isSubtree(root1.left,root2)||isSubtree(root1.right,root2);
	}
}

```     


