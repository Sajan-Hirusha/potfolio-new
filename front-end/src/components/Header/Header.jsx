import sajanImg from '../../assets/images/sajan.jpg'
import { useState } from "react";
import SideMenu from "./SideMenu.jsx";
import './Header.css'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    return (
        <div className="Header mb-36">
            <header className="fixed top-0 left-0 right-0 bg-black border-b border-gray-700 z-50">
                <div className="px-10 mx-auto max-w-full sm:px-6 lg:px-20 py-2">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex text-xs text-white items-center justify-center tracking-extra">
                                <img
                                    className="w-auto h-16 rounded-full mr-5"
                                    src={sajanImg}
                                    alt="Logo"
                                />
                                SAJAN HIRUSHA
                            </a>
                        </div>

                        {/* Hamburger Button */}
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="navbar-toggler inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
                        >
                            <svg className="icon headerIcon" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                <rect className="line line1" x="5" y="4" width="18" height="2" rx="1"/>
                                <rect className="line line2" x="3" y="12" width="20" height="2" rx="1"/>
                                <rect className="line line3" x="1" y="20" width="22" height="2" rx="1"/>
                            </svg>
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-10">
                            <a href="#" className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Home</a>
                            <a href="#" className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">About</a>
                            <a href="#" className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Skills</a>
                            <a href="#" className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Education</a>
                            <a href="#" className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Projects</a>
                            <a href="#" className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Contacts</a>
                            <button
                                type="button"
                                onClick={toggleSideMenu}
                                className="navbar-toggler inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-950"
                            >
                                <svg className="icon headerIcon" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                    <rect className="line line1" x="5" y="4" width="18" height="2" rx="1"/>
                                    <rect className="line line2" x="3" y="12" width="20" height="2" rx="1"/>
                                    <rect className="line line3" x="1" y="20" width="22" height="2" rx="1"/>
                                </svg>
                            </button>
                        </div>
                    </nav>

                    {/* Side Menu */}
                    {isSideMenuOpen && (
                        <SideMenu isSideMenuOpen={isSideMenuOpen} toggleSideMenu={toggleSideMenu}/>
                    )}

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <SideMenu isSideMenuOpen={isMobileMenuOpen} toggleSideMenu={toggleMobileMenu}/>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
