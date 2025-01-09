import { useState } from "react";

const styles = {
    cardContainer: {
        width: '260px', // Fixed width for the card
        height: '300px', // Fixed height for the card
        overflow: 'hidden', // Ensures no content spills out
    },
    imageContainer: {
        width:'260px',
        height:'200px',
        objectFit: 'cover', // Ensure the image scales proportionally
    },
};

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
            className={`${props.className} bg-white itemCard shadow-md rounded-lg text-center relative mx-auto`}
            style={styles.cardContainer} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && props.imageUrls ? (
                <div className="relative overflow-hidden rounded-lg">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {props.imageUrls.map((slide, index) => (
                            <div className="w-full flex-shrink-0" key={index}>
                                <img
                                    className="rounded-t-lg "
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    style={styles.imageContainer}
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
                    className="rounded-t-lg w-full"
                    style={styles.imageContainer}
                />
            )}

            <div className="m-auto">
                <div className="flex flex-wrap gap-2 mb-1">
                    {props.category.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 rounded-full text-xs font-medium"
                            style={{
                                backgroundColor: getTagColor(index),
                                color: "white",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-4 text-white">
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
