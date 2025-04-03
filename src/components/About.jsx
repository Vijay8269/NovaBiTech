
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Clients Served"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience"
  },
  {
    icon: Target,
    number: "100%",
    label: "Project Success"
  },
  {
    icon: Zap,
    number: "24/7",
    label: "Support"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">About NBTech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses through innovative IT solutions and cutting-edge AI technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-black">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
            <h3 className="text-3xl font-bold text-black">Our Vision</h3>
            <p className="text-lg text-gray-600">
              To be the global leader in delivering transformative IT and AI solutions that shape the future of business technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img  alt="Team collaboration" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1627599936744-51d288f89af4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="w-12 h-12 text-sky-500 mx-auto mb-4" />
              <h4 className="text-3xl font-bold text-black mb-2">{stat.number}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
