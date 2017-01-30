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
        for(int i = 0; i < k;i++){
            String s1 = in.next();
            String s2 = in.next();
            System.out.println(hasSub(s1,s2)?"YES":"NO");
        }
    }
    static boolean hasSub(String s1, String s2){
        
          if(s1==null||s2==null||s1.length()==0||s2.length()==0)
              return false;
        
        char[] a1 = s1.toCharArray();
        char[] a2 = s2.toCharArray();
        Arrays.sort(a1);
        Arrays.sort(a2);
        int [] arr1 = new int[a1.length];
        int [] arr2 = new int[a2.length];
        for(int i = 0;i<a1.length;i++){
            arr1[i] = a1[i]-'a';
        }
        for(int i = 0;i<a2.length;i++){
            arr2[i] = a2[i]-'a';
        }
        int i = 0,j=0;
        while(i<a1.length&& j<a2.length){
            if(a1[i]==a2[j])
                return true;
            if(a1[i]>a2[j])
                j++;
            else
                i++;
        }
        return false;
          
    }
}
```
