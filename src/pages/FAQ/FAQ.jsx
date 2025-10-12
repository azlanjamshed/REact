import React, { useState } from "react";

const faqData = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind is a utility-first CSS framework for styling websites quickly.",
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI in React.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
          FAQ Section
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 font-semibold text-gray-800 flex justify-between items-center"
              >
                {item.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 bg-white border-t">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
