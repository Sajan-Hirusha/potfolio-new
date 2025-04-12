import { useEffect } from 'react';

const ImageGallery = ({ isOpen, onClose }) => {
    // Close modal when pressing Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Disable body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable body scroll when modal is closed
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Sample gallery data - replace with your actual images
    const galleryImages = [
        { id: 1, alt: "Activity 1" },
        { id: 2, alt: "Activity 2" },
        { id: 3, alt: "Activity 3" },
        { id: 4, alt: "Activity 4" },
        { id: 5, alt: "Activity 5" },
        { id: 6, alt: "Activity 6" },
        // Add more images as needed
    ];

    return (
        <div className="fixed inset-0 z-[1000] overflow-y-auto">
            {/* Overlay with smooth transition */}
            <div
                className="fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
            ></div>

            {/* Modal container with responsive sizing */}
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Modal panel with responsive width */}
                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white bg-opacity-80 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        aria-label="Close gallery"
                    >
                        <svg
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Gallery content */}
                    <div className="bg-white p-4 sm:p-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                            Gallery
                        </h3>

                        {/* Responsive image grid */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                            {galleryImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <img
                                        src={`https://picsum.photos/300/200?random=${image.id}`}
                                        alt={image.alt}
                                        className="w-full h-40 sm:h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                        <button
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100"
                                            aria-label="View image"
                                        >
                                            <svg
                                                className="w-6 h-6 text-gray-800"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Optional: Add navigation buttons for more images */}
                        {galleryImages.length > 8 && (
                            <div className="mt-6 flex justify-center">
                                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-700 font-medium transition-colors duration-200">
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;