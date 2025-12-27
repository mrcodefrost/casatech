import React from "react";
import { motion } from "framer-motion";

// Import images
import casaImg from "../assets/casaCoverPic.png";
import shaadImg from "../assets/shaadCoverPic.png";
import pdsImg from "../assets/pdsCoverPic.png";
import chewyImg from "../assets/chewyCoverPic.png";
import jwlzenImg from "../assets/jwlzenCoverPic.png";
import foodoraImg from "../assets/foodoraCoverPic.png";
import quickbiteImg from "../assets/quickbiteCoverPic.png";
import niondImg from "../assets/niondcoverPic.png";
import rideonImg from "../assets/rideonCoverPic.png";
import vantusImg from "../assets/vantusCoverPic.png";
import orlandoImg from "../assets/orlandoCoverPic.png";
import nexusImg from "../assets/nexusCoverPic.png";

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
  {
    title: "Chewy",
    subtitle: "Full-Stack Ecommerce Platform",
    description:
      "Scalable ecommerce platform with product catalog, advanced filtering, cart, checkout, order management, and admin dashboard. Built with REST APIs, role-based access control, and secure payment integration.",
    features:
      "Multi-vendor support, order lifecycle tracking, inventory management, analytics dashboard.",
    img: chewyImg,
  },
  {
    title: "JwlZen",
    subtitle: "Headless Ecommerce Solution",
    description:
      "Headless ecommerce system designed for high-performance storefronts. Backend exposes APIs for web and mobile clients with support for promotions, coupons, and dynamic pricing.",
    features:
      "Admin CMS, product variants, discount engine, Razorpay/Stripe integration.",
    img: jwlzenImg,
  },
  {
    title: "FoodoraX",
    subtitle: "Food Delivery Platform",
    description:
      "End-to-end food delivery app including customer app, restaurant partner app, and delivery agent app. Supports real-time order tracking, live status updates, and digital payments.",
    features:
      "Live order tracking, push notifications, restaurant onboarding, delivery assignment.",
    img: foodoraImg,
  },
  {
    title: "QuickBite",
    subtitle: "Hyperlocal Food Ordering App",
    description:
      "Fast food ordering solution focused on local restaurants with optimized delivery radius, surge pricing, and order batching for delivery partners.",
    features:
      "Wallet system, promo codes, order history, ratings & reviews.",
    img: quickbiteImg,
  },
  {
    title: "Niond AI Analytics",
    subtitle: "B2B AI Analytics Software",
    description:
      "AI-powered business intelligence platform that analyzes customer behavior, sales trends, and operational metrics. Designed for decision-makers in retail and logistics companies.",
    features:
      "Predictive analytics, automated reports, CSV & API integrations, roleniondashboards.",
    img: niondImg,
  },
  {
    title: "RideOn",
    subtitle: "Ride-Hailing & Mobility App",
    description:
      "Uber-like ride booking platform with separate apps for riders and drivers. Includes real-time location tracking, fare estimation, trip history, and digital payments.",
    features:
      "Live GPS tracking, driver onboarding, trip analytics, in-app chat.",
    img: rideonImg,
  },
  {
    title: "Vantus ERP",
    subtitle: "Manufacturing ERP System",
    description:
      "ERP solution tailored for small to mid-sized manufacturing units. Covers procurement, inventory, production planning, and finance modules.",
    features:
      "Stock management, BOM tracking, vendor management, audit logs.",
    img: vantusImg,
  },
  {
    title: "Orlando ERP",
    subtitle: "Wholesale & Distribution ERP",
    description:
      "ERP platform designed for distributors and wholesalers to manage orders, warehouses, invoicing, and GST-compliant billing.",
    features:
      "Multi-warehouse support, invoice automation, role-based access.",
    img: orlandoImg,
  },
  {
    title: "Nexus",
    subtitle: "CRM & Sales Pipeline Software",
    description:
      "Customer relationship management system for sales teams to track leads, deals, follow-ups, and customer communication across channels.",
    features:
      "Lead scoring, pipeline visualization, activity logs, email integration.",
    img: nexusImg,
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

      {/* ================= MOBILE: Horizontal Swipe ================= */}
      <div className="md:hidden">
        <motion.div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 no-scrollbar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="min-w-[85vw] snap-center bg-dark rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-[220px] object-cover rounded-2xl mb-6"
                whileTap={{ scale: 0.95 }}
              />

              <div className="space-y-3 px-2 pb-6">
                <h3 className="text-2xl font-bold" style={{ color: titleColor }}>
                  {project.title}
                </h3>
                <h4
                  className="text-lg font-semibold"
                  style={{ color: subtitleColor }}
                >
                  {project.subtitle}
                </h4>
                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>
                {project.features && (
                  <p className="text-gray-400 text-sm">
                    {project.features}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= DESKTOP: Vertical Layout ================= */}
      <div className="hidden md:block space-y-32">
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
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(123,92,255,0.6)",
                }}
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
                  whileHover={{ scale: 1.05, color: subtitleColor }}
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