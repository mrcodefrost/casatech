import React from "react";
import { motion } from "framer-motion";
import { Code, Smartphone, Layout, Cloud } from "lucide-react";

const services = [
    {
        title: "Web Development",
        desc: "Creating high-performance, scalable, and user-friendly web applications that drive business growth.",
        icon: <Code className="w-10 h-10 mx-auto mb-4" style={{ color: "#7b5cff" }} />,
    },
    {
        title: "Mobile Apps",
        desc: "Designing intuitive and engaging mobile experiences that delight users and strengthen brand presence.",
        icon: <Smartphone className="w-10 h-10 mx-auto mb-4" style={{ color: "#7b5cff" }} />,
    },
    {
        title: "UI/UX Design",
        desc: "Crafting visually stunning and seamless interfaces that enhance usability and elevate digital experiences.",
        icon: <Layout className="w-10 h-10 mx-auto mb-4" style={{ color: "#7b5cff" }} />,
    },
    {
        title: "Cloud Solutions",
        desc: "Building reliable and scalable backend infrastructures to ensure your business operates efficiently in the cloud.",
        icon: <Cloud className="w-10 h-10 mx-auto mb-4" style={{ color: "#7b5cff" }} />,
    },
];


const Services = () => {
    return (
        <section
            className="py-24 px-6 md:px-20 bg-dark text-light"
            id="services"
        >
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Our Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-300 max-w-2xl mx-auto"
                >
                    CasaTech provides a range of solutions to help your business thrive in the digital world.
                </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.5)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-[rgba(10,10,15,0.8)] rounded-2xl p-6 text-center hover:bg-[rgba(59,130,246,0.05)] cursor-pointer"
                    >
                        {service.icon}
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-300">{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
