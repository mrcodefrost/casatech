import React from "react";
import { motion } from "framer-motion";

// Import images
import casaImg from "../assets/casaCoverPic.png";
import shaadImg from "../assets/shaadCoverPic.png";
import pdsImg from "../assets/pdsCoverPic.png";

const projects = [
  {
    title: "CASA - Swipe to Shop",
    subtitle: "Quick Commerce Platform",
    description:
      "Ecommerce app featuring swipe-based product interaction like a dating app. Integrated GraphQL for APIs, Firebase for auth, crashlytics, notifications, GetX for state management, and Razorpay for payments.",
    features:
      "Features: swipe to like/dislike, explore section, cart, multi-platform deployment on Play Store and App Store.",
    img: casaImg,
  },
  {
    title: "Shaad - Customer & Dealer",
    subtitle: "Mobile Recharge App",
    description:
      "Recharge platform for Afghanistan, Turkey, and Nepal with separate apps for dealers and customers. Features Firebase push notifications, crashlytics, biometric login, REST API integration, PayPal and Stripe support.",
    features: "Deployed on both Play Store and App Store.",
    img: shaadImg,
  },
  {
    title: "PDS Delivery & PDS Partner",
    subtitle: "Prescription Delivery & Tracking App",
    description:
      "Two dedicated apps for prescription logistics and customer delivery experience in the United Kingdom. Partner app: route planning, barcode scanning, customer signature and photo capture. Delivery app: real-time delivery tracking, feedback, and delivery instructions. Integrated REST APIs and Firebase services.",
    features: "",
    img: pdsImg,
  },
];

const Projects = () => {
  const titleColor = "#7b5cff";
  const subtitleColor = "#5ddcff";

  return (
    <section className="py-24 px-6 md:px-20 bg-dark text-light" id="projects">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          A showcase of our work delivering impactful digital experiences across platforms.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="space-y-32">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${isEven ? "md:flex-row-reverse" : ""
                } group`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(123,92,255,0.6)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-lg transition-transform duration-300"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-4"
              >
                <motion.h3
                  whileHover={{ scale: 1.05, color: "#5ddcff" }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold"
                  style={{ color: titleColor }}
                >
                  {project.title}
                </motion.h3>
                <h4
                  className="text-xl font-semibold transition-colors duration-300"
                  style={{ color: subtitleColor }}
                >
                  {project.subtitle}
                </h4>
                <p className="text-gray-300 transition-colors duration-300 group-hover:text-white">
                  {project.description}
                </p>
                {project.features && (
                  <p className="text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
                    {project.features}
                  </p>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;