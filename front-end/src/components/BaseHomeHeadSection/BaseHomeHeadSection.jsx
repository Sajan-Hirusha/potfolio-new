import darkMode from "../../assets/images/darkMode.png";
import facebookLogo from "../../assets/images/facebook.png";
import whatsappLogo from "../../assets/images/whatsapp.png";
import linkdinLogo from "../../assets/images/linkdin.png";
import gitLogo from "../../assets/images/github.png";
import TopSlider from "../BaseHomeSlider/TopSlider.jsx";

const BaseHomeHeadSection =()=>{
    return(
        <div className="BaseHomeHeadSection grid grid-cols-12 gap-2 bg-[#141414] mt-10">
            <div className="col-span-11  p-4 text-white px-20">
                <TopSlider/>
            </div>

            <div className="homeIcon grid grid-cols-1 col-span-1 bg-[#141414] p-4 text-white py-20">
                <a href=""><img className="w-10 h-10 mx-auto" id="darkMode" src={darkMode} alt="darkMode"/><br/></a>
                <a href=""><img className="w-10 h-10 mx-auto" src={facebookLogo} alt="facebook"/><br/></a>
                <a href=""><img className="w-10 h-10 mx-auto" src={whatsappLogo} alt="whatsapp"/><br/></a>
                <a href=""><img className="w-10 h-10 mx-auto" src={linkdinLogo} alt="linkdin"/><br/></a>
                <a href=""><img className="w-10 h-10 mx-auto" src={gitLogo} alt="github"/></a>
            </div>
        </div>
    )
}
export default BaseHomeHeadSection;