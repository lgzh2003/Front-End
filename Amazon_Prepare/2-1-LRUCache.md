##LRU Cache          
```
Amazon OA中的题面是：
给一个array, 给一个cache max size, 输出miss count. 什么时候hit, 什么时候miss的情况写好就好了。
example：   size = 4， input array   【1，2，3，4，5，4，1】
1 miss   2 miss   3 miss   4 miss   5 miss  替换 1   
4 hit    把4提前到第一位   1 miss  替换 2
```       
[Related Question](https://leetcode.com/problems/lru-cache/)               
                
        
###Related Knowledge       
1. [LRU(Least Recently Used Algorithm)](ExtraKnowledge/2-LRU.md)             
2. [LRU缓存实现(Java)](http://www.cnblogs.com/lzrabbit/p/3734850.html)                  
3. [Amazon OA2准备——LRU cache](http://blog.csdn.net/lycorislqy/article/details/49218977)                    
4. [LinkedHashMap 的实现原理](http://wiki.jikexueyuan.com/project/java-collection/linkedhashmap.html)                   
                  
     
**排序模式**                                 
这些构造方法都会默认指定排序模式为插入顺序。如果你想构造一个 LinkedHashMap，并打算按从近期访问最少到近期访问最多的顺序（即访问顺序）来保存元素，那么请使用下面的构造方法构造 LinkedHashMap：public **LinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder)**. LinkedHashMap 定义了排序模式 accessOrder，该属性为 boolean 型变量，**对于访问顺序，为 true**；**对于插入顺序，则为 false**。Default = false                            
该哈希映射的迭代顺序就是最后访问其条目的顺序，这种映射很适合构建 LRU 缓存。**LinkedHashMap 提供了 removeEldestEntry(Map.Entry<K,V> eldest)方法**。该方法可以提供在每次添加新条目时移除最旧条目的实现程序，默认返回 false，这样，此映射的行为将类似于正常映射，即永远不能移除最旧的元素。                   
             
        
###Main Code                       
         
         
```           
import java.util.LinkedHashMap;
import java.util.Map;

public class LRUCache_CountMiss {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int capacity = 4;
		LRUCacheWithCountMiss cache = new LRUCacheWithCountMiss(capacity);
		int [] arr = new int[]{1,2,3,4,5,6,3,5,4,1};
		cache.countMissNHit(arr);
		System.out.println(cache.countHit);
		System.out.println(cache.countMiss);
	}

}     

class LRUCache {
	int capacity;
	Map<Integer, Integer> cache;
    public LRUCache(final int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedHashMap<Integer, Integer>(capacity,1,true){
        	@Override
        	protected boolean removeEldestEntry(java.util.Map.Entry<Integer, Integer> eldest) {
        		// TODO Auto-generated method stub
        		return this.size() > capacity;
        	}
        };
    }
    public int get(int key) {
        if(cache.containsKey(key))
        	return cache.get(key);
        else
        	return -1;
    }
    
    public void put(int key, int value) {
        cache.put(key, value);
    }
}


class LRUCacheWithCountMiss{
	int capacity;
	Map<Integer, Integer> cache;
	int countMiss;
	int countHit;
	public LRUCacheWithCountMiss(final int capacity){
		this.capacity = capacity;
		this.countMiss = 0;
		this.countHit = 0;
		//LinkedHashMap的一个构造函数，当参数accessOrder为true时，即会按照访问顺序排序，最近访问的放在最前，最早访问的放在后面
		this.cache = new LinkedHashMap<Integer, Integer>(capacity, 1, true){ //true即会按照访问顺序排序，最近访问的放在最前,No.1
			@Override
			protected boolean removeEldestEntry(java.util.Map.Entry<Integer, Integer> eldest) {
				// TODO Auto-generated method stub
				return this.size()>capacity;
			}
		};		
	}
	/*
Amazon OA中的题面是：
给一个array, 给一个cache max size, 输出miss count. 什么时候hit, 什么时候miss的情况写好就好了。
example：   size = 4， input array   【1，2，3，4，5，4，1】
1 miss   2 miss   3 miss   4 miss   5 miss  替换 1   
4 hit    把4提前到第一位   1 miss  替换 2
	 */
	void countMissNHit(int[] arr){
		for(int i = 0;i<arr.length;i++){
			int key = arr[i];
			int value = 1;
			if(cache.get(key)==null){
				cache.put(key, value);
				countMiss++;
			}else{
				countHit++;
			}
		}
	}
}
```
            
