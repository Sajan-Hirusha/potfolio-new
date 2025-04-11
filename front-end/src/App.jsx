import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseHome from "./screens/BaseHome/BaseHome.jsx";

function App() {
    return (
        <BrowserRouter basename="/potfolio-new">
            <Routes>
                <Route path="/" element={<BaseHome />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
