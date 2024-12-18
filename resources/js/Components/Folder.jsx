import React, { useState } from 'react';
import AboutMeFolder from './AboutMeFolder';
import ProjectFolder from './ProjectFolder';
import SkillFolder from './SkillFolder';
import ContactBrowser from './ContactBrowser';
import AboutMeModal from './AboutMeModal';
import ProjectModal from './ProjectModal';
import SkillModal from './SkillModal';
import ContactModal from './ContactModal';

export default function Folder() {
    const [draggedItem, setDraggedItem] = useState(null);
    const [positions, setPositions] = useState({
        'About Me': { x: 20, y: 20 },
        'Projects': { x: 20, y: 110 },
        'Skills': { x: 20, y: 205 },
        'Contact': { x: 16, y: 300 },
    });
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [activeModal, setActiveModal] = useState(null)

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

    const openModal = (modalName) => {
        setActiveModal(modalName)
    }

    const closeModal = (modalName) => {
        setActiveModal(null)
    }
    return (
        <div
            className="flex items-start justify-start h-screen"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div className="grid grid-rows-2 gap-4 p-6">
                {/* About Me Button */}
                <AboutMeFolder handleDragEnd={handleDragEnd} positions={positions} handleDragStart={handleDragStart} onClick={() => openModal("About Me")} />

                {/* Projects Button */}
                <ProjectFolder handleDragEnd={handleDragEnd} positions={positions} handleDragStart={handleDragStart} onClick={() => openModal("Projects")} />

                {/* Skills Button */}
                <SkillFolder handleDragEnd={handleDragEnd} positions={positions} handleDragStart={handleDragStart} onClick={() => openModal("Skills")} />

                {/* Contact Button */}
                <ContactBrowser handleDragEnd={handleDragEnd} positions={positions} handleDragStart={handleDragStart} onClick={() => openModal("Contact")} />
            </div>

            {activeModal === 'About Me' && (
                <AboutMeModal title="About Me" content="This is the about me modal content" onClose={closeModal} />
            )}
            {activeModal === 'Projects' && (
                <ProjectModal title="Projects" content="This is the projects modal content" onClose={closeModal} />
            )}
            {activeModal === 'Skills' && (
                <SkillModal title="Skills" content="This is the Skills modal content" onClose={closeModal} />
            )}
            {activeModal === 'Contact' && (
                <ContactModal title="Contact" content="This is the Contact modal content" onClose={closeModal} />
            )}
        </div>
    );
}
