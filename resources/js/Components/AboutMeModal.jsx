import React, { useState } from "react";

export default function AboutMeModal({ title, content, onClose }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [positions, setPositions] = useState({
    AboutMeModal: { x: 20, y: 20 },
  });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (e, itemName) => {
    setDraggedItem(itemName);
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newPosition = {
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    };
    setPositions((prevPositions) => ({
      ...prevPositions,
      [draggedItem]: newPosition,
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="absolute inset-0"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div
        className="absolute"
        draggable="true"
        onDragStart={(e) => handleDragStart(e, "AboutMeModal")}
        onDragEnd={handleDragEnd}
        style={{
          top: `${positions["AboutMeModal"].y}px`,
          left: `${positions["AboutMeModal"].x}px`,
          width: "1000px", // Set a fixed width
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl h-3/4 border border-gray-300 flex flex-col">
          <div className="bg-blue-100 rounded-t-2xl flex justify-between items-center border-b border-gray-200 p-2">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1">
            <div className="w-1/4 bg-gray-100 border-r rounded-2xl border-gray-300 p-4">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#FFB900 ">
                  <path d="M12 2l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 16l-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L12 2z" />
                </svg>
                <h3 className="text-gray-800 pt-1 mb-4 ml-2">
                    Quick Access
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center hover:bg-blue-100 hover:text-blue-500 rounded-md transition cursor-pointer p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#0078D4">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M12 14c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" />
                  </svg>
                  <span className="pt-1 ml-2">About Me</span>
                </li>
                <li className="flex items-center hover:bg-blue-100 hover:text-blue-500 rounded-md transition cursor-pointer p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#FFB900">
                    <path d="M10 4l2 2h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6z" />
                  </svg>
                  <span className="pt-1 ml-2">Projects</span>
                </li>
                <li className="flex items-center hover:bg-blue-100 hover:text-blue-500 rounded-md transition cursor-pointer p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#7A7574">
                    <path d="M10.2 2.1c.5 0 .9.4 1 .9l.3 1.7 1.6 1.6 1.6-.3c.5-.1.9.2 1 .7l1.2 4c.1.5-.1 1-.5 1.3l-3.7 3.7 6.3 6.3-1.4 1.4-6.3-6.3-3.7 3.7c-.3.3-.8.5-1.3.5l-4-1.2c-.5-.1-.8-.5-.7-1l.3-1.6 1.6-1.6-1.7-.3c-.5-.1-.9-.5-.9-1V2.1h8.1zm2.9 4.9l-1.4-1.4-2.8 2.8 1.4 1.4 2.8-2.8z" />
                  </svg>
                  <span className="pt-1 ml-2">Skills</span>
                </li>
              </ul>
            </div>

            <div className="text-gray-700 leading-relaxed flex-1 p-6">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
