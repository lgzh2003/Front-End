##LRU Algorithm        
        
###原理
LRU（Least recently used，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“**如果数据最近被访问过，那么将来被访问的几率也更高**”。                                  
         
###LRU Cache(LRU缓存)
LRU是Least Recently Used 的缩写，翻译过来就是“最近最少使用”，LRU缓存就是使用这种原理实现，**简单的说就是缓存一定量的数据，当超过设定的阈值时就把一些过期的数据删除掉**，            
比如我们缓存10000条数据，当数据小于10000时可以随意添加，当超过10000时就需要把新的数据添加进来，同时要把过期数据删除，以确保我们最大缓存10000条，那怎么确定删除哪条过期              
数据呢，**采用LRU算法实现的话就是将最老的数据删掉**，废话不多说，下面来说下Java版的LRU缓存实现.                  
       
###LRU Cache 的LinkedHashMap实现          
LinkedHashMap自身已经实现了顺序存储，默认情况下是按照元素的添加顺序存储，也可以启用按照访问顺序存储，即最近读取的数据放在最前面，最早读取的数据放在最后面，然后它还有一个                  
判断是否删除最老数据的方法，默认是返回false，即不删除数据，我们使用LinkedHashMap实现LRU缓存的方法就是对LinkedHashMap实现简单的扩展，扩展方式有两种，一种是inheritance,                      
一种是delegation，具体使用什么方式看个人喜好                                      
                  
- LinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder)**当参数accessOrder为true时，即会按照访问顺序排序，最近访问的放在最前，最早访问的放在后面**      
- boolean removeEldestEntry(Map.Entry<K,V> eldest)**LinkedHashMap自带的判断是否删除最老的元素方法，默认返回false，即不删除老数据**                                 
                                      
```
//LinkedHashMap的一个构造函数，当参数accessOrder为true时，即会按照访问顺序排序，最近访问的放在最前，最早访问的放在后面
public LinkedHashMap(int initialCapacity, float loadFactor, boolean accessOrder) {
        super(initialCapacity, loadFactor);
        this.accessOrder = accessOrder;
}

//LinkedHashMap自带的判断是否删除最老的元素方法，默认返回false，即不删除老数据
//我们要做的就是重写这个方法，当满足一定条件时删除老数据
protected boolean removeEldestEntry(Map.Entry<K,V> eldest) {
        return false;
}
```             
                    
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
              

