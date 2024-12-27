import React, { useState, useEffect, useRef } from "react";
import slider01 from '../../assets/images/slider01.jpg';
import slider02 from '../../assets/images/slider02.jpg';
import slider03 from '../../assets/images/slider03.jpg';

const images = [slider01, slider02, slider03];

const TopSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const intervalRef = useRef(null); // To store the interval ID

    // Reset sliding flag after a transition
    useEffect(() => {
        if (!isSliding) return;

        const timeout = setTimeout(() => {
            setIsSliding(false);
        }, 3000); // Duration of the slide transition

        return () => clearTimeout(timeout);
    }, [currentSlide, isSliding]);

    // Start the auto-slide timer
    const startAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(nextSlide, 5000);
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

    return (
        <div className="top-slider h-[80vh] overflow-hidden relative">
            <div className="relative w-full h-full">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`slide w-full h-[80vh] absolute transition-all duration-[3s] ease-in-out ${
                            currentSlide === index
                                ? "opacity-100 z-10 transform translate-x-0 scale-100"
                                : currentSlide === (index - 1 + images.length) % images.length
                                    ? "opacity-0 z-0 transform -translate-x-full scale-90"
                                    : currentSlide === (index + 1) % images.length
                                        ? "opacity-0 z-0 transform translate-x-full scale-90"
                                        : "opacity-0 z-0 scale-90"
                        }`}
                    >
                        <img
                            src={src}
                            className="w-full h-full object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"}`}
                        onClick={() => { setCurrentSlide(index); startAutoSlide(); }}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
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
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
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
