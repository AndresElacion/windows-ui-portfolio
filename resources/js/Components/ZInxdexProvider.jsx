import React, { createContext, useContext, useState } from 'react'

const ZIndexContext = createContext()

export const ZIndexProvider = ({ children }) => {
    const [zIndexState, setZIndexState] = useState({
        currentZIndex: 1
    })

    const incrementZIndex = () => {
        setZIndexState((prev) => ({currentZIndex: prev.currentZIndex + 1}))
        return zIndexState.currentZIndex + 1
    }

    return (
        <ZIndexContext.Provider value={{ zIndexState, incrementZIndex}}>
            {children}
        </ZIndexContext.Provider>
    )
}

export const useZIndex = () => useContext(ZIndexContext)