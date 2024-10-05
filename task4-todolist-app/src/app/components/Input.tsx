import React, { useState } from 'react';

interface InputProps {
  addTodo: (todo: string) => void;
}

const Input: React.FC<InputProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task); // Add task to the list
      setTask(''); // Clear input after adding
    }
  };

  return (
    <div className="mt-6 flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="border-2 border-gray-300 rounded px-4 py-2"
        />
        <button
          type="submit"
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Input;
