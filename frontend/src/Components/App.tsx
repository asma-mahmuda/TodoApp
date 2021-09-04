import React, { useState, useEffect  }  from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import api from "../services/api";

function App() {
  const [error, setError] = useState<string>();
  const [todos, setTodos] = useState<Todo[]>([]);
  
    const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = async(id:number, text: string) => {
    try {
      const newTodo = { id, text, complete: false };
      setTodos([...todos, newTodo]);

      await api.add(newTodo);
    } catch (error) {
      setError("Could not save the data!");
      setTodos(todos);
    }
    
  };
  useEffect(() => 
    {
      const getTodos = async () => {
        try {
          const { data } = await api.get();
          setTodos(data);
        } catch (er) {
          setError("Could not fetch the List!" + error);
        }
      }  
      getTodos();
    }, []);
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}/>
    </>
  );
}

export default App;