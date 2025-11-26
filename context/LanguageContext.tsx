'use client'

import { createContext, useState, useContext } from "react";

type LanguageContextType = {
    language: string;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {

    const [language, setLanguage] = useState("EN");

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "EN" ? "ES" : "EN"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used inside <LanguageProvider>");
    }
    return context;
}