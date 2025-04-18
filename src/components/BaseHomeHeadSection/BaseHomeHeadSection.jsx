import {useEffect, useRef, useState} from "react";
import lightMode from "../../assets/icons/lightMode.png";
import darkModeBtn from "../../assets/icons/lightDarkMode.png";
import facebookLogo from "../../assets/icons/facebook.png";
import whatsappLogo from "../../assets/icons/whatsapp.png";
import linkdinLogo from "../../assets/icons/linkdin.png";
import lightModeLinkdinLogo from "../../assets/icons/lightModelinkedin.png";
import lightModeFacebook from "../../assets/icons/lightModeFacebook.png";
import lightModeWhatsapp from "../../assets/icons/lightModeWhatsapp.png";
import lightModeGitHub from "../../assets/icons/lightModeGithub.png";
import gitLogo from "../../assets/icons/github.png";
import TopSlider from "../BaseHomeSlider/TopSlider.jsx";

const BaseHomeHeadSection = () => {

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === null) return true;
        return savedTheme === "dark";
    });

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const DarkModeIcons = [
        {
            icon: darkMode ? lightMode : darkModeBtn,
            alt: "darkmode"
        },
        {icon: facebookLogo, alt: "facebook"},
        {icon: whatsappLogo, alt: "whatsapp"},
        {icon: linkdinLogo, alt: "linkdin"},
        {icon: gitLogo, alt: "github"}
    ]

    const lightModeIcons = [
        {
            icon: darkMode ? lightMode : darkModeBtn,
            alt: "darkmode"
        },
        {icon: lightModeFacebook, alt: "facebook"},
        {icon: lightModeWhatsapp, alt: "whatsapp"},
        {icon: lightModeLinkdinLogo, alt: "linkdin"},
        {icon: lightModeGitHub, alt: "github"}
    ]

    const [isDarkMode, setIsDarkMode] = useState(darkMode);
    const currentImagesRef = useRef(isDarkMode ? DarkModeIcons : lightModeIcons);

    // Dark mode detection
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const darkMode = document.documentElement.classList.contains('dark');
                    setIsDarkMode(darkMode);
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        currentImagesRef.current = isDarkMode ? DarkModeIcons : lightModeIcons;
    }, [isDarkMode]);

    const currentIcons = isDarkMode ? DarkModeIcons : lightModeIcons;

    // Toggle handler for mobile switch
    const handleToggleChange = (e) => {
        setDarkMode(e.target.checked);
    };

    return (
        <div
            id="Home"
            className="BaseHomeHeadSection grid grid-cols-12 gap-2 mt-8"
        >
            <div
                className="col-span-12 md:col-span-11 text-white md:pl-10 md:pr-0 dark:md:pl-20 dark:md:pr-10 mx-4 md:!mx-10 dark:md:my-2">
                <label className="absolute right-7 z-[10] md:hidden inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        id="theme-toggle"
                        className="sr-only peer"
                        checked={darkMode}
                        onChange={handleToggleChange}
                    />
                    <div
                        className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {darkMode ? 'Dark' : 'Light'}
                    </span>
                </label>
                <TopSlider/>
            </div>

            <div
                className="hidden md:grid homeIcon grid-cols-1 col-span-1 p-4 text-gray-900 dark:text-white pr-4 lg:pr-10 pt-10"
            >
                {currentIcons.map((item, index) => (
                    <a href="#" key={index} className="cursor-pointer">
                        <img
                            className="w-10 h-8 lg:w-14 lg:h-14 dark:lg:w-10 dark:lg:h-10 mx-auto"
                            src={item.icon}
                            alt={item.alt}
                            onClick={item.alt === "darkmode" ? () => setDarkMode(prev => !prev) : undefined}
                        />
                        {index < 4 && <br/>}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BaseHomeHeadSection;