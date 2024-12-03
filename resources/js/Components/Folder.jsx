import React, { useState } from 'react';

export default function Folder() {
    const [draggedItem, setDraggedItem] = useState(null);
    const [positions, setPositions] = useState({
        'About Me': { x: 20, y: 20 },
        'Projects': { x: 20, y: 110 },
        'Skills': { x: 20, y: 205 },
        'Contact': { x: 16, y: 300 },
    });
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const handleDragStart = (e, itemName) => {
        setDraggedItem(itemName);
        // Calculate the offset (mouse position relative to the element)
        const offsetX = e.clientX - e.target.getBoundingClientRect().left;
        const offsetY = e.clientY - e.target.getBoundingClientRect().top;
        setDragOffset({ x: offsetX, y: offsetY });
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    const handleDrop = (e) => {
        e.preventDefault();

        // Adjust the drop position by subtracting the drag offset
        const newPosition = {
            x: e.clientX - dragOffset.x,
            y: e.clientY - dragOffset.y,
        };

        // Update the position of the dragged item
        setPositions((prevPositions) => ({
            ...prevPositions,
            [draggedItem]: newPosition,
        }));
    };

    const handleDragOver = (e) => {
        // Allow dropping anywhere by preventing the default behavior
        e.preventDefault();
    };

    return (
        <div
            className="flex items-start justify-start h-screen"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div
                className="grid grid-rows-2 gap-4 p-6"

            >
                {/* About Me Button */}
                <button
                    className="group absolute flex flex-col items-center text-white border-2 border-transparent hover:border-gray-500 hover:bg-slate-100 hover:bg-opacity-25 transition"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, 'About Me')}
                    onDragEnd={handleDragEnd}
                    style={{
                        top: `${positions['About Me'].y}px`,
                        left: `${positions['About Me'].x}px`,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        className="w-16 h-12 group-hover:scale-105 transition-transform duration-300"
                    >
                        {/* Folder Base */}
                        <rect x="4" y="20" width="56" height="36" rx="4" fill="#FFD966" />
                        <path
                            d="M60 24H4v28a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V24z"
                            fill="#FFC83D"
                        />
                        {/* Folder Tab */}
                        <path
                            d="M4 20V16a4 4 0 0 1 4-4h16l4 4h32a4 4 0 0 1 4 4v4H4z"
                            fill="#F5BF3A"
                        />
                        {/* Shadow for Depth */}
                        <rect x="4" y="36" width="56" height="2" fill="#E3A820" opacity="0.7" />
                        {/* "About Me" Placeholder Icon */}
                        <circle cx="32" cy="36" r="8" fill="#F3F3F3" />
                        <circle cx="32" cy="34" r="3" fill="#A0A0A0" />
                        <path
                            d="M28 40c0-2.2 1.8-4 4-4h0c2.2 0 4 1.8 4 4"
                            stroke="#A0A0A0"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    </svg>
                    <span className="mt-2 text-sm font-semibold">About Me</span>
                </button>

                {/* Projects Button */}
                <button
                    className="group absolute flex flex-col items-center text-white border-2 border-transparent hover:border-gray-500 hover:bg-slate-100 hover:bg-opacity-25 transition"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, 'Projects')}
                    onDragEnd={handleDragEnd}
                    style={{
                        top: `${positions['Projects'].y}px`,
                        left: `${positions['Projects'].x}px`,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        className="w-16 h-12 group-hover:scale-105 transition-transform duration-300"
                    >
                        {/* Folder Base */}
                        <rect x="4" y="20" width="56" height="36" rx="4" fill="#FFD966" />
                        <path
                            d="M60 24H4v28a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V24z"
                            fill="#FFC83D"
                        />
                        {/* Folder Tab */}
                        <path
                            d="M4 20V16a4 4 0 0 1 4-4h16l4 4h32a4 4 0 0 1 4 4v4H4z"
                            fill="#F5BF3A"
                        />
                        {/* Shadow for Depth */}
                        <rect x="4" y="36" width="56" height="2" fill="#E3A820" opacity="0.7" />
                    </svg>
                    <span className="mt-2 text-sm font-semibold">Projects</span>
                </button>

                {/* Skills Button */}
                <button
                    className="absolute flex flex-col items-center text-white border-2 border-transparent hover:border-gray-500 hover:bg-slate-100 hover:bg-opacity-25 transition"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, 'Skills')}
                    onDragEnd={handleDragEnd}
                    style={{
                        top: `${positions['Skills'].y}px`,
                        left: `${positions['Skills'].x}px`,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        className="w-16 h-12 group-hover:scale-105 transition-transform duration-300"
                    >
                        {/* Folder Base */}
                        <rect x="4" y="20" width="56" height="36" rx="4" fill="#FFD966" />
                        <path
                            d="M60 24H4v28a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V24z"
                            fill="#FFC83D"
                        />
                        {/* Folder Tab */}
                        <path
                            d="M4 20V16a4 4 0 0 1 4-4h16l4 4h32a4 4 0 0 1 4 4v4H4z"
                            fill="#F5BF3A"
                        />
                        {/* Shadow for Depth */}
                        <rect x="4" y="36" width="56" height="2" fill="#E3A820" opacity="0.7" />
                    </svg>
                    <span className="mt-2 text-sm font-semibold">Skills</span>
                </button>

                <button
                    class="absolute flex flex-col items-center text-white border-2 border-transparent hover:border-gray-500 hover:bg-slate-100 hover:bg-opacity-25 transition"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, 'Contact')}
                    onDragEnd={handleDragEnd}
                    style={{
                        top: `${positions['Contact'].y}px`,
                        left: `${positions['Contact'].x}px`,
                    }}
                >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 64 64" 
                            class="w-16 h-12 group-hover:scale-105 transition-transform duration-300"
                        >
                            {/* Background Bubble */} 
                            <path 
                            d="M10 16a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H20l-10 8V16z" 
                            fill="#4285F4" 
                            />
                            {/* Google Colors for the Inner Message */} 
                            <circle cx="24" cy="24" r="3" fill="#EA4335" />
                            <circle cx="32" cy="24" r="3" fill="#FBBC05" />
                            <circle cx="40" cy="24" r="3" fill="#34A853" />
                            <rect x="24" y="30" width="16" height="4" rx="2" fill="#F4B400" />
                        </svg>
                        <span class="mt-2 text-sm font-semibold">Contact Me</span>
                    </button>
            </div>
        </div>
    );
}
