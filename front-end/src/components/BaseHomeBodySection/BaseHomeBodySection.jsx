import AboutImage from '../../assets/images/about.jpg'
import Details from "../../models/Details.jsx";
import './BaseHomeBodySection.css'
import BaseHomeSkillsSlider from "./BaseHomeSkillsSlider/BaseHomeSkillsSlider.jsx";
import BaseHomeContact from "./BaseHomeContact/BaseHomeContact.jsx";

const BaseHomeBodySection = () => {

    return (
        <div className="BaseHomeBodySection">
            <h1 className="text-center text-white text-5xl font-bold !mt-20 mb-10">My Skills</h1>
            <BaseHomeSkillsSlider/>
            <div className="about-me mx-10 ">
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

            <div className="bg-[#141414]  text-white py-12 px-6 md:px-12 lg:px-24">
                <h2 className="text-4xl font-bold mb-12 text-center relative">
                    <h1 className="text-center text-white text-5xl font-bold !mt-20 mb-10">Education</h1>
                </h2>
                <div className="space-y-8">
                    {Details.educationDetails.map((item, index) => (
                        <div
                            key={index}
                            className="group relative border border-gray-700 rounded-lg overflow-hidden p-6 hover:shadow-2xl hover:border-yellow-300 transition-all duration-500"
                        >
                            {/* Background Hover Animation */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            <h3 className="text-2xl font-semibold group-hover:text-yellow-300 transition duration-500">
                                {item.degree}
                            </h3>
                            <p className="text-lg text-gray-400">{item.institution}</p>
                            <p className="text-sm text-gray-500">{item.duration}</p>
                            {item.description && (
                                <p className="mt-4 text-gray-300">{item.description}</p>
                            )}
                            {item.results && (
                                <ul className="mt-4 space-y-2">
                                    {item.results.map((result, i) => (
                                        <li
                                            key={i}
                                            className="flex justify-between border-b border-gray-700 pb-1 group-hover:border-yellow-500 transition-colors duration-500"
                                        >
                    <span className="text-gray-400 ">
                      {result.subject}
                    </span>
                                            <span className="text-gray-300 font-semibold ">
                      {result.grade}
                    </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <h1 className="text-center text-white text-5xl font-bold !mt-20 !mb-10">Contact Me</h1>
            <BaseHomeContact/>
        </div>


    )
}
export default BaseHomeBodySection;