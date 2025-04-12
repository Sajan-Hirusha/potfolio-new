import './SideMenu.css';

const SideMenu = ({ isSideMenuOpen, toggleSideMenu }) => {
    const tags = [
        { name: "Web Development", color: "bg-blue-500" },
        { name: "UI/UX Design", color: "bg-green-500" },
        { name: "SEO Optimization", color: "bg-red-500" },
        { name: "Consultation", color: "bg-yellow-500" },
        { name: "App Development", color: "bg-purple-500" },
    ];

    return (
        <div
            className={`side-menu fixed inset-y-0 right-0 z-20 bg-[#021a2d] dark:bg-black bg-opacity-90 w-[400px] ${isSideMenuOpen ? 'open' : ''}`}
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

                <h6 className="text-xl text-[#D2042D] text-center !mt-10">
                    Intro About Working Experience and Services
                </h6>
                <p className="text-lg tracking-wide text-white m-10 text-justify px-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim id est laborum.
                </p>

                <div className="!w-[82%] service-tags-container overflow-hidden mt-5 mx-auto ">
                    <div className="service-tags flex space-x-4">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className={`${tag.color} text-white py-1 px-3 rounded-md text-sm`}
                            >
                {tag.name}
              </span>
                        ))}
                        {tags.map((tag, index) => (
                            <span
                                key={index + tags.length}
                                className={`${tag.color} text-white py-1 px-3 rounded-md text-sm`}
                            >
                {tag.name}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
