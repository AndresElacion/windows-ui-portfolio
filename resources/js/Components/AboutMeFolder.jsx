import { useState } from "react"
import AboutMeModal from '@/Components/AboutMeModal'

export default function AboutMeFolder({ handleDragEnd, positions, handleDragStart}) {
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
                className="group absolute flex flex-col items-center text-white border-2 border-transparent hover:border-gray-500 hover:bg-slate-100 hover:bg-opacity-25 transition"
                draggable="true"
                onDragStart={(e) => handleDragStart(e, 'About Me')}
                onDragEnd={handleDragEnd}
                onClick={() => openModal('About Me')}
                style={{
                    top: `${positions['About Me'].y}px`,
                    left: `${positions['About Me'].x}px`,
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-16 h-12 group-hover:scale-105 transition-transform duration-300">
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
                <span className="mt-2 text-sm font-semibold">About Me</span>
            </button>

            {/* Render modals */}
            {modalOpen['About Me'] && (
                <AboutMeModal title="About Me" onClose={() => closeModal('About Me')} />
            )}
        </>
    )
}