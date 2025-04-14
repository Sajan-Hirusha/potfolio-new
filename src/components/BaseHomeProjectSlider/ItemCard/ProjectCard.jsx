import { useState } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function ProjectCard(props) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.coverImageLinks.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + props.coverImageLinks.length) % props.coverImageLinks.length
        );
    };
    return (
        <div
            className={`bg-white/70 dark:bg-white/70 itemCard shadow-md rounded-lg text-center relative mx-auto overflow-hidden w-[260px] h-[280px] sm:w-[260px] lg:w-[220px] min-[1200px]:w-[260px] lg:h-[260px] min-[1200px]:h-[280px]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

                {isHovered && props.coverImageLinks.length > 1 ? (
                    <div className="relative overflow-hidden rounded-lg h-full">
                        <div
                            className="flex transition-transform duration-300 ease-in-out h-full"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {props.coverImageLinks.map((image, index) => (
                                <div className="w-full flex-shrink-0 h-full" key={index}>
                                    <Link
                                        to="/projectDetails"
                                        state={{
                                            project: {
                                                title: props.projectName,
                                                description: props.description,
                                                tags: props.tags,
                                                images: props.coverImageLinks,
                                                githubUrl: props.githubUrl,
                                                liveUrl: props.link,
                                                technologies:props.technologies
                                            }
                                        }}
                                    >
                                    <img
                                        className={`${props.className} rounded-t-lg object-cover w-full h-full`}
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                    />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <button
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
                            onClick={(e) => {
                                e.preventDefault();
                                prevSlide();
                            }}
                        >
                            &#10094;
                        </button>

                        <button
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600 focus:outline-none"
                            onClick={(e) => {
                                e.preventDefault();
                                nextSlide();
                            }}
                        >
                            &#10095;
                        </button>
                    </div>
                ) : (
                    <Link
                        to="/projectDetails"
                        state={{
                            project: {
                                title: props.projectName,
                                description: props.description,
                                tags: props.tags,
                                images: props.coverImageLinks,
                                githubUrl: props.githubUrl,
                                liveUrl: props.link,
                                technologies:props.technologies
                            }
                        }}
                    >
                    <img
                        src={props.coverImageLinks[0]}
                        alt="Project cover"
                        className={`${props.className} w-full h-[200px] lg:h-[182px] min-[1200px]:h-[200px] overflow-hidden rounded-t-lg object-cover`}
                    />
                    </Link>
                )}

                <div className="m-auto my-4 bg-black p-4">
                    <div className="flex flex-wrap gap-2 mb-1 justify-center">
                        {props.tags.map((tag, index) => (
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
                    <h3 className="text-xs font-semibold mb-4 text-white mt-2">
                        {props.projectName}
                    </h3>
                </div>

        </div>
    );
}

export default ProjectCard

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

ProjectCard.propTypes = {
    projectName: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    coverImageLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};