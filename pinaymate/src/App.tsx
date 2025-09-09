import "./App.css";
import React from "react";

import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Faqs from "./components/sections/Faqs";
import Download from "./components/sections/Download";
import Footer from "./components/sections/Footer";
import Membership from "./components/sections/Membership";

function App() {
  return (
    <div className="min-h-screen bg-[#2d3748] font-roboto">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Membership Plans */}
      <Membership />

      {/* FAQ Section */}
      <Faqs />

      {/* Download Section */}
      <Download />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
