import './SideMenu.css'

const SideMenu = ({ isSideMenuOpen, toggleSideMenu }) => {
    return (
        <div
            className={` side-menu fixed inset-y-0 right-0 z-20 bg-black bg-opacity-90 w-[400px] ${isSideMenuOpen ? 'open' : ''}`}
        >
            <div className="flex justify-start p-4">
                <button
                    type="button"
                    onClick={toggleSideMenu}
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
                <a
                    href="#"
                    className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70"
                >
                    Features
                </a>
                <a
                    href="#"
                    className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70"
                >
                    Solutions
                </a>
                <a
                    href="#"
                    className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70"
                >
                    Resources
                </a>
                <a
                    href="#"
                    className="text-lg font-medium text-white transition-all duration-200 focus:text-opacity-70"
                >
                    Pricing
                </a>
            </nav>
        </div>
    );
};

export default SideMenu;
