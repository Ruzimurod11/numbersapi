import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/info" element={<Info />} />
      </Routes>
   );
}

export default App;
