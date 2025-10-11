import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    return saveTodos ? JSON.parse(saveTodos) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { text: todo, done: false }]);
    setTodo("");
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  // 🔹 New: Save the edited text
  const saveTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText("");
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

      {/* Input Section */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
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

      {/* Task List */}
      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-gray-400 text-center">No tasks yet!</p>
        ) : (
          todos.map((task, index) => (
            <div
              className="flex justify-between items-center bg-gray-100 rounded shadow-sm hover:bg-gray-200 transition-colors p-2"
              key={index}
            >
              {/* 🔹 Conditional: Show input if editing */}
              {editIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                />
              ) : (
                <p
                  className={`flex-1 px-2 ${
                    task.done ? "line-through text-gray-500" : ""
                  }`}
                >
                  <span className="mr-5">{index + 1}-</span>
                  {task.text}
                </p>
              )}

              {/* Buttons */}
              <div className="flex gap-2 ml-2">
                {editIndex === index ? (
                  // 🔹 Show Save button when editing
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => saveTodo(index)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => editTodo(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() =>
                        setTodos(todos.filter((_, i) => i !== index))
                      }
                    >
                      Delete
                    </button>
                    <button
                      className={`${
                        task.done
                          ? "bg-gray-500 hover:bg-gray-600"
                          : "bg-green-500 hover:bg-green-600"
                      } text-white px-3 py-1 rounded`}
                      onClick={() => toggleDone(index)}
                    >
                      {task.done ? "Undo" : "Done"}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
