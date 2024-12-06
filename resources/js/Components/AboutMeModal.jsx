import React, { useState, useEffect } from "react";
import QuickLinks from "./QuickLinks";
import { useZIndex } from './ZInxdexProvider';

export default function AboutMeModal({ title, onClose }) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [positions, setPositions] = useState({
    AboutMeModal: { x: 500, y: 100 },
  });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const { incrementZIndex } = useZIndex();
  const [localZIndex, setLocalZIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false); // Controls visibility for animations

  // Trigger opening animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

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
  };

  const handleClose = () => {
    setIsVisible(false); // Trigger closing animation
    setTimeout(onClose, 300); // Delay unmounting to allow the animation to finish
  };

  return (
    <div
      className="absolute inset-0"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
    >
      <div
        className={`bg-white rounded-2xl shadow-xl h-3/4 border border-gray-300 flex flex-col absolute transition-transform duration-300 ease-in-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, "AboutMeModal")}
        onDragEnd={handleDragEnd}
        style={{
          top: `${positions["AboutMeModal"].y}px`,
          left: `${positions["AboutMeModal"].x}px`,
          width: "1000px", // Set a fixed width
          zIndex: localZIndex,
        }}
      >
        <div className="bg-blue-100 rounded-t-2xl flex justify-between items-center border-b border-gray-200 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="50" height="30">
            {/* <!-- Notepad Icon --> */}
            <rect x="56" y="84" width="144" height="144" rx="8" fill="#e2803b" />
            <rect x="56" y="70" width="144" height="144" rx="8" fill="#d4d4d4" />
            <rect x="56" y="56" width="144" height="144" rx="8" fill="#28a1f5" />
            <rect x="56" y="70" width="144" height="8" rx="3" fill="#0262a4" />
            <rect x="56" y="100" width="144" height="8" rx="3" fill="#0262a4" />
            <rect x="56" y="120" width="144" height="8" rx="3" fill="#0262a4" />
            <rect x="56" y="140" width="144" height="8" rx="3" fill="#0262a4" />
            <rect x="56" y="160" width="144" height="8" rx="3" fill="#0262a4" />

            {/* <!-- Spiral Binding --> */}
            <circle cx="75" cy="65" r="8" fill="#070078" />
            <circle cx="100" cy="65" r="8" fill="#070078" />
            <circle cx="125" cy="65" r="8" fill="#070078" />
            <circle cx="155" cy="65" r="8" fill="#070078" />
            <circle cx="185" cy="65" r="8" fill="#070078" />
          </svg>

          <h2 className="text-lg font-semibold text-gray-800">{title} - Notepad</h2>
          <button
            onClick={handleClose}
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

        <div className="text-gray-700 leading-relaxed flex-1 p-6">
          <h1 className="text-5xl font-bold">Andres Elacion III</h1>
          <div className="mt-5">
            <p className="text-lg">
              He is a Full Stack Web Developer based in The Philippines. He`s creating stunning, eye-catching and user-friendly websites and web applications.
            </p>
            <br />

            <p className="text-lg">
              He has a solid foundation in deploying applications on AWS EC2, GCP VM and setting up SSL certificates, continuously enhancing his skills in cloud computing.
            </p>
            <br />
            <p className="text-lg">
              When he`s not coding, he loves to play guitar and online games. Even though he`s not very good at it, it does help him bring out his creative side when building websites.
              <span className="animate-slow-ping">|</span>
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
