import React, { useState, useEffect } from "react";
import slider01 from '../../assets/images/slider01.jpg'
import slider02 from '../../assets/images/slider02.jpg'
import slider03 from '../../assets/images/slider03.jpg'

const images = [
   slider01,slider02,slider03
];

const TopSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="top-slider">
            <div id="default-carousel" className="relative w-full">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 duration-700 ease-in-out ${
                                currentSlide === index ? "block" : "hidden"
                            }`}
                        >
                            <img
                                src={src}
                                className="absolute block w-full h-full object-cover"
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
                            className={`w-3 h-3 rounded-full ${
                                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                            }`}
                            onClick={() => setCurrentSlide(index)}
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
        </div>
    );
};

export default TopSlider;
