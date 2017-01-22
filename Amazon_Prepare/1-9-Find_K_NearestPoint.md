## Find K Nearest Point
        
一个平面上一堆二维点，叫你找最近的K (find close k points near origin out of n points)                     
        
###Two Method    
- Arrays.Sort(arr,Comparator)                       
```
Arrays.sort(arr.new Comparator<Point>(){
	public int compare(Point p1, Point p2){
		return (int)(p1.distance-p2.distance);
	}
      });  
```                
                                    
- [PriorityQueue](DataStructure/1-1-PriorityQueue.md)                     
```
PriorityQueue<Point> queue = new PriorityQueue<Point>(k, new Comparator<Point>() {
			
			@Override
			public int compare(Point p1, Point p2) {
				
				return (int)(p1.distance-p2.distance);
			}
		
		});
```            
           
###Main Code    
```
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Find_K_NearestPoint {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	  Point origin = new Point(2.2,2.2);
      Point o1 = new Point(3.2,3.2);
      Point o2 = new Point(4.2,4.2);
      Point o3 = new Point(3.2,4.2);
      Point o4 = new Point(2.2,2.3);
      Point [] arr = new Point[]{o1,o2,o3,o4};
      int k = 3;
      Point [] result = new App8().find_k_NearestPoint(arr, origin, k);
      for(int i = 0;i<k;i++){
    	  System.out.println(result[i].x+" "+result[i].y+" "+result[i].distance);
      }
		
}
}

class Point{
	double x;
	double y;
	double distance;
	public Point(double x, double y) {
		this.x = x;
		this.y = y;
	}
	
	public double getDistance() {
		return distance;
	}
	public void setDistance(Point origin, Point p) {
		this.distance = Math.sqrt(Math.pow((origin.x-p.x), 2.0)+Math.pow((origin.y-p.y), 2.0));
	}
}

class App8{
	public Point[] find_k_NearestPoint(Point[] array, Point origin, int k){
		Point[] result = new Point[array.length];
      	int index = 0;
      	for(int i = 0;i<array.length;i++){
      		array[i].setDistance(origin, array[i]);
      	}
		PriorityQueue<Point> queue = new PriorityQueue<Point>(k, new Comparator<Point>() {
			
			@Override
			public int compare(Point p1, Point p2) {
				
				return (int)(p1.distance-p2.distance);
			}
		
		});
      for(int i = 0; i<array.length; i++){
    		  queue.offer(array[i]);
      }
      while(!queue.isEmpty()){
      	result[index++]=queue.poll();
      }
		return result;
	}
}

```                
  


