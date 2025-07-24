import { listen } from "@/utils/listen";
import React, { createContext, useContext, useState, type ReactNode } from "react";
import "@/mock"
import { useNavigate } from '@tanstack/react-router'
import { useStore } from "@/lib/zustand/zustand";

interface VisibleContextType {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisibleContext = createContext<VisibleContextType | undefined>(undefined);

export function VisibleProvider({ children }: { children: ReactNode }) {
    const [isVisible, setIsVisible] = useState(false);
    const { count, inc } = useStore();
    
    const navigate = useNavigate();


    listen<{ open: boolean }>("StateVisible", (payload) => {
        setIsVisible(payload.open)
    })


    listen<{ path: string }>("navigateTo", (payload) => {
        navigate({ to: `${payload.path}` })
    })



    return isVisible && (
        <VisibleContext.Provider value={{ isVisible, setIsVisible }}>
            {children}
        </VisibleContext.Provider>
    );
}

export function useVisible() {
    const context = useContext(VisibleContext);
    if (!context) {
        throw new Error("useVisible must be used within a VisibleProvider");
    }
    return context;
}
