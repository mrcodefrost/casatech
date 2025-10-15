import React from "react";
import { Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
    // Scroll-to-top handler
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-dark text-gray-400 py-12 px-6 md:px-20 overflow-hidden">
            {/* Gradient top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7b5cff] via-[#5ddcff] to-[#ff6ec7]"></div>

            {/* Floating cosmic particles */}
            <div className="absolute top-5 left-10 w-3 h-3 rounded-full bg-[#7b5cff] opacity-40 animate-bounce-slow"></div>
            <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-[#5ddcff] opacity-50 animate-bounce-slow"></div>
            <div className="absolute bottom-10 left-1/3 w-4 h-4 rounded-full bg-[#ff6ec7] opacity-30 animate-bounce-slow"></div>
            <div className="absolute bottom-16 right-1/4 w-2 h-2 rounded-full bg-[#7b5cff] opacity-40 animate-bounce-slow"></div>

            {/* Main footer content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Company Name / Copyright */}
                <div className="text-center md:text-left space-y-1">
                    <h3 className="text-white font-bold text-lg">CasaTech</h3>
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} CasaTech. All rights reserved.</p>
                    <p className="text-gray-400 text-sm">Mumbai, India</p>
                    <p className="text-gray-400 text-sm">+91 79001 16936</p>
                </div>

                {/* Social Link */}
                <div className="flex space-x-6">
                    <a
                        href="https://www.linkedin.com/company/casa-shoping/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#7b5cff] transition-colors duration-300"
                    >
                        <Linkedin className="w-12 h-12" />
                    </a>
                </div>
            </div>

            {/* Scroll-to-top button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-white/20 backdrop-blur-md border border-white/30 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(123,92,255,0.6)] transition-transform duration-300 z-50"
            >
                <ArrowUp className="w-5 h-5 text-white" />
            </button>

        </footer>
    );
};

export default Footer;
