import React, { useState } from 'react';
import AboutMeFolder from './AboutMeFolder';
import ProjectFolder from './ProjectFolder';
import SkillFolder from './SkillFolder';

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
                <AboutMeFolder handleDragEnd={handleDragEnd} positions={positions} handleDragStart={handleDragStart} />

                {/* Projects Button */}
                <ProjectFolder handleDragEnd={handleDragEnd} positions={positions} handleDragStart={handleDragStart}/>

                {/* Skills Button */}
                <SkillFolder handleDragEnd={handleDragEnd} positions={positions} handleDragStart={handleDragStart}/>

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
