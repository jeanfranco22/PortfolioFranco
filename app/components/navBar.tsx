'use client'

import { useLanguage } from '../../context/LanguageContext';

export default function NavBar() {
  
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className="bg-gradient-to-r from-[#0a1d2f] to-[#0f2d47] border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-5 py-5">
                <ul className="flex justify-end gap-10 text-white font-jakarta text-[15px] tracking-wide">
                    <li><a className="opacity-80 hover:opacity-100 transition" href="/Home">Home</a></li>
                    <li><a className="opacity-80 hover:opacity-100 transition" href="/about">About</a></li>
                    <li><a className="opacity-80 hover:opacity-100 transition" href="/projects">Projects</a></li>

                    <li>
                        <button 
                            className="opacity-80 hover:opacity-100 transition cursor-pointer"
                            onClick={toggleLanguage}
                        >
                            {language}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}