import Header from "../../components/Header/Header.jsx";
import BaseHomeHeadSection from "../../components/BaseHomeHeadSection/BaseHomeHeadSection.jsx";
import BaseHomeBodySection from "../../components/BaseHomeBodySection/BaseHomeBodySection.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const BaseHome = () => {
    return (
        <div className="base-home">
            <Header/>
            <BaseHomeHeadSection/>
            <BaseHomeBodySection/>
            <Footer/>
        </div>
    );
}

export default BaseHome;
