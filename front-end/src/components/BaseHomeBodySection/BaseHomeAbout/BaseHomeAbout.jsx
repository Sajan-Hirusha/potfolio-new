import AboutImage from "../../../assets/images/about.jpg";
import Details from "../../../models/Details.jsx";
import './BaseHomeAbout.css'

function BaseHomeAbout(props) {
    return (
        <div
            id={props.id}
            className={`baseHomeAbout mx-4 sm:mx-10 mt-20 ${props.className || ''}`}
        >

            <h1 className="text-center text-white text-4xl md:text-5xl min-[1900px]:text-6xl font-bold !mt-10 mb-10 ">About
                Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-12 aboutBackground py-16">
                <div className="col-span-1 md:col-span-7 about-me-leftSection">
                    <div className="relative h-[44vh] w-[80%] md:h-[53vh] mx-auto">
                        <img src={AboutImage} className="h-full w-full object-cover rounded-xl" alt="sajanImage"/>
                        <div className="absolute inset-0 bg-black/10 bg-opacity-50"></div>
                    </div>
                </div>
                <div
                    className="max-md:mt-10 pl-12 min-[500px]:pl-16 md:pl-0 col-span-1 md:col-span-5 about-me-rightSection my-auto">
                    <div>
                        <p className="text-[#D2042D] text-xl mt-8">{Details.about[0].title}</p>
                        <p className="text-white/80 text-lg mt-4 mr-10 md:mr-20 text-justify">{Details.about[0].para}</p>

                        <button id="introBtn1" className="introBtn bg-[#D2042D] mt-5">
                            <span className="bg-[#D2042D]"></span>Download My Cv
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseHomeAbout;
