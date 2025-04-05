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
            <BaseHomeAbout className={'hidden max-[1000px]:block'}/>
            <BaseHomeSkillsSlider/>
            <BaseHomeAbout className={' max-[1000px]:hidden'}/>
            <BaseHomeEducation/>
            <ProjectSlider/>
            <h1 className="text-center text-white text-5xl font-bold !my-20">Extra Curricular Activities</h1>
            <ExtraActivities/>
            <BaseHomeContact/>

        </div>


    )
}
export default BaseHomeBodySection;