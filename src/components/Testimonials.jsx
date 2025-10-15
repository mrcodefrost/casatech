import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Aarav Kapoor",
        role: "Founder, SwiftCart",
        avatar: "https://avatar.iran.liara.run/public/48",
        quote:
            "CasaTech transformed our digital presence with a sleek, high-performance app. The attention to detail and user experience is unmatched!",
    },
    {
        name: "Nisha Verma",
        role: "CEO, QuickPay",
        avatar: "https://avatar.iran.liara.run/public/58",
        quote:
            "Working with CasaTech was seamless. They delivered our project on time with exceptional quality and creative solutions.",
    },
    {
        name: "Rohit Singh",
        role: "CTO, MediTrack",
        avatar: "https://avatar.iran.liara.run/public/19",
        quote:
            "Their team understood our needs perfectly and brought innovative ideas to life. Highly recommend for any digital project.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-dark text-light" id="testimonials">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Testimonials
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-300 max-w-2xl mx-auto"
                >
                    Hear from our clients and partners about their experience working with CasaTech.
                </motion.p>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
                {testimonials.map((t, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(123,92,255,0.5)" }}
                        className="bg-[rgba(10,10,15,0.8)] p-6 rounded-2xl text-center cursor-pointer transition-transform duration-300"
                    >
                        <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-16 h-16 mx-auto rounded-full mb-4 shadow-md"
                        />
                        <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
                        <h4 className="text-primary text-xl font-semibold">{t.name}</h4>
                        <span className="text-gray-400">{t.role}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
