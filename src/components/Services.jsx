
import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Cloud, Lock } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI solutions to automate processes and gain valuable insights from your data."
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs and objectives."
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Secure and scalable cloud infrastructure to power your digital transformation."
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from digital threats."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive IT solutions for modern businesses</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-sky-500"
            >
              <service.icon className="w-12 h-12 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
