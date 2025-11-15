import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/aboutus.jsx";
import Contact from "./pages/contact.jsx";
import Helpdesk from "./pages/helpdesk.jsx";
import Donate from "./pages/donate.jsx"; // <-- Add this import (adjust path if needed)

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Helpdesk />} />
        <Route path="/donate" element={<Donate />} /> {/* <-- Add this route */}
      </Routes>
    </BrowserRouter>
  );
}
