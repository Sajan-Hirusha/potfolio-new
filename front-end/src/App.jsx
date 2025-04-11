import {BrowserRouter, Route, Routes} from "react-router-dom";
import BaseHome from "./screens/BaseHome/BaseHome.jsx";

function App() {

  return (
<<<<<<< Updated upstream
      <BrowserRouter>
=======
      <BrowserRouter  basename="/potfolio-new">
>>>>>>> Stashed changes
          <Routes>
              <Route element={<BaseHome/>} path='/'/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
