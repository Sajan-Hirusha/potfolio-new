import './BaseHomeBodySection.css'
import BaseHomeSkillsSlider from "./BaseHomeSkillsSlider/BaseHomeSkillsSlider.jsx";
import BaseHomeContact from "./BaseHomeContact/BaseHomeContact.jsx";
import BaseHomeAbout from "./BaseHomeAbout/BaseHomeAbout.jsx";
import BaseHomeEducation from "./BaseHomeEducation/BaseHomeEducation.jsx";
import ProjectSlider from "../BaseHomeProjectSlider/ProjectSlider.jsx";

const BaseHomeBodySection = () => {

    return (
        <div className="BaseHomeBodySection">

            <BaseHomeSkillsSlider/>
            <BaseHomeAbout/>
            <ProjectSlider/>
            <BaseHomeEducation/>
            <BaseHomeContact/>

        </div>


    )
}
export default BaseHomeBodySection;