## Overlap Rectangle
        
给两个长方形的topLeft和bottomRight坐标, 判断这两个长方形是否重叠             
     
###Basic Idea         
- If one rectangle is on left side of other          
- // If one rectangle is on top side of other          
          
###Main Code           
```
// Returns true if two rectangles (l1, r1) and (l2, r2) overlap
bool doOverlap(Point l1, Point r1, Point l2, Point r2)
{
    // If one rectangle is on left side of other
    if (l1.x > r2.x || l2.x > r1.x)
        return false;
 
    // If one rectangle is above other
    if (l1.y < r2.y || l2.y < r1.y)
        return false;
 
    return true;
}
```
