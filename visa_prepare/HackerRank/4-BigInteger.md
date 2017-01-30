##Advanced Fibo       
f3 = f1+f2*f2            
             


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
        int f1 = in.nextInt();
        int f2 = in.nextInt();
        int n = in.nextInt();
        System.out.println(advFib(f1,f2,n));
        
    }
    static BigInteger advFib(int f1,int f2,int n){
        BigInteger []arr = new BigInteger[n+1];
        arr[0]=new BigInteger("0");
        arr[1]=new BigInteger(String.valueOf(f1));
        arr[2]=new BigInteger(String.valueOf(f2));
        for(int i = 3;i<=n;i++){
            arr[i] = arr[i-1].multiply(arr[i-1]).add(arr[i-2]);   
        }
        return arr[n];
    }
    
}
```
