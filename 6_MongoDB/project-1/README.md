ExpressJS
MongooseJS

##Mongoose JS
MongooseJS is  node module => it si an API for interacting with MongoDB         
         
**What does Mongoose do?**         
        
**How to use Mongoose?**        
```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	keywords: Array,
	published: Boolean
});
module.exports = mongoose.model('Book',BookSchema);//given by node  
```        
        
**Start a Connection**          
```
var myDB = 'mongodb://localhost/dbName';
mongoose.connect(myDB);
```      
remember to let mongod run on the terminal: **sudo service mongod start**            

```
npm install --save express body-parser mongoose
```     
     
###Postman google chrome plugin   
           
###ExpressJS
     
###MongoDB 

          
