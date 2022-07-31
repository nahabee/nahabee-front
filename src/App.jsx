import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Campaigns from "./pages/Campaigns";
import Polas from "./pages/Polas";
import Shoot from "./pages/Shoot";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/polas" element={<Polas />} />
        <Route path="/shoot" element={<Shoot />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
