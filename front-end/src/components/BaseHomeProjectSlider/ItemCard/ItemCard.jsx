import { useState} from "react";

const styles = {
    imageContainer: {
        height: 'auto',
        objectFit: 'cover',
    }
};

function ItemCard(props) {
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
            className={`${props.class} itemCard shadow-md rounded-lg  max-w-xs text-center relative overflow-hidden mx-auto w-[260px]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && props.imageUrls ? (
                <div className="relative overflow-hidden rounded-lg h-auto ">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {props.imageUrls.map((slide, index) => (
                            <div className="w-full flex-shrink-0" key={index}>
                                <img
                                    className={` rounded-t-lg  w-[100vw] w-[40vw ${props.className}`}
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    style={styles.imageContainer} // Apply the consistent image size
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
                    className={` rounded-t-lg  w-[100vw] ${props.className}`}
                    style={styles.imageContainer}

                />
            )}

            <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-1">
                    {props.tags.map((tag, index) => (
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
                <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    {props.itemName}
                </h3>
            </div>

        </div>
    );
}

export default ItemCard;
