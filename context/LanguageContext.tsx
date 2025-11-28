'use client'

import { createContext, useState, useContext, useEffect } from "react";

type Language = "EN" | "ES"; 

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {

    const [language, setLanguage] = useState<Language>("EN");

    useEffect(() => {
        const saveLanguage = localStorage.getItem("language") as Language | null;
        if (saveLanguage) {
            setLanguage(saveLanguage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language])

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