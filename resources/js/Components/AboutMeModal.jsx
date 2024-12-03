import React, { useState } from 'react';

export default function AboutMeModal ({ title, content, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-1/2">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p>{content}</p>
                <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};