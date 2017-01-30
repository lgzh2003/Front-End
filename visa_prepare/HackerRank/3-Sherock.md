```
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        Scanner in  = new Scanner(System.in);
        String s = in.next();
        
        HashMap<Character,Integer> map = new HashMap<Character,Integer>();
        
        if(s==null||s.length()<=3)
            System.out.println("YES");
        for(int i = 0;i<s.length();i++){
            if(map.containsKey(s.charAt(i)))
                map.put(s.charAt(i),map.get(s.charAt(i))+1);
            else
                map.put(s.charAt(i),1);
        }
         Object[] arr = map.values().toArray();
        int [] a = new int [arr.length];
        for(int i = 0;i<arr.length;i++){
        	a[i] = Integer.parseInt(arr[i].toString());
        }
        Arrays.sort(a);
        if(a[0]==a[a.length-2]||a[1]==a[a.length-1])
            System.out.println("YES");
        else
            System.out.println("NO");
    }
}
```
