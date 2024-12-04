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
          <div className="bg-blue-100 rounded-t-2xl flex justify-between items-center border-b border-gray-200 p-5">
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
              <h3 className="text-gray-800 font-semibold text-lg mb-4">
                Explorer
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-500 rounded-md px-2 py-1 transition cursor-pointer">
                  <span className="material-icons">folder</span>
                  <span>Documents</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-500 rounded-md px-2 py-1 transition cursor-pointer">
                  <span className="material-icons">photo</span>
                  <span>Pictures</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-500 rounded-md px-2 py-1 transition cursor-pointer">
                  <span className="material-icons">music_note</span>
                  <span>Music</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-500 rounded-md px-2 py-1 transition cursor-pointer">
                  <span className="material-icons">video_library</span>
                  <span>Videos</span>
                </li>
                <li className="flex items-center space-x-2 hover:bg-blue-100 hover:text-blue-500 rounded-md px-2 py-1 transition cursor-pointer">
                  <span className="material-icons">download</span>
                  <span>Downloads</span>
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
