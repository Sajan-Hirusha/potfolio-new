import { useState } from 'react';
import Details from "../../../models/Details.jsx";
import ImageGallery from "./ImageGallery.jsx";

const ExtraActivities = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div id="ExtraActivities" className="w-full px-4 sm:px-6 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12 mx-auto py-10">
            <h1 className="text-center text-black dark:text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold my-10 md:my-16 lg:my-20">
                Extra Curricular Activities
            </h1>

            <div className="space-y-4">
                {Details.ExtraCurricularActivities.map((item, index) => (
                    <div key={index} className="rounded-lg overflow-hidden bg-black/70 dark:bg-black/40">
                        <button
                            type="button"
                            className={`flex justify-between items-center w-full p-4 md:p-6 text-left transition-all duration-300 ease-in-out
                                ${openIndex === index ? 'bg-gray-50 text-black' : 'bg-transparent text-white'}
                                ${openIndex === index ? 'h-10 md:h-12' : 'h-20 md:h-24'}`}
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span className=" text-lg md:text-xl lg:text-xl font-medium">{item.title}</span>
                            <svg
                                className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300
                                    ${openIndex === index ? 'text-black rotate-180' : 'text-white'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`bg-fixed bg-cover bg-center bg-no-repeat 
                                bg-[linear-gradient(rgba(0,0,0,0.88),rgba(0,0,0,0.88)),url('/assets/images/ActivityBg.jpg')]
                                transition-all duration-300 ease-in-out overflow-hidden
                                ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
                        >
                            <div className="p-6 md:p-10 text-white text-base md:text-lg text-justify border-b border-gray-700">
                                {item.content}
                                <button
                                    onClick={toggleModal}
                                    className="relative text-base mt-8 md:mt-10 px-6 py-2 bg-[#D2042D] text-white rounded overflow-hidden group"
                                >
                                    <span className="absolute inset-0 bg-[#D2042D] group-hover:bg-red-700 transition-colors duration-300"></span>
                                    <span className="relative z-10">View Gallery</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ImageGallery isOpen={isModalOpen} onClose={toggleModal}/>
        </div>
    );
};

export default ExtraActivities;