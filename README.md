# Front-End
       
###Text Edit Used: Brackets + Webstrom + Eclipse
       
###Content
1. [React](4_React)           
1. [Node.js](5_Node)   


                 
##HTML + CSS + Javascript      
- **HTML**: display information as a static page      
- **CSS**: Stylize the static page     
- **Javascript**: fulfill some simple interactions to users      
        
##The relationship between Javascript, jQuery and AJAX        
- **Javascript** is a programming language which is used mainly in webpages for making websites interactive. When a webpage is parsed by the browser, it creates an in-memory representation of the page. It is a tree structure, which contains all elements on the page. So there is a root element, which contains the head and the body elements, which contain other elements, which contain other elements. So it looks like a tree basically. Now with javascript you can manipulate elements in the page using this tree. You can pick elements by their id (getElementsById), or their tag name (getElementsByTagName), or by simply going through the tree (parentNode, firstChild, lastChild, nextSibling, previousSibling, etc.). Once you have element(s) to work with you can modify them by changing their look, content or position on the page. This interface is also known as the DOM(Document Object Model). So you can do everything with Javascript that another programming language can do, and by using it embedded into wepages you also get an in-memory Object of the current webpage by which you can make changes to the page interactively.                
- **AJAX** is a technique of communication between the browser and the server within a page. Chat is a good example. You write a message, send a message and recive other messages without leaving the page. You can manage this interaction with Javascript on the client side, using an XMLHTTP Object provided by the browser.         
- **jQuery** is a library which aims to simplify client side web development in general (the two other above). It creates a layer of abstracion so you can reuse common languages like CSS and HTML in Javascript. It also includes functions which can be used to communicate with servers very easily (AJAX). It is written in Javascript, and will not do everything for you, only makes common tasks easier. It also hides some of the misconceptions and bugs of browsers.          
          
To sum up:
- **Javascript** is a programming language (objects, array, numbers, strings, calculations)
- **AJAX** and **jQuery** uses **Javascript**
- **jQuery** is for simplifing common tasks with **AJAX** and page manipulation (style, animation, etc.)         
        
[reference](http://blog.csdn.net/jediael_lu/article/details/38312685)      
            
     
               
                
        

