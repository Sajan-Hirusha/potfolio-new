import Header from "../../components/BaseHomeHeader/Header.jsx";
import BaseHomeHeadSection from "../../components/BaseHomeHeadSection/BaseHomeHeadSection.jsx";
import BaseHomeBodySection from "../../components/BaseHomeBodySection/BaseHomeBodySection.jsx";
import BaseHomeFooter from "../../components/BaseHomeFooter/BaseHomeFooter.jsx";

const BaseHome = () => {
    return (
        <div className="base-home">
            <Header/>
            <BaseHomeHeadSection/>
            <BaseHomeBodySection/>
            <BaseHomeFooter/>
        </div>
    );
}

export default BaseHome;
