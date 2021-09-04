var express = require('express');
var cors = require('cors')

//set up our express app
var app = express()
const port = 3001;
var todos = [{id:1, text:'buy the milk', complete: false}, {id:2, text:'rent a car', complete: false}, {id:3, text:'feed the cat', complete: false}];

var count = todos.length;
app.use(cors());
app.use(express.json()); 
//app.use(express.urlencoded()); //Parse URL-encoded bodies

app.get('/', (request, response) => response.status(200).json(todos));

app.post('/', (request, response) => {
    var newTodo = JSON.parse(JSON.stringify(request.body));
    count = count +1;  
    newTodo.id = count;
    todos.push(newTodo);
    response.status(201).json();
});
app.delete('/:id', (request, response) => {
  var id = parseInt(request.params.id);
  if(todos.filter(todo => todo.id == id).length !== 0){
    todos = todos.filter(todo => todo.id !== id);
    response.status(200).send();
  }else{
    response.status(404).send();
  }
});
  
app.listen(port);