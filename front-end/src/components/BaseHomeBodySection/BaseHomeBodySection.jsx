import AboutImage from '../../assets/images/about.jpg'
import Details from "../../models/Details.jsx";
import './BaseHomeBodySection.css'
import BaseHomeSkillsSlider from "./BaseHomeSkillsSlider/BaseHomeSkillsSlider.jsx";
const BaseHomeBodySection = () => {
    return (
        <div className="BaseHomeBodySection">
            <h1 className="text-center text-white text-5xl font-bold my-20 ">My Skills</h1>
            <BaseHomeSkillsSlider/>
            <div className="about-me mx-10 my-20">
                <h1 className="text-center text-white text-5xl font-bold mb-10 ">About Me</h1>
                <div className="grid grid-cols-12 aboutBackground py-16">
                    <div className="col-span-7 about-me-leftSection">
                        <div className="relative h-[50vh] w-[80%] mx-auto">
                            <img src={AboutImage} className="h-full w-full object-cover rounded-xl" alt="sajanImage"/>
                            <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>
                        </div>

                    </div>
                    <div className="col-span-5 about-me-rightSection">
                        <div>
                            <p className="text-[#D2042D] text-xl mt-8">{Details.about[0].title}</p>
                            <p className="text-white/80 text-lg  mt-4 mr-20 text-justify">{Details.about[0].para}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BaseHomeBodySection;