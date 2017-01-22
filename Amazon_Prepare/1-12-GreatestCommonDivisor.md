## GCD Greatest Common Divisor      
    
就是给一个数组找这些数的最大公约数        
     
###Mathmatic Background(辗转相除法(欧几里得算法)(Euclidean algorithm))          
```
定理： 已知a,b,c为正整数，若a除以b余c，则（a,b）=(b,c)
∵27216=15750×1+11466 ∴（15750，27216）=（15750，11466） 
∵15750=11466×1+4284  ∴（15750，11466）=(11466,4284) 
∵11466=4284×2+2898  ∴(11466,4284)=（4284，2898） 
∵4284=2898×1+1386   ∴（4284，2898）=（2898，1386） 
∵2898=1386×2+126   ∴（2898，1386）=（1386，126） 
∵1386=126×11     ∴（1386，126）=126 
   所以（15750，27216）=216 

```          
       
###Compute the GCD of two number : int getGreatestCommonDivisor(int n1, int n2)     
####Key Point 保证n1>n2,若n1<n2,则进行数据交换  
```
int getGreatestCommonDivisor(int n1, int n2){
		if(n1==0 || n2==0)
			return 0;
		if(n1==1 || n2==1)
			return 1;
		if(n1<n2){              ///保证n1>n2,若n1<n2,则进行数据交换 
			int temp = n1;
			n1 = n2;
			n2 = temp;
		}
		int remainder = 1;
		while(remainder!=0){
			remainder = n1%n2;
			if(remainder==0)
				return n2;
			n1 = n2;
			n2 = remainder;		
		}
		return 0;
	}
```              
     
###Compute the GCD from an array of numbers: int getGreatestCommonDivisorFromArray(int[] arr)     
           
```
int getGreatestCommonDivisorFromArray(int[] arr){
		
		if(arr.length<=0||arr==null)
			return 0;
		if(arr.length==1)
			return arr[0];
		int n1 = arr[0];
		int n2 = arr[1];
		int answer = getGreatestCommonDivisor(n1, n2);
		for(int i = 2; i< arr.length;i++ ){
			answer = getGreatestCommonDivisor(answer, arr[i]);
		}
		
		return answer;
	}
```             
              
      
##求最小公倍数
```  
    public static int minCommonMultiple(int m, int n) {  
        return m * n / maxCommonDivisor(m, n);  
    } 
```
              
           

