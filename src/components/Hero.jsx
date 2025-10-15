import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/heroImg.svg";

const industries = [
  "Health Tech",
  "Automation",
  "Energy",
  "FinTech",
  "EdTech",
  "Retail & E-commerce",
  "Logistics",
  "AI & Machine Learning",
  "Blockchain",
  "Cybersecurity",
  "IoT",
  "SaaS Platforms",
  "Gaming",
  "AR/VR",
  "Cloud Solutions",
];

const Hero = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-[#06080f] via-[#0b0f1a] to-[#0a0a0a] text-light overflow-hidden pt-32"
      id="hero"
    >
      {/* Background glow + stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.3 + Math.random() * 0.7,
              }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full space-y-12 md:space-y-0 px-6 md:px-20">
        {/* Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, color: "rgb(59,130,246)" }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Empowering <span className="text-primary">Digital Evolution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0"
          >
            CasaTech crafts scalable, performant, and beautiful software for
            modern startups and enterprises — from concept to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary text-dark px-6 py-3 rounded-xl font-semibold transition hover:opacity-90 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
            >
              Start a Project
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold transition hover:bg-primary hover:text-dark hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
            >
              Explore Work
            </button>
          </motion.div>

        </div>

        {/* Illustration */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex-1 flex justify-center z-10 mt-12 md:mt-0"
        >
          <img
            src={heroImg}
            alt="CasaTech Hero Illustration"
            className="w-4/5 md:w-3/5 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          />
        </motion.div>
      </div>

      {/* Industries Ribbon - Seamless + Hover Float */}
      <div className="relative w-full overflow-hidden mt-6 pb-8 pt-8">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          style={{ display: "inline-flex" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...industries, ...industries].map((industry, idx) => (
            <motion.span
              key={idx}
              className="inline-block px-4 py-2 rounded-full border-2 border-[#1e40af] text-white font-semibold text-sm md:text-base"
              whileHover={{ y: [-2, 0, -2] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
