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
        <div className="Header mb-28">
            <header className="fixed top-0 left-0 right-0 bg-[#021a2d] dark:bg-black border-b border-gray-700 z-50">
                <div className=" mx-auto max-w-full sm:px-6 lg:px-20 py-2">
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        {/* Hamburger Button */}
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="ml-2 navbar-toggler inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
                        >
                            <svg className="icon headerIcon" width="20" height="20" fill="white" viewBox="0 0 24 24">
                                <rect className="line line1" x="1" y="4" width="18" height="2" rx="1"/>
                                <rect className="line line2" x="1" y="12" width="20" height="2" rx="1"/>
                                <rect className="line line3" x="1" y="20" width="22" height="2" rx="1"/>
                            </svg>
                        </button>

                        <div className="flex-shrink-0 ml-7">
                            <a
                                href="#"
                                title=""
                                className="flex flex-row-reverse md:flex-row text-xs text-white items-center justify-center tracking-extra"
                            >
                                <img
                                    className="w-auto h-14 sm:h-16 rounded-full md:ml-5 ml-2 mr-4"
                                    src={sajanImg}
                                    alt="Logo"
                                />
                                SAJAN HIRUSHA
                            </a>
                        </div>


                        {/* Desktop Menu */}
                        <div className="hidden md:flex md:items-center md:space-x-10">
                            <a href="#Home"
                               className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Home</a>
                            <a href="#AboutUs01"
                               className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">About</a>
                            <a href="#Skills"
                               className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Skills</a>
                            <a href="#Education"
                               className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Education</a>
                            <a href="#Projects"
                               className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Projects</a>
                            <a href="#ContactUs"
                               className="text-sm font-medium text-white transition-all duration-200 2xl:text-base hover:text-opacity-70 focus:text-opacity-70">Contacts</a>
                            <button
                                type="button"
                                onClick={toggleSideMenu}
                                className="navbar-toggler inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-950"
                            >
                                <svg className="icon headerIcon" width="20" height="20" fill="white"
                                     viewBox="0 0 24 24">
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
                        <div className="fixed inset-0 z-10 bg-[#021a2d] dark:bg-black bg-opacity-90">
                        <div className="flex justify-end p-4">
                                <button
                                    type="button"
                                    onClick={toggleMobileMenu}
                                    className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-800 hover:bg-gray-800"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className="flex flex-col items-center mt-10 space-y-4">
                                <a href="#Home" onClick={toggleMobileMenu}
                                   className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70">
                                    Home
                                </a>
                                <a href="#AboutUs02" onClick={toggleMobileMenu}
                                   className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70">
                                    About
                                </a>
                                <a href="#Skills" onClick={toggleMobileMenu}
                                   className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70">
                                    Skills
                                </a>
                                <a href="#Education" onClick={toggleMobileMenu}
                                   className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70">
                                    Education
                                </a>
                                <a href="#Projects" onClick={toggleMobileMenu}
                                   className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70">
                                    Projects
                                </a>
                                <a href="#ContactUs" onClick={toggleMobileMenu}
                                   className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70">
                                    Contact Us
                                </a>
                            </nav>

                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;
