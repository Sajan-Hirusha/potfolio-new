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
        return localStorage.getItem("theme") === "dark";
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
    const DarkModeIcons =[
        {
            icon: darkMode ?  lightMode:  darkModeBtn,
            alt: "darkmode"
        },
        { icon: facebookLogo, alt: "facebook" },
        { icon: whatsappLogo, alt: "whatsapp" },
        { icon: linkdinLogo, alt: "linkdin" },
        { icon: gitLogo, alt: "github" }
    ]

    const lightModeIcons = [
        {
            icon: darkMode ?  lightMode:  darkModeBtn,
            alt: "darkmode"
        },
        { icon: lightModeFacebook, alt: "facebook" },
        { icon: lightModeWhatsapp, alt: "whatsapp" },
        { icon: lightModeLinkdinLogo, alt: "linkdin" },
        { icon: lightModeGitHub, alt: "github" }
    ]

    const [isDarkMode, setIsDarkMode] = useState(() =>
        document.documentElement.classList.contains('dark')
    );
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
        currentImagesRef.current = isDarkMode ? DarkModeIcons: lightModeIcons;
    }, [isDarkMode]);

    const currentIcons = isDarkMode ? DarkModeIcons :lightModeIcons;
    return (
        <div
            id="Home"
            className="BaseHomeHeadSection grid grid-cols-12 gap-2 mt-8"
        >
            <div className="col-span-12 md:col-span-11 text-white md:pl-20 md:pr-10 mx-4 md:!mx-10 md:my-2">
                <TopSlider />
            </div>

            <div
                className="hidden md:grid homeIcon grid-cols-1 col-span-1 p-4 text-gray-900 dark:text-white pr-4 lg:pr-10 pt-20"
            >
                {currentIcons.map((item, index) => (
                    <a href="#" key={index} className="cursor-pointer">
                        <img
                            className="w-10 h-8 lg:w-10 lg:h-10 mx-auto"
                            src={item.icon}
                            alt={item.alt}
                            onClick={item.alt === "darkmode" ? () => setDarkMode(prev => !prev) : undefined}
                        />
                        {index < 4 && <br />}
                    </a>
                ))}

            </div>
        </div>
    );
};

export default BaseHomeHeadSection;
