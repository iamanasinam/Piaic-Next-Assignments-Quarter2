import React, { useState } from 'react';

interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newValue: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState<number | null>(null); // Track the index being edited
  const [newTask, setNewTask] = useState<string>(''); // Store the edited task

  // Handle edit button click
  const handleEdit = (index: number, task: string) => {
    setIsEditing(index); // Set the current task to be editable
    setNewTask(task); // Set the task value to the input field
  };

  // Handle edit form submission
  const handleEditSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault();
    editTodo(index, newTask); // Save the edited task
    setIsEditing(null); // Exit editing mode
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-center">Your Tasks:</h2>
      {todos.length === 0 ? (
        <p className="text-center mt-4">No tasks available</p>
      ) : (
        <ul className="list-disc mt-4 mx-auto w-1/2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded"
            >
              {isEditing === index ? (
                // Show input field if the task is being edited
                <form onSubmit={(e) => handleEditSubmit(e, index)} className="flex w-full">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="border-2 border-gray-300 rounded px-2 py-1 flex-grow"
                  />
                  <button type="submit" className="ml-2 bg-green-500 text-white px-2 py-1 rounded">
                    Save
                  </button>
                </form>
              ) : (
                // Display task text
                <>
                  <span>{todo}</span>
                  <div>
                    <button
                      onClick={() => handleEdit(index, todo)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTodo(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
