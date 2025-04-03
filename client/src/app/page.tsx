import Features from "@/components/Landing/Features";
import Footer from "@/components/Landing/Footer";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import Navbar from "@/components/Landing/Navbar";
import Pricing from "@/components/Landing/Pricing";
import React from "react";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Home;
