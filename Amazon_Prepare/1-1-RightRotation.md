##Right Rotation
1. 判断string1和string2是否互为right rotation。比如：abcd和cdab。CC150原题，一行代码即可解决      
       
```

public class RightRotation {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		App app = new App();
		String s1 = "abcd";
		String s2 = "dcba";
		String s3 = "dcbaa";
		System.out.println(app.isRightRotation(s1, s2));
		System.out.println(app.isRightRotation(s1, s3));
		System.out.println(app.isRightRotation2(s1, s2));
		System.out.println(app.isRightRotation2(s1, s3));
	}

}

class App{
	
	boolean isRightRotation(String s1, String s2){
		if(s1==null && s2==null)
			return true;
		if(s1.length()!=s2.length())
			return false;
		for(int i=0; i<s1.length();i++){
			if(s1.charAt(i)!=s2.charAt(s1.length()-1-i)){		
				return false;
			}
		}
		return true;
	}
	
	boolean isRightRotation2(String s1, String s2){
		if(s1==null && s2==null)
			return true;
		if(s1.length()!=s2.length())
			return false;
		StringBuilder sb = new StringBuilder(s2);
		String s2reverse = sb.reverse().toString();
		if(s2reverse.equals(s1))
			return true;
		else
			return false;
	}
	
}

```         
      

