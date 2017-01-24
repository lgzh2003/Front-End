##Binary search tree minimum sum from root to leaf  
                        
BST最短路径之和(from root to leaf)
       
```
 class TreeNode {
	      int val;
	      TreeNode left;
	      TreeNode right;
	      TreeNode(int x) { val = x; }
	  
}
```         
     
###Similar Solution Reference       
[【LeetCode】Sum Root to Leaf Numbers 解题报告](http://blog.csdn.net/ljiabin/article/details/39478999)           
             
### Using help(TreeNode root,int sum)  as an transision 
    
```
class PathSum {
	 int min = Integer.MAX_VALUE;
	    public int Solution(TreeNode root) {
	    	help(root,0);
	    	return min;
	    }
	    
	    void help(TreeNode root,int sum){
	    	sum+=root.val;
	    	if(root.left==null&&root.right==null){
	    		if(sum<min)
	    			min=sum;
	    	}
	    	if(root.left!=null){
	    		help(root.left, sum);
	    	}
	    	if(root.right!=null){
	    		help(root.right, sum);
	    	}
	    }
	}
```               
       
