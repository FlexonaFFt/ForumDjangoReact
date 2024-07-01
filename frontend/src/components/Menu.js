import React, { useState } from "react";

const StepIndicator = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="text-gray-600 body-font" style={{ height: "150px" }}>
      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        <div className="flex mx-auto flex-wrap mb-20">
          <button
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${
              activeTab === 0
                ? "bg-gray-100 border-blue-500 text-blue-500"
                : "border-gray-200 hover:text-gray-900"
            } tracking-wider rounded-t`}
            onClick={() => handleTabClick(0)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            ЛЕНТА
          </button>
          <button
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${
              activeTab === 1
                ? "bg-gray-100 border-blue-500 text-blue-500"
                : "border-gray-200 hover:text-gray-900"
            } tracking-wider`}
            onClick={() => handleTabClick(1)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            НОВЫЙ ПОСТ
          </button>
          <button
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${
              activeTab === 2
                ? "bg-gray-100 border-blue-500 text-blue-500"
                : "border-gray-200 hover:text-gray-900"
            } tracking-wider`}
            onClick={() => handleTabClick(2)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 12C20 7.58172 16.4183 4 12 4M12 20C14.5264 20 16.7792 18.8289 18.2454 17"></path>
              <path d="M4 12H14M14 12L11 9M14 12L11 15"></path>
            </svg>
            ВХОД
          </button>
          <button
            className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none ${
              activeTab === 3
                ? "bg-gray-100 border-blue-500 text-blue-500"
                : "border-gray-200 hover:text-gray-900"
            } tracking-wider`}
            onClick={() => handleTabClick(3)}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepIndicator;
