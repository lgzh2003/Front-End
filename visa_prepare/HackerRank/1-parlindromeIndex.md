###ParlindromeIndex.md        
     
Given a string,S , of lowercase letters, determine the index of the character whose removal will make S a palindrome. If **S**is already a palindrome or no such character exists, then print **-1** . **There will always be a valid solution**, and any correct answer is acceptable. For example, if s="bcbc", we can either remove 'b' at index  or 'c' at index .                       
                  
            
```
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        int k = in.nextInt();
        Vector<Integer> v = new Vector<Integer>();
        for(int i = 1; i<=k;i++){
            String s = in.next();
            v.add(parlin(s));
        }
        for(Integer item : v)
            System.out.println(item.intValue());
    }
    static int parlin(String s){
        if(s==null||s.length()==0||s.length()==1||isPar(s))
            return -1;
        int index =help(s, 0, s.length()-1);
        return index;
        
        
    }
    static boolean isPar(String s){
        
        if(s==null||s.length()==0)
            return false;
        int len = s.length();
           
       
            for(int i = 0;i<=len/2;i++){
                if(s.charAt(i)!=s.charAt(len-i-1))
                    return false;
            }
        return true;
        
    }
    
    static int help(String s, int start, int end){
        if(start>=end)
            return -1;
        if(s.charAt(start)==s.charAt(end)){
            return help(s, start+1,end-1);
        }else{
            if(isPar(s.substring(start,end)))
                return end;
            else
                return start;
        }
    }
}

```
