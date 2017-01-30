```
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
         Scanner scanner = new Scanner(System.in);  
        int t = scanner.nextInt();  
        for(int i = 0; i < t; i++) {  
            int n = scanner.nextInt();
            int[] arr = new int[n];
            for(int j = 0;j<n;j++){
                arr[j] = scanner.nextInt();
            }
            int maxCon = arr[0];
            int maxNoCon = arr[0];
            int sumCon = Math.max(maxNoCon,0);
            for(int j = 1;j<n;j++){
                maxNoCon = maxNoCon<0?Math.max(maxNoCon,arr[j]):Math.max(maxNoCon,maxNoCon+arr[j]);
                
                sumCon+=arr[j];
                maxCon = Math.max(maxCon,sumCon);
                sumCon = Math.max(sumCon,0);
    }
            System.out.println(maxCon+" "+maxNoCon);
   }
    }
}
```
