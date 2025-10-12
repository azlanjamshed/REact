import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Main() {
  const [activeTab, setActiveTab] = useState("home"); // default = home

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Tabs Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("home")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "home" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setActiveTab("about")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "about" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "contact" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Contact
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        {activeTab === "home" && <Home />}
        {activeTab === "about" && <About />}
        {activeTab === "contact" && <Contact />}
      </div>
      <p className="bg-red-500 text-white p-2 mt-4 rounded">
        Create using{" "}
        <span className="text-blue-800 font-bold"> tab component</span> not
        using react router
      </p>
    </div>
  );
}
