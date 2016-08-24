#JS Simple Function and event handler

###A small example    
```
<html>
    <head>
        <title>frameset</title>
        <script type="text/javascript">
            function onclickFunc(obj){
                alert(obj.innerHTML);
            }
            function mouseOverFunc(obj){
                obj.style.fontSize = "150%"; // font-size => fontSize
                obj.style.color = "RED";
            }
            function mouseOutFunc(obj){
                obj.style.fontSize = "100%";
                obj.style.color ="#000";
            }
        </script>
    </head>
    
    <body>
        <div onclick="onclickFunc(this)" style="cursor:pointer">Here is the place to check simple event</div>
        <div onmouseover="mouseOverFunc(this)"  onmouseout="mouseOutFunc(this)" style="cursor:pointer">Mouse hover and leave test</div>
    </body>
</html>
```     
        
**Attention:**            
- CSS content in Javascript all contains in **obj.style.XXX**             
- CSS in Javascript has a small switch like **font-size => fontSize**                  
        

