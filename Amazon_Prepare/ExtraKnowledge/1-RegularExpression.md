##Regular Expression
      
###Introduction    
众所周知，**在程序开发中，难免会遇到需要匹配、查找、替换、判断字符串的情况发生**，而这些情况有时又比较复杂，如果用纯编码方式解决，往往会浪费程序员的时间及精力。因此，学习及使用          
正则表达式，便成了解决这一矛盾的主要手段。大家都知道，**正则表达式是一种可以用于模式匹配和替换的规范，一个正则表达式就是由普通的字符（例如字符a到z）以及特殊字符（元字符）组成               
的文字模式，它用以描述在查找文字主体时待匹配的一个或多个字符串**.正则表达式作为一个模板，将某个字符模式与所搜索的字符串进行匹配。                 
自从jdk1.4推出**java.util.regex包**，就为我们提供了很好的JAVA正则表达式应用平台。          
       
###Some Instances        
- **^为限制开头** (^java 条件限制为以Java为开头字符)               
                   
- **$为限制结尾** (java$ 条件限制为以java为结尾字符)           
             
- **. 条件限制除/n以外任意一个单独字符** (java.. 条件限制为java后除换行外任意两个字符)         
                      
- **加入特定限制条件「[]」**                                     
```
[a-z]     条件限制在小写a to z范围中一个字符
[A-Z]     条件限制在大写A to Z范围中一个字符
[a-zA-Z] 条件限制在小写a to z或大写A to Z范围中一个字符
[0-9]     条件限制在小写0 to 9范围中一个字符
[0-9a-z] 条件限制在小写0 to 9或a to z范围中一个字符
[0-9[a-z]] 条件限制在小写0 to 9或a to z范围中一个字符(交集)
```            
        
- **[]中加入^后加再次限制条件「[^]」**            
```
[^a-z]     条件限制在非小写a to z范围中一个字符
[^A-Z]     条件限制在非大写A to Z范围中一个字符
[^a-zA-Z] 条件限制在非小写a to z或大写A to Z范围中一个字符
[^0-9]     条件限制在非小写0 to 9范围中一个字符
[^0-9a-z] 条件限制在非小写0 to 9或a to z范围中一个字符
[^0-9[a-z]] 条件限制在非小写0 to 9或a to z范围中一个字符(交集)
```      
          
- 在限制条件为特定字符**出现0次及以上时**，可以使用「*」                   
```
J*     0个及以上J
.*     0个及以上任意字符
J.*D     J与D之间0个及以上任意字符
```
              
- 在限制条件为特定字符**出现1次及以上时**，可以使用「+」            
```
J+     1个及以上J
.+     1个及以上任意字符
J.+D     J与D之间1个及以上任意字符             
```            
       
- 在限制条件为特定字符出现有0或1次以上时，可以使用「?」: **JA? J或者JA出现**                      
       
- **两者取一「|」**           
```
J|A     J或A
Java|Hello     Java或Hello            
```           
           
           
                                                                            
###Some Related Documents & Blogs       
- [JAVA 正则表达式 （超详细）](http://blog.csdn.net/allwefantasy/article/details/3136570/)          
- [Java正则表达式入门](http://blog.csdn.net/kdnuggets/article/details/2526588)        
- [Java正则表达式入门基础篇(新手必看)](http://www.jb51.net/article/73591.htm)            

