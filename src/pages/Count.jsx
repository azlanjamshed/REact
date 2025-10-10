import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 10) setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 10) {
      setCount(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Counter App</h1>

      <input
        type="number"
        value={count}
        onChange={handleChange}
        className="w-24 text-center text-lg border-2 border-gray-400 rounded px-4 py-2 mb-6 focus:outline-none focus:border-blue-500"
      />

      <div className="flex gap-4">
        <button
          onClick={increaseCount}
          disabled={count >= 10}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Increase
        </button>
        <button
          onClick={decreaseCount}
          disabled={count <= 0}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      <p className="mt-6 text-gray-700 text-lg">
        Current Count: <span className="font-bold">{count}</span>
      </p>
    </div>
  );
};

export default Count;
