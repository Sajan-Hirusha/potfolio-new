import {useState} from "react";
import './SideMenu.css'
const SideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-lg font-bold">MyApp</div>

            {/* Menu Icon */}
            <button
                onClick={toggleMenu}
                className="text-white focus:outline-none sm:hidden"
                aria-label="Toggle menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded-lg w-48">
                    <ul>
                        <li className="border-b p-2 hover:bg-blue-100">
                            <a href="#">Home</a>
                        </li>
                        <li className="border-b p-2 hover:bg-blue-100">
                            <a href="#">About</a>
                        </li>
                        <li className="p-2 hover:bg-blue-100">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default SideMenu;
