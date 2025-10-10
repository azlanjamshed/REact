import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>
      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-gray-400 text-center ">No tasks yet!</p>
        ) : (
          todos.map((task, index) => (
            <p
              key={index}
              className="px-4 py-2 bg-gray-100 rounded shadow-sm hover:bg-gray-200 transition-colors flex justify-between items-center "
            >
              {task}

              <button
                className="bg-red-500 p-1"
                onClick={() => {
                  const newTodo = todos.filter((_, i) => i !== index);
                  setTodos(newTodo);
                }}
              >
                Delete
              </button>
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
