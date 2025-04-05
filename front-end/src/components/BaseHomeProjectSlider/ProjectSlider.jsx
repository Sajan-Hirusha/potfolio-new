import { useEffect, useRef, useState } from "react";
import Details from "../../models/Details.jsx";
import ProjectCard from "./ItemCard/ProjectCard.jsx";

function ProjectSlider() {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [projectList, setProject] = useState([]);
    const [visibleItems, setVisibleItems] = useState(getItemsVisible());
    const intervalRef = useRef(null);

    const ITEMS_VISIBLE = 6;

    const loadProducts = async () => {
        const res = await Details.projects;
        if (res) {
            setProject(res);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [projectList]);

    const startAutoSlide = () => {
        stopAutoSlide(); // Ensure no duplicates
        intervalRef.current = setInterval(() => {
            goToNext();
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const goToNext = () => {
        setCurrentStartIndex((prev) => (prev + 1) % projectList.length);
    };

    const goToPrevious = () => {
        setCurrentStartIndex((prev) => (prev - 1 + projectList.length) % projectList.length);
    };

    const loadNextItems = async () => {
        const res = await Details.projects;
        if (res) {
            setProject((prevList) => [...prevList, ...res]);
        }
    };

    useEffect(() => {
        if (currentStartIndex >= projectList.length - ITEMS_VISIBLE) {
            loadNextItems();
        }
    }, [currentStartIndex]);

    function getItemsVisible() {
        if (window.innerWidth >= 2500) {
            return 6;
        }
        if (window.innerWidth >= 1900) {
            return 5;
        } else if (window.innerWidth >= 1024) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setVisibleItems(getItemsVisible());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const translateXValue = -(currentStartIndex * (100 / visibleItems));
    const classname = "transition-transform duration-[1000ms] ease-in-out hover:scale-[103%]";

    return (
        <div className="ProectSlider relative w-[91%] mx-auto px-20 pb-10 lg:px-0">
            <h1 className="text-center text-white text-5xl font-bold !my-20">My Projects</h1>
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex"
                    style={{
                        transform: `translateX(${translateXValue}%)`,
                        transition: "transform 1s ease-in-out",
                    }}
                >
                    {projectList.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 min-[1900px]:w-1/5 min-[2500px]:w-1/6 flex justify-center items-center mt-10"
                            onMouseEnter={stopAutoSlide}
                            onMouseLeave={startAutoSlide}
                        >
                            <ProjectCard
                                imageUrl={item.coverImageLinks?.[0]}
                                imageUrls={item.coverImageLinks}
                                class={"bg-gray-50 p-1"}
                                className={classname}
                                category={item.tags}
                                itemName={item.projectName}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[61%] left-[0] md:left-[-20px] transform -translate-y-1/2 text-white cursor-pointer ">
                <button
                    onClick={goToPrevious}
                    className="bg-white bg-opacity-25 p-2 rounded-full"
                >
                    &#8592;
                </button>
            </div>
            <div className="absolute top-[61%] right-[0] md:right-[-20px] transform -translate-y-1/2 text-white cursor-pointer ">
                <button
                    onClick={goToNext}
                    className="bg-white bg-opacity-25 p-2 rounded-full"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}

export default ProjectSlider;
