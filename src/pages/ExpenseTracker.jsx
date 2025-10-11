import React, { useState } from "react";

const ExpenseTracker = () => {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("income");
  const [transaction, setTransaction] = useState([]);

  const addTransaction = () => {
    if (!description || !amount) return;
    setTransaction([
      ...transaction,
      { description, amount: Number(amount), type },
    ]);
    setAmount("");
    setDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction();
  };
  const totalIncome = transaction
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transaction
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Expense Tracker</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Add Transaction
        </button>
      </form>

      {/* Transaction List */}
      <div className="space-y-2">
        {transaction.length === 0 ? (
          <p className="text-center text-gray-400">No transactions yet</p>
        ) : (
          transaction.map((t, i) => (
            <div
              key={i}
              className={`flex justify-between p-3 rounded shadow-sm ${
                t.type === "income"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <span>{t.description}</span>
              <span>{t.amount}</span>
            </div>
          ))
        )}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded shadow flex justify-between">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 font-semibold">Income</span>
          <span className="text-green-600 font-bold">{totalIncome}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 font-semibold">Expense</span>
          <span className="text-red-600 font-bold">{totalExpense}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-500 font-semibold">Balance</span>
          <span className="text-blue-600 font-bold">{balance}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
