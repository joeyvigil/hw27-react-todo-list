import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  // You'll need two useState hooks
  const  [todos,  setTodos]  =  useState([]);
  const  [newTodo,  setNewTodo]  =  useState("");

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
    console.log(todos);
  };
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <>

  <div className='Container'>
    <h1>React Todo List</h1>

    {/* Form section */}
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />
      <button  type="submit">Add Todo</button>
    </form>
    {/* List section */}  
    <h2>Todo List</h2>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.text}</h3>
          {todo.completed ? <button onClick={() => handleToggleComplete(todo.id)}>Complete</button> : <button onClick={() => handleToggleComplete(todo.id)}>InComplete</button>}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
    <h2>Count</h2>
    <h3>Remaining Todos: {todos.length}</h3>
    <h3>Completed Todos: {todos.map((todo) => todo.completed ? 1 : 0).reduce((a, b) => a + b, 0)}</h3>
    <h3>Incomplete Todos: {todos.map((todo) => { return !todo.completed ? 1 : 0}).reduce((a, b) => a + b, 0)}</h3>
  </div>
    {/* Count and list section */}
    {/* How will you count remaining todos? */}
    {/* How will you map over the todos array? */}
  
    </>
  )
}

export default App
