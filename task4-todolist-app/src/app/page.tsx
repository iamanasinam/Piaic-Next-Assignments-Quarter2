"use client"; // Next.js 13+ for client-side rendering

import React, { useState } from 'react';
import Header from './components/header';
import Input from './components/Input';
import TodoList from './components/Content';

const Home = () => {
  const [todos, setTodos] = useState<string[]>([]); // State to manage the list of tasks

  // Function to add a new task
  const addTodo = (todo: string) => {
    if (todo) {
      setTodos((prevTodos) => [...prevTodos, todo]);
    }
  };

  // Function to delete a task by index
  const deleteTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  // Function to edit a task by index
  const editTodo = (index: number, newValue: string) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? newValue : todo));
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <Input addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default Home;