##Grey Code
1. 给两个byte，判断它们是否互为greycode      
Grey Code: There is only one byte is different    
For instance: 1001 and 1000 is grey code, but 1001 and 1010 is not grey code.             
       
```


public class GreyCode {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		App1 app = new App1();
		System.out.println("01,10 "+app.isGreyCode(1, 2));
		System.out.println("01,11 "+app.isGreyCode(1, 3));
		System.out.println("1001,1000 "+app.isGreyCode(9, 8));
		System.out.println("1001,1011 "+app.isGreyCode(9, 11));
		System.out.println("1101,1011 "+app.isGreyCode(13, 11));
	}

}

class App1{
	boolean isGreyCode(int n1, int n2){
		byte x = (byte)(n1^n2);
		int total = 0;
		while(x!=0){
			x = (byte)(x&(x-1));
			total++;
			if(total>1)
				return false;
		}
		if(total==1)
			return true;
		return false;
	}
}


```         
      

