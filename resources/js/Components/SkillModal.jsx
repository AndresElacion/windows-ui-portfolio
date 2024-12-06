import React, { useState } from "react";
import QuickLinks from "./QuickLinks";

import { useZIndex} from './ZInxdexProvider'

export default function SkillModal({ title, content, onClose }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [positions, setPositions] = useState({
    SkillModal: { x: 500, y: 100 },
  });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const { incrementZIndex } = useZIndex()
    const [localZIndex, setLocalZIndex] = useState(1);

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

  const handleClick = () => {
      const newZIndex = incrementZIndex(); // Increment global zIndex
      setLocalZIndex(newZIndex); // Set local zIndex for this modal
      console.log("Current about ZIndex:", newZIndex);
  }

  return (
    <div
      className="absolute inset-0"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
    >
      <div
        className="absolute"
        draggable="true"
        onDragStart={(e) => handleDragStart(e, "SkillModal")}
        onDragEnd={handleDragEnd}
        onClick={incrementZIndex}
        style={{
          top: `${positions["SkillModal"].y}px`,
          left: `${positions["SkillModal"].x}px`,
          width: "1000px", // Set a fixed width
          zIndex: localZIndex
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
            <QuickLinks />

            <div className="text-gray-700 leading-relaxed flex-1 p-6">
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
