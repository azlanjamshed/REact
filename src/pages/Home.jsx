import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Counter", route: "/counter", color: "bg-blue-500" },
    { title: "Todo App", route: "/todo", color: "bg-green-500" },
    {
      title: "Expense Tracker",
      route: "/expense-tracker",
      color: "bg-yellow-500",
    },
    { title: "Search Filter", route: "/search-filter", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">My React Mini Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.route)}
            className={`${card.color} text-white font-semibold text-xl p-8 rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition-all flex items-center justify-center`}
          >
            {card.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
