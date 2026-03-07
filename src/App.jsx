import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/staffs/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import History from "./pages/staffs/about/History.jsx";
import WhatWeDo from "./pages/staffs/about/WhatWeDo";
import Team from "./pages/staffs/about/Team";
import Partners from "./pages/staffs/about/Partners";
import Events from "./pages/staffs/Event.jsx";
import EventDetails from "./pages/staffs/EventDetails";
import Project from "./pages/staffs/project";
import Publications from "./pages/staffs/Publications";
import Contact from "./pages/staffs/Contact";
import Gallery from "./pages/staffs/Gallery";

// ✅ ScrollToTop Component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on route change
  }, [pathname]);

  return children;
};

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/whatwedo" element={<WhatWeDo />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/partners" element={<Partners />} />

          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />

          <Route path="/projects" element={<Project />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;