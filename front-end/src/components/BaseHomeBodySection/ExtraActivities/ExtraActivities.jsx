import { useState } from 'react';
import './ExtraActivities.css';
import Details from "../../../models/Details.jsx";
import ImageGallery from "../../ImageGallery/ImageGallery.jsx";

const ExtraActivities = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <div className="Extra-Activities w-[73%] mx-auto">
            <div id="accordion-flush" className="accordion">
                {Details.ExtraCurricularActivities.map((item, index) => (
                    <div key={index} className="accordion-item">
                        <h2 id={`accordion-flush-heading-${index}`}>
                            <button
                                type="button"
                                className={` mt-4 accordion-header ${openIndex === index ? 'active h-[40px]' : 'h-[88px]'}`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`accordion-flush-body-${index}`}
                            >
                                <span className={` ${openIndex === index ? 'text-black' : 'text-white'}`}>{item.title}</span>
                                <svg
                                    className={`w-3 h-3 transform ${openIndex === index ? 'text-black' : 'rotate-180 text-white'}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-flush-body-${index}`}
                            className={`activity-content accordion-body ${openIndex === index ? 'open' : 'hidden'}`}
                            aria-labelledby={`accordion-flush-heading-${index}`}
                        >
                            <div
                                className="text-white text-lg text-justify m-10 py-5 h-[200px] border-b border-gray-200 dark:border-gray-700">
                                {item.content}
                                <button   onClick={toggleModal} id="introBtn1" className="introBtn bg-[#D2042D] mt-10" ><span
                                    className="bg-[#D2042D]"></span>View Gallery
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
