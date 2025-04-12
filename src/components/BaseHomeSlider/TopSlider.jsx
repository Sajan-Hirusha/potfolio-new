import {useState, useEffect, useRef} from "react";
import slider01 from '../../assets/images/slider01.jpg';
import slider02 from '../../assets/images/slider02.jpg';
import slider03 from '../../assets/images/slider03.jpg';
import skillsImage01 from '../../assets/images/reactHeader.png';
import skillsImage02 from '../../assets/images/nodeHeader.png';
import skillsImage03 from '../../assets/images/mongoDBHeader.png';
import skillsImage04 from '../../assets/images/tailwindCsssHeader.png';
import projectImage01 from '../../assets/images/project01.png';
import projectImage02 from '../../assets/images/project02.png';
import projectImage03 from '../../assets/images/project03.png';
import projectImage04 from '../../assets/images/project04.png';
import Details from '../../models/Details.jsx';
import './TopSlider.css';
import Typed from "typed.js";

const images = [slider01, slider02, slider03];
const skillsImages = [skillsImage01,skillsImage02,skillsImage03,skillsImage04];
const projectsImages = [projectImage01,projectImage02,projectImage03,projectImage04];

const TopSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const intervalRef = useRef(null);

    const textRefs = [useRef(null), useRef(null), useRef(null)]; // Initialize an array of refs

    // Reset sliding flag after a transition
    useEffect(() => {
        if (!isSliding) return;

        const timeout = setTimeout(() => {
            setIsSliding(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [currentSlide, isSliding]);

    // Start the auto-slide timer
    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(nextSlide, 7000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    // Change to the next slide
    const nextSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentSlide((prev) => (prev + 1) % images.length);
        startAutoSlide(); // Restart the auto-slide interval
    };

    // Change to the previous slide
    const prevSlide = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        startAutoSlide();
    };

    // Typed.js initialization for each textRef
    useEffect(() => {
        const options = {
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true,
        };

        const typedInstances = textRefs.map((ref, index) => {
            const optionsWithStrings = {
                ...options,
                strings: [
                    `a Professional Coder ${index + 1}.`,
                    'an Undergraduate',
                    'a Developer.',
                    'a Freelancer.'
                ],
            };
            return new Typed(ref.current, optionsWithStrings);
        });

        // Cleanup typed instances when the component unmounts
        return () => {
            typedInstances.forEach(typedInstance => typedInstance.destroy());
        };
    }, []);

    return (
        <div className="top-slider h-[61vh]  sm:h-[55vh] md:h-[58vh] min-[1000px]:h-[71vh] min-[1200px]:h-[80vh] overflow-hidden relative rounded-3xl">
            <div className="relative w-full ">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`slide w-full  h-[71vh] min-[1200px]:h-[80vh] absolute transition-all duration-[3s] ease-in-out ${
                            currentSlide === index
                                ? "opacity-100 z-8 transform translate-x-0 scale-100"
                                : currentSlide === (index - 1 + images.length) % images.length
                                    ? "opacity-0 z-0 transform -translate-x-full scale-90"
                                    : currentSlide === (index + 1) % images.length
                                        ? "opacity-0 z-0 transform translate-x-full scale-90"
                                        : "opacity-0 z-0 scale-90"
                        }`}
                    >
                        <img
                            src={src}
                            className="w-full h-full object-cover rounded-3xl"
                            alt={`Slide ${index + 1}`}
                        />

                        <div
                            className="absolute grid grid-cols-12 gap-4 inset-0 text-white text-4xl p-4 bg-black/30 rounded-3xl ">
                            <div
                                className="sliderSectionOne col-span-6  max-lg:col-span-10 max-[1000px]:bottom-[10%] relative left-[13%] my-auto px-5">
                                <p className="intro mb-2 text-2xl sm:text-3xl lg:text-4xl min-[1900px]:text-6xl font-bold ">
                                    {Details.sliderTopicsPart1[index]} <span>{Details.sliderTopicsPart2[index]}</span>
                                </p>
                                <h2 className="dynamic-txts-head mt-5 mb-5 text-2xl sm:text-3xl lg:text-4xl min-[1900px]:mb-10 min-[1900px]:text-6xl font-bold">
                                    I'm <span className="dynamic-txts" ref={textRefs[index]}></span>
                                </h2>

                                <p className="para text-[13px] sm:text-base md:text-md min-[1900px]:text-2xl  max-[768px]:hidden min-[1900px]:mb-10">{Details.sliderPara1[index]}</p><br className="max-[768px]:hidden"/>
                                <p className="para text-[13px] sm:text-base md:text-md min-[1900px]:text-2xl  hidden max-[768px]:block max-[640px]:hidden">{Details.sliderPara2[index]}</p>
                                <p className="para text-[13px] sm:text-base md:text-md min-[1900px]:text-2xl  hidden max-[640px]:block">{Details.sliderPara3[index]}</p>
                                <br className="hidden max-[768px]:block"/>

                                <button id="introBtn1" className="introBtn bg-[#D2042D] !text-[13px] sm:text-base md:text-md min-[1900px]:text-lg !w-[91px] !h-[34px] min-[430px]:w-[100px] md:w-[120px] md:h-[40px]"><span
                                    className="bg-[#D2042D]"></span>{Details.sliderButton1[index]}</button>
                                {index === 0 ? (
                                    <button id="introBtn2" className="introBtn bg-transparent !text-[13px] sm:text-base md:text-md min-[1900px]:text-lg  ml-2 !w-[91px] !h-[34px] md:w-[120px] md:h-[40px]"><span
                                        className="bg-[#D2042D]"></span>View Profile</button>
                                ) : ("")}
                            </div>
                            <div className="sliderSectionTwo col-span-6 my-auto mx-[16%] max-[1000px]:hidden">
                                {index === 0 ? (
                                    <div id={`headerImageId${index}`} className="headerImage"></div>
                                ) :index === 1 ? (
                                    <div className="alternativeHeaderImage grid grid-cols-2 gap-y-2 ">
                                        {skillsImages.map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                alt={`Skill ${idx + 1}`}
                                                className="w-[150px] h-[100px]  min-[1900px]:w-[200px] min-[1900px]:h-[130px] rounded bg-black/70 p-4"
                                            />
                                        ))}
                                        <a href="" className="text-base flex items-center text-white ml-2">
                                            Discover More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="w-4 h-4 ml-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5l7 7-7 7M5 11.5h14"
                                                />
                                            </svg>
                                        </a>

                                    </div>

                                ) : (
                                    <div className="alternativeHeaderImage grid grid-cols-2 gap-y-2 ">
                                        {projectsImages.map((image, idx) => (
                                            <img
                                                key={idx}
                                                src={image}
                                                alt={`Skill ${idx + 1}`}
                                                className="w-[150px] h-[80px] min-[1900px]:w-[200px] min-[1900px]:h-[130px] rounded bg-black/70 "
                                            />
                                        ))}
                                        <a href="" className="text-base flex items-center text-white ml-2">
                                            Discover More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                className="w-4 h-4 ml-2"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 4.5l7 7-7 7M5 11.5h14"
                                                />
                                            </svg>
                                        </a>

                                    </div>

                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-gray-300" : "bg-black"}`}
                        onClick={() => {
                            setCurrentSlide(index);
                            startAutoSlide();
                        }}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1L1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 9l4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default TopSlider;