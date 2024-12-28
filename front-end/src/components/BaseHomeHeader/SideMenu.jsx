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
            <div className="side-menu-body">
                <h3 className="text-base text-white text-center !mt-10 blinking-text">
                    SAJAN HIRUSHA
                </h3>

            </div>
        </div>
    );
};

export default SideMenu;
