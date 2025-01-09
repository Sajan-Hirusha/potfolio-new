import { useEffect, useState } from "react";
import Details from "../../models/Details.jsx";
import ProjectCard from "./ItemCard/ProjectCard.jsx";

function ProjectSlider() {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const ITEMS_VISIBLE = 6;
    const [projectList, setProject] = useState([]);

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
        const interval = setInterval(() => {
            goToNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [projectList]);

    const goToNext = () => {
        setCurrentStartIndex((prev) => (prev + 1) % projectList.length);
    };

    const goToPrevious = () => {
        setCurrentStartIndex((prev) => (prev - 1 + projectList.length) % projectList.length);
    };

    const loadNextItems = async () => {
        const res = await Details.projects;
        if (res) {
            setProject((prevList) => [...prevList, ...res]); // Append new items
        }
    };

    useEffect(() => {
        if (currentStartIndex >= projectList.length - ITEMS_VISIBLE) {
            loadNextItems();
        }
    }, [currentStartIndex]);

    const getItemsVisible = () => {
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
    };

    const [visibleItems, setVisibleItems] = useState(getItemsVisible());

    useEffect(() => {
        const handleResize = () => {
            setVisibleItems(getItemsVisible());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const translateXValue = -(currentStartIndex * (100 / visibleItems));

    const classname = "transition-transform duration-[1000ms] ease-in-out hover:scale-110";

    return (
        <div className="ProectSlider relative w-[88%] mx-auto " >
            {/* Carousel Container */}
            <h2 className="text-center max-[350px]:text-xl text-2xl sm:text-3xl md:text-4xl lg:text-4xl min-[1900px]:text-6xl mb-4 font-thin">My Projects</h2>
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex"
                    style={{
                        transform: `translateX(${translateXValue}%)`,
                        transition: "transform 1s ease-in-out",
                    }}
                >
                    {projectList.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 min-[1900px]:w-1/5 min-[2500px]:w-1/6 flex justify-center items-center mt-10">

                                <ProjectCard
                                    imageUrl={item.coverImageLinks?.[0]}
                                    imageUrls={item.coverImageLinks}
                                    key={index}
                                    class={"bg-gray-50 p-1"}
                                    className={classname}
                                    category={item.tags}
                                    itemName={item.projectName}
                                />
                            )
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-[55%] left-2 transform -translate-y-1/2 text-white cursor-pointer">
                <button onClick={goToPrevious} className="bg-gray-500 bg-opacity-50 p-2 rounded-full ">
                    &#8592;
                </button>
            </div>
            <div className="absolute top-[55%] right-2 transform -translate-y-1/2 text-white cursor-pointer ">
                <button onClick={goToNext} className="bg-gray-500 bg-opacity-50 p-2 rounded-full">
                    &#8594;
                </button>
            </div>
        </div>
    );
}

export default ProjectSlider;
