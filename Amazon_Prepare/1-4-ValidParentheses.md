##Valid Parentheses
1. 括号匹配   {}[]()                                       
              
                                  
       
```

import java.util.HashMap;
import java.util.Stack;

public class ValidParentheses {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		App3 app = new App3();
		String str1 = "{[(1+2)*3]+[24*(8-9)]*(24+29)}*(23+28)";
		String str2 = "{[]24+23*(43+342)+34]+23[}";
		System.out.println(app.isValidParentheses(str1));
		System.out.println(app.isValidParentheses(str2));
	}

}
class App3{
	boolean isValidParentheses(String str){
		HashMap<Character, Character> map = new HashMap<Character, Character>();
		map.put('(', ')');
		map.put('[', ']');
		map.put('{', '}');
		Stack<Character> stack = new Stack<Character>();
		for(int i = 0 ; i < str.length(); i++){
			char ch = str.charAt(i);
			if(map.keySet().contains(ch)){
				stack.push(ch);
			}else if(map.values().contains(ch)){
				if(!stack.empty()&&map.get(stack.peek())==ch){
					stack.pop();
				}else{
					return false;
				}
			}
		}
		
		return stack.empty();
	}
}


```         
      

