import { useState } from "react"
import SkillModal from "./SkillModal"

export default function SkillFolder({ handleDragEnd, positions, handleDragStart }) {
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
                    className="absolute flex flex-col items-center text-white border-2 border-transparent hover:border-gray-500 hover:bg-slate-100 hover:bg-opacity-25 transition"
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, 'Skills')}
                    onClick={() => openModal('Skills')}
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

            {/* Render modals */}
            {modalOpen['Skills'] && (
                <SkillModal title="Skills" content="Here is some information skills." onClose={() => closeModal('Skills')} />
            )}
        </>
    )
}