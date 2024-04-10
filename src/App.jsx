import "./index.css";
import Navbar from "./components/misc/Navbar";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Backgrounds from "./components/Backgrounds";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backgrounds" element={<Backgrounds />} />
        <Route path="/icons" element={<Icons />} />
      </Routes>
    </div>
  );
}

export default App;
