import {useEffect, useState} from "react";
import ItemCard from "./ItemCard.jsx";
import Details from "../../../models/Details.jsx";

const BaseHomeSkillsSlider =()=>{
    const [skillsList, setSkillsList] = useState([]);
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const ITEMS_VISIBLE = 6;

    const loadSkills = async () => {
        const res = Details.skills;
        if (res && typeof res !== "boolean") {
            setSkillsList(res);
        }
    };

    useEffect(() => {
        loadSkills();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [skillsList]);

    const goToNext = () => {
        setCurrentStartIndex((prev) => (prev + 1) % skillsList.length);
    };

    const goToPrevious = () => {
        setCurrentStartIndex((prev) => (prev - 1 + skillsList.length) % skillsList.length);
    };

    const loadNextItems = async () => {
        const res = Details.skills
        if (res && typeof res !== "boolean") {
            setSkillsList((prevList) => [...prevList, ...res]);
        }
    };

    useEffect(() => {
        if (currentStartIndex >= skillsList.length - ITEMS_VISIBLE) {
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
        <div id="Skills" className="relative w-[91%] mx-auto ">
            <h1 className="text-center text-black dark:text-white text-4xl md:text-5xl min-[1900px]:text-6xl font-bold !my-20">My Skills</h1>
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex"
                    style={{
                        transform: `translateX(${translateXValue}%)`,
                        transition: "transform 1s ease-in-out",
                    }}
                >
                    {skillsList
                        .filter((item) => item && item.name !== "Unselected")
                        .map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 min-[1900px]:w-1/5 min-[2500px]:w-1/6  flex justify-center items-center"
                            >
                                <ItemCard
                                    imageUrl={item.coverImageLink}
                                    description={item.description}
                                    className={classname}
                                />
                            </div>
                        ))}
                </div>
            </div>

            <div className="absolute top-[61%] sm:left-[-20px] transform -translate-y-1/2 text-white cursor-pointer ">
                <button
                    onClick={goToPrevious}
                    className="bg-white bg-opacity-25 p-2 rounded-full"
                >
                    &#8592;
                </button>
            </div>
            <div className="absolute top-[61%] right-[0px] sm:right-[-20px] transform -translate-y-1/2 text-white cursor-pointer ">
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
export default BaseHomeSkillsSlider;