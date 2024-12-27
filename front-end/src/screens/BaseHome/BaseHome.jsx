import Header from "../../components/BaseHomeHeader/Header.jsx";
import TopSlider from "../../components/BaseHomeSlider/TopSlider.jsx";

const BaseHome = () => {
    return (
        <div className="base-home">
            <Header/>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-10 bg-blue-500 p-4 text-white">
                   
                </div>
                {/* 2-column wide element */}
                <div className="col-span-2 bg-green-500 p-4 text-white">
                    This spans 2 columns
                </div>
            </div>

            <TopSlider/>
        </div>
    );
}

export default BaseHome;
