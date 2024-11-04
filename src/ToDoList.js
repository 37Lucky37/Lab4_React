import React from 'react';

function ToDoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className={todo.isCompleted ? 'completed' : ''}>
          <span onClick={() => toggleComplete(index)}>{todo.text}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
