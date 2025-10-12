import React, { useState } from "react";

import FAQ from "./FAQ";
import MFAQ from "./MFAQ";
const Main = () => {
  const [activeTab, setActiveTab] = useState("faq");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Tabs Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("faq")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "faq" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          FAQ
        </button>
        <button
          onClick={() => setActiveTab("mfaq")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "mfaq" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          MFAQ
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        {activeTab === "faq" && <FAQ />}
        {activeTab === "mfaq" && <MFAQ />}
      </div>
      <p className="bg-red-500 text-white p-2 mt-4 rounded">
        Here in FAQ you can only open one FAQ at a time. But on MFAQ you can
        open multiple FAQ at a time
      </p>
    </div>
  );
};

export default Main;
