import darkMode from "../../assets/images/darkMode.png";
import facebookLogo from "../../assets/images/facebook.png";
import whatsappLogo from "../../assets/images/whatsapp.png";
import linkdinLogo from "../../assets/images/linkdin.png";
import gitLogo from "../../assets/images/github.png";
import TopSlider from "../BaseHomeSlider/TopSlider.jsx";

const BaseHomeHeadSection =()=>{
    return(
        <div id="Home" className="BaseHomeHeadSection grid grid-cols-12 gap-2 bg-[#141414] mt-8 ">
            <div className="col-span-12 md:col-span-11 text-white md:pl-20 md:pr-10 mx-4 md:!mx-10 md:my-2 ">
                <TopSlider/>
            </div>

            <div
                className="hidden md:grid homeIcon grid-cols-1 col-span-1 bg-[#141414] p-4 text-white pr-4 lg:pr-10 pt-20">
                {[
                    {icon: facebookLogo, alt: "facebook"},
                    {icon: whatsappLogo, alt: "whatsapp"},
                    {icon: linkdinLogo, alt: "linkdin"},
                    {icon: gitLogo, alt: "github"}
                ].map((item, index) => (
                    <a href="#" key={index}>
                        <img
                            className="w-10 h-8 lg:w-10 lg:h-10 mx-auto"
                            src={item.icon}
                            alt={item.alt}
                            id={item.id || undefined}
                        />
                        {index < 4 && <br/>}
                    </a>
                ))}
            </div>
        </div>
    )
}
export default BaseHomeHeadSection;