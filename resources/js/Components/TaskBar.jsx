import React, { useState, useEffect } from "react";

export default function TaskBar() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
        const singaporeTime = new Date().toLocaleDateString("en-US", {
            timeZone: "Asia/Singapore",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
        setTime(singaporeTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const taskBarImage = [
        'visual-studio-code.svg',
        'xampp.svg'
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800/50 text-white flex justify-between px-6 py-2 shadow-lg">
            <div className="flex items-center space-x-4 mx-auto">
                <div className="flex items-center space-x-3">
                    <div className="grid grid-cols-2 gap-1 rounded-md shadow-md cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm"></div>
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm"></div>
                    </div>
                    <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                        </svg>
                    </div>
                    
                    {taskBarImage.map((image, index) => (
                        <div key={index} className="w-6 h-6 shadow-md cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                            <img src={`/taskbar/${image}`} alt={`Taskbar Icon ${image}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center ml-auto">
                <span>{time}</span>
            </div>
        </div>
    );
}
