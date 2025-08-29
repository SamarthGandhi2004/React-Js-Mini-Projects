import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollProvider from "./components/ScrollProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./sections/Services";
import JobSeekersPage from "./sections/JobSeekers";
import EmployersPage from "./sections/Employers";
import ContactPage from "./pages/ContactPage";

export default function App(){
  return (
    <ScrollProvider>
      <div className="min-h-screen text-neutral-700">
        <Navbar />
        <main id="main-content" className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/job-seekers" element={<JobSeekersPage />} />
            <Route path="/employers" element={<EmployersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}
