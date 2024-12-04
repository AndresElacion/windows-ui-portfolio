import React, { useState } from "react";

export default function ContactModal({ title, content, onClose }) {
    const [draggedItem, setDraggedItem] = useState(null);
    const [positions, setPositions] = useState({
        Contact: { x: 400, y: 120 },
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
            onDragStart={(e) => handleDragStart(e, "Contact")}
            onDragEnd={handleDragEnd}
            style={{
            top: `${positions["Contact"].y}px`,
            left: `${positions["Contact"].x}px`,
            width: "800px",
            }}
        >
            <div className="bg-gray-100 rounded-lg shadow-lg border border-gray-300 flex flex-col overflow-hidden">
                {/* Browser-like Title Bar */}
                <div className="bg-gray-200 flex items-center justify-between px-4 py-2 border-b border-gray-300">
                    {/* Tabs */}
                    <div className="flex space-x-2">
                    <div className="bg-white border border-gray-300 px-3 py-1 rounded-t-lg text-sm shadow-md">
                        {title}
                    </div>
                    <div className="text-gray-500 px-3 py-1 text-sm">New Tab</div>
                    </div>
                    {/* Close Button */}
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
                            className="w-5 h-5"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Search Bar */}
                <div className="bg-gray-100 flex items-center px-4 py-2 space-x-2 border-b border-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m2.7-6.15a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search Google or type a URL"
                        className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button className="text-blue-500 hover:text-blue-600 text-sm">
                    Refresh
                    </button>
                </div>

                {/* Content Area */}
                <div className="bg-white p-4 text-gray-700 text-sm">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
