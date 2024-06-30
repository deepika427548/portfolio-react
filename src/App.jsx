import React from "react";
import Navbar from "./Components/Nav/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyProjects from "./Components/MyProjects/MyProjects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}
