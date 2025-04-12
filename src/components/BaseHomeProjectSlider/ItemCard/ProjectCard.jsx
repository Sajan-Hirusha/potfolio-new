import { useState } from "react";

function ProjectCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.imageUrls.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + props.imageUrls.length) % props.imageUrls.length
        );
    };
    return (
        <div
            className={` bg-white/70 dark:bg-white/70 itemCard shadow-md rounded-lg text-center relative mx-auto overflow-hidden w-[260px] h-[280px] sm:w-[260px] lg:w-[220px] min-[1200px]:w-[260px] lg:h-[260px] min-[1200px]:h-[280px]`}

            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && props.imageUrls ? (
                <div className="relative overflow-hidden rounded-lg ">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {props.imageUrls.map((slide, index) => (
                            <div className="w-full flex-shrink-0" key={index}>
                                <img
                                    className={`${props.className} rounded - t - lg object-cover w-[260px] h-[280px] sm:w-[260px] sm:h-[280px] lg:w-[220px] min-[1200px]:w-[260px] lg:h-[260px] min-[1200px]:h-[280px]`}
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
                        onClick={prevSlide}
                    >
                        &#10094;
                    </button>

                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
                        onClick={nextSlide}
                    >
                        &#10095;
                    </button>
                </div>
            ) : (
                <img
                    src={props.imageUrl}
                    alt="productImage"
                    className={`${props.className} w-[260px] sm:w-[280px] sm:lg:w-[220px] min-[1200px]:w-[260px] h-[200px] lg:h-[182px] min-[1200px]:h-[200px] overflow-hidden rounded-t-lg object-cover`}
                />
            )}

            <div className="m-auto my-4 bg-black p-4">
                <div className="flex flex-wrap gap-2 mb-1 justify-center">
                    {props.category.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 rounded-md text-xs font-medium"
                            style={{
                                backgroundColor: getTagColor(index),
                                color: "white",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-sm font-semibold  mb-4 text-white">
                    {props.itemName}
                </h3>
            </div>
        </div>
    );
}

export default ProjectCard;

const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FFC300", // Yellow
    "#C70039", // Maroon
    "#900C3F", // Purple
];

function getTagColor(index) {
    return colors[index % colors.length];
}
