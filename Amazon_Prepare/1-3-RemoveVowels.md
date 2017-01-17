##Remove Vowels
1. Remove "AEIOUaeiou" from a given string.                      
              
For instance: Apple => ppl                                    
              PoliceMan => PlcMn                                  
       
```

public class RemoveVowels {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		App2 app = new App2();
		String str1 = "AppleBananaEgg";//pplBnngg
		String str2 = "aNPoliceBananaEgg";//NPlcplBnngg
		System.out.println(app.removeVowels(str1));
		System.out.println(app.removeVowels(str2));
		System.out.println(app.removeVowels2(str1));
		System.out.println(app.removeVowels2(str2));
		
	}

}

class App2{
	String removeVowels(String str){
		String result = str.replaceAll("[aeiouAEIOU]", "");
		// str itself does not change, but the value the repaceAll returns is changed
		return result;
	}
	
	String removeVowels2(String str){
		String vowel = "aeiou";
		StringBuilder sb = new StringBuilder();
		for(int i = 0; i<str.length(); i++){
			if(vowel.indexOf(str.toLowerCase().charAt(i))==-1){
				sb.append(str.charAt(i));
			}
		}
		return sb.toString();
	}
	
}

```         
      

