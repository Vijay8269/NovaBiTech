
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Transform Your Business with Advanced IT & AI Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Leverage cutting-edge technology to drive innovation and growth for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-black hover:bg-black/90 text-white">
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-2 border-black text-black hover:bg-black/5"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mt-8 md:mt-0"
          >
            <img  alt="Modern office with technology" className="rounded-lg shadow-xl w-full" src="https://images.unsplash.com/photo-1684395165684-1210bdc81d96" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
