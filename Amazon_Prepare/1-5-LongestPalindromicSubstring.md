## Java Longest Palindromic Substring(最长回文字符串)
      
###Basic Thinking-中心扩展法               
因为回文字符串是以中心轴对称的，所以如果我们从下标 i 出发，用2个指针向 i 的两边扩展判断是否相等，那么只需要对0到n-1的下标都做此操作，就可以求出最长的回文子串。但需要注意的是，回文字符串有奇偶对称之分，即"abcba"与"abba"2种类型，因此需要在代码编写时都做判断。                      
设函数int Palindromic ( string &s, int i ,int j) 是求由下标 i 和 j 向两边扩展的回文串的长度，那么对0至n-1的下标，调用2次此函数：                        
int lenOdd =  Palindromic( str, i, i ) 和 int lenEven = Palindromic (str , i , j )，即可求得以i 下标为奇回文和偶回文的子串长度。             
接下来以lenOdd和lenEven中的最大值与当前最大值max比较即可。               
这个方法有一个好处是时间复杂度为O(n2)，且不需要使用额外的空间。                                      
              
                                         
```

public class LongestPalindromicSubstring {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		App4 app = new App4();
		String str1 = "abcdcbl";//bcdcb
		String str2 = "aabccbl";//bccb
		String str3 = "abcdcba";//abcdcba
		String str4 = "abcddcba";//abcddcba
		String str5 = "cddc";//cddc
		System.out.println(app.longestPalindromicSubstring(str1));
		System.out.println(app.longestPalindromicSubstring(str2));
		System.out.println(app.longestPalindromicSubstring(str3));
		System.out.println(app.longestPalindromicSubstring(str4));
		System.out.println(app.longestPalindromicSubstring(str5));
	}

}

class App4{
	String longestPalindromicSubstring(String str){
		if(str==null||str.length()<=1){
			return str;
		}
		int strLen = str.length();
		String maxStr = str.substring(0,1);
		for(int i = 0; i < strLen; i++){
			String tmp = find(str,i,i);
			if(tmp.length()>maxStr.length()){
				maxStr=tmp;
			}
			String tmp2 = find(str,i,i+1);
			if(tmp2.length()>maxStr.length()){
				maxStr=tmp2;
			}
		}
		
		return maxStr;
	}
	
	String find(String str, int begin, int end){
		
		while(begin>=0&&end<=str.length()-1&&str.charAt(begin)==str.charAt(end)){
			begin--;
			end++;
		}
		String maxSub = str.substring(begin+1,end);
		return maxSub;
	}
}


```         
      

