import "./index.css";
import Navbar from "./components/misc/Navbar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Backgrounds from "./components/Backgrounds";
import Icons from "./components/Icons";
import Videos from "./components/Videos";
import Fonts from "./components/Fonts";
import Colors from "./components/Colors";
import Collections from "./components/Collections";
import Librerias from "./components/Librerias";
import Photos from "./components/Photos";
import Tresd from "./components/Tresd";
import Tools from "./components/Tools";

function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backgrounds" element={<Backgrounds />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/fonts" element={<Fonts />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/librerias" element={<Librerias />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/box" element={<Tresd />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </div>
  );
}

export default App;
