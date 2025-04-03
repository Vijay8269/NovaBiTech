
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
