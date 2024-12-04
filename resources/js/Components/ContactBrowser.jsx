import { useState } from "react"
import SkillModal from "./SkillModal"
import ContactModal from "./ContactModal"

export default function ContactBrowser({ handleDragEnd, positions, handleDragStart }) {
    const [modalOpen, setModalOpen] = useState({})

    const openModal = (item) => {
        setModalOpen({ ...openModal, [item]: true})
    }

    const closeModal = (item) => {
        setModalOpen({ ...openModal, [item]: false})
    }
    return (
        <>
            <button
                    class="absolute flex flex-col items-center text-white border-2 border-transparent hover:border-gray-500 hover:bg-slate-100 hover:bg-opacity-25 transition"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, 'Contact')}
                    onClick={() => openModal('Contact')}
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

            {/* Render modals */}
            {modalOpen['Contact'] && (
                <ContactModal title="Contact Me" content="Here is some information Contact." onClose={() => closeModal('Contact')} />
            )}
        </>
    )
}