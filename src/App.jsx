import { useState } from "react"
import './App.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (e) => {
  // e.preventDefault() stops the browser from refreshing the page on form submission
  e.preventDefault(); 
  
  // Don't add an empty task
  if (inputValue.trim() === '') return;

  // Create a new todo object
  const newTodo = {
    id: Date.now(), // A simple way to get a unique ID
    text: inputValue,
    completed: false // New todos are not completed by default
  };

  // Add the new todo to the list.
  // We use the spread syntax (...) to create a NEW array with the old todos plus the new one.
  setTodos([...todos, newTodo]);

  // Clear the input box after adding the task
  setInputValue('');
  };

  const handleDeleteTask = (idToDelete) => {
  // We use .filter() to create a NEW array that includes every todo EXCEPT the one we want to delete.
  const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
  setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>My To-Do List</h1>
      
      {/* This is the form for adding new todos */}
      <form className="todo-form" onSubmit={handleAddTask}>
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      
      {/* This is where our list of todos will go */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
