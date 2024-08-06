import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Media from "./pages/Media";
import Involove from "./pages/Involove";
import Campaign from "./pages/Campaign";
import Policy from "./pages/Policy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/involve" element={<Involove />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
