import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseHome from "./screens/BaseHome/BaseHome.jsx";
import ProjectDetailsPage from "./components/BaseHomeProjectSlider/ProjectDetailspage.jsx";
import ProjectSlider from "./components/BaseHomeProjectSlider/ProjectSlider.jsx";

function App() {
    return (
        <BrowserRouter basename="/potfolio-new">
                <Routes>
                    <Route path="/" element={<BaseHome/>}/>
                    <Route path="/projects" element={<ProjectSlider/>}/>
                    <Route path="/projectDetails" element={<ProjectDetailsPage/>}/>
                </Routes>
        </BrowserRouter>
    );
}

export default App;
