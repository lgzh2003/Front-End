##Non blocking I/O          
        
**Asynchronous and Event Driven** : All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. **The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.**                   
                          
**Very Fast** : Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.                      
                   
**Single Threaded but Highly Scalable** : Node.js uses a single threaded model with **event looping**(continuely check if there is any event that is needed to be handle). Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. **Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.**                   
                 
**No Buffering** − Node.js applications never buffer any data. These applications simply output the data in chunks.           
                     
###Blocking(Synchronized) vs Non-Blocking I/O(Asynchronized)           
- Multi-thread vs Single thread                       
- Higher **throughput** vs lower **throughput**                 
- lower **utilization rate** vs higher **utilization rate**           
- Writing and reading to and from disk takes a lot of time. Synchronized I/O will just dispatch CUP to other thread and pause the mission while Asychronized I/O won't                  
- Non-Blocking won't wait 1st code line complete and directly excute 2nd code line. That is the very difference!!                    
                

