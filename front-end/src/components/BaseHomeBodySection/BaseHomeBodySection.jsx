import './BaseHomeBodySection.css'
import BaseHomeSkillsSlider from "./BaseHomeSkillsSlider/BaseHomeSkillsSlider.jsx";
import BaseHomeContact from "./BaseHomeContact/BaseHomeContact.jsx";
import BaseHomeAbout from "./BaseHomeAbout/BaseHomeAbout.jsx";
import BaseHomeEducation from "./BaseHomeEducation/BaseHomeEducation.jsx";
import ProjectSlider from "../BaseHomeProjectSlider/ProjectSlider.jsx";
import ExtraActivities from "./ExtraActivities/ExtraActivities.jsx";

const BaseHomeBodySection = () => {

    return (
        <div className="BaseHomeBodySection">
            <BaseHomeAbout className="hidden max-1000:block" id={"AboutUsM"}/>
            <BaseHomeSkillsSlider/>
            <BaseHomeAbout className="max-1000:hidden" id={"AboutUs"} />
            <BaseHomeEducation/>
            <ProjectSlider/>
            <ExtraActivities/>
            <BaseHomeContact/>

        </div>


    )
}
export default BaseHomeBodySection;