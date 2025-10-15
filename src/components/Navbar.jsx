import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const navItems = [
        { label: "Home", href: "#hero" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[rgba(10,10,15,0.6)] border-b border-[rgba(255,255,255,0.1)]"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo / Brand */}
                <a
                    href="#hero"
                    className="text-xl font-semibold text-white tracking-wide hover:text-[var(--color-accent)] transition"
                >
                    Casa<span className="text-[var(--color-accent)]">Tech</span>
                </a>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.href}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a
                                href={item.href}
                                className="relative text-gray-300 hover:text-[var(--color-accent)] transition"
                            >
                                {item.label}
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-accent)]"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button (for later if you want it) */}
                <div className="md:hidden">
                    <button className="text-gray-300 hover:text-[var(--color-accent)] transition">
                        ☰
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
