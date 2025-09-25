import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  // You'll need two useState hooks
  const  [todos,  setTodos]  =  useState([]);
  const  [newTodo,  setNewTodo]  =  useState("");
  const [complete, setComplete] = useState(0);
  const [incomplete, setIncomplete] = useState(0);

  // Think about what each function needs to do
  const  handleInputChange  =  (event)  =>  {
    setNewTodo(event.target.value);
  };

  const  handleSubmit  =  (event)  =>  {
    event.preventDefault();
    if (newTodo !== "") {
      const todoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false
      };
      setTodos([...todos, todoItem]);
      setNewTodo("");
    }
    setIncomplete(incomplete + 1);
    console.log(todos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (!todo.completed) {
          setComplete(complete + 1);
          setIncomplete(incomplete - 1);
        } else {
          setComplete(complete - 1);
          setIncomplete(incomplete + 1);
        }
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  const handleDelete = (id) => {
    if (todos.find((todo) => todo.id === id).completed) {
      setComplete(complete - 1);
    } else {
      setIncomplete(incomplete - 1);
    }
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <>
  {/* Form section */}
  <div className='container'>
    <h1>Add Items</h1>
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />
      <button  type="submit">Add Todo</button>
    </form>
  </div>
  
  {/* List section */}  
  <div className='container'>
    <h1>List</h1>
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className='todo-item'>
          <h3>{todo.text} -</h3>
          {todo.completed ? <button onClick={() => handleToggleComplete(todo.id)}>Complete</button> : <button onClick={() => handleToggleComplete(todo.id)}>InComplete</button>} - 
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  </div>
  {/* Data section */}
  <div className='container'>
    <h1>Data</h1>
    <h3>Total: {complete + incomplete}</h3>
    <h3>Completed: {complete}</h3>
    <h3>Incomplete: {incomplete}</h3>
  </div>
    {/* Count and list section */}
    {/* How will you count remaining todos? */}
    {/* How will you map over the todos array? */}
  
    </>
  )
}

export default App
