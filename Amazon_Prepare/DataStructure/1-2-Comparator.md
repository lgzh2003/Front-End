##Comparator           
        
###1.比较器：Comparable接口与Comparator接口区别与理解                
####排序规则实现的方法不同        
- Comparable接口的方法：compareTo(Object o)               
- Comparator接口的方法：compare(T o1, To2)               
                                                     
####排序规则实现的方法不同                              
- Comparable接口用于在类的设计中使用**(class Student implements Comparable<Student>)**                                     
- Comparator接口**用于类设计已经完成**，还想排序（Arrays）            
             
###2.返回值分析
####Comparator接口 compare(T arg1, T arg2)            
```
return arg1 - arg2;// ascend
```                 
```
return -arg1 + arg2;// descend
```            
                     
####Comparable接口 compareTo(Obj arg1) 
```
 return this.i - o.i;// ascend    
```       
```
 return -this.i + o.i;// descend    
```           
```
return -1; // 
return 0;//
return 1;//

```
     
            
###3.Comparable接口与Comparator接口的实例操作          
####Comparable接口的实例操作      
Student类创建时实现Comparable接口，覆写compareTo（）方法，成绩按从高到低排序，成绩相等按年龄从小到大排序。               
```
/*实现Comparator接口的类可以方便的排序，
 * 覆写compareTo接口
 * java.util.Arrays.sort(对象类数组)，*/
class Student implements Comparable<Student> {    // 指定类型为Student
    private String name ;
    private int age ;
    private float score ;
    public Student(String name,int age,float score){
        this.name = name ;
        this.age = age ;
        this.score = score ;
    }
    public String toString(){
        return name + "\t\t" + this.age + "\t\t" + this.score ;
    }
    public int compareTo(Student stu){    // 覆写compareTo()方法，实现排序规则的应用
        if(this.score>stu.score){
            return -1 ;
        }else if(this.score<stu.score){
            return 1 ;
        }else{
            if(this.age>stu.age){
                return 1 ;
            }else if(this.age<stu.age){
                return -1 ;
            }else{
                return 0 ;
            }
        }    
    }
};
public class Comparable01{
    public static void main(String args[]){
        Student stu[] = {new Student("张三",20,90.0f),
            new Student("李四",22,90.0f),new Student("王五",20,99.0f),
            new Student("赵六",20,70.0f),new Student("孙七",22,100.0f)} ;
        java.util.Arrays.sort(stu) ;    // 进行排序操作
        for(int i=0;i<stu.length;i++){    // 循环输出数组中的内容
            System.out.println(stu[i]) ;
        }
    }
};
```       
                          
####Comparator接口实例操作
Student01类原先没有比较器，类完成后构建一个比较器StudentComparator类,按年龄从大到小排序。               
```
import java.util.* ;
 class Student01{    // 指定类型为Student
    private String name ;
    private int age ;
    public Student01(String name,int age){
        this.name = name ;
        this.age = age ;
    }
    public boolean equals(Object obj){    // 覆写equals方法
        if(this==obj){
            return true ;
        }
        if(!(obj instanceof Student)){
            return false ;
        }
        Student01 stu = (Student01) obj ;
        if(stu.name.equals(this.name)&&stu.age==this.age){
            return true ;
        }else{
            return false ;
        }
    }
    public void setName(String name){
        this.name = name ;
    }
    public void setAge(int age){
        this.age = age ;
    }
    public String getName(){
        return this.name ;
    }
    public int getAge(){
        return this.age ;
    }
    public String toString(){
        return name + "\t\t" + this.age  ;
    }
};

class StudentComparator implements Comparator<Student01>{    // 实现比较器
    // 因为Object类中本身已经有了equals()方法
    public int compare(Student01 s1,Student01 s2){
        if(s1.equals(s2)){
            return 0 ;
        }else if(s1.getAge()<s2.getAge()){    // 按年龄比较
            return 1 ;
        }else{
            return -1 ;
        }
    }
};

public class Comparator01{
    public static void main(String args[]){
        Student01 stu[] = {new Student01("张三",20),
            new Student01("李四",22),new Student01("王五",20),
            new Student01("赵六",20),new Student01("孙七",22)} ;
        java.util.Arrays.sort(stu,new StudentComparator()) ;    // 进行排序操作
        for(int i=0;i<stu.length;i++){    // 循环输出数组中的内容
            System.out.println(stu[i]) ;
        }
    }
};
```      

