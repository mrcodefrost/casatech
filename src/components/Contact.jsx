import { Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("Casaofficial.43@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // reset after 2s
    };

    return (
        <section className="relative py-32 px-6 md:px-20 bg-dark text-light overflow-hidden" id="contact">
            {/* Floating cosmic elements */}
            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-6 h-6 rounded-full bg-[#7b5cff] opacity-50"
            />
            <motion.div
                animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 right-20 w-10 h-10 rounded-full bg-[#5ddcff] opacity-40"
            />
            <motion.div
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-1/4 w-8 h-8 rounded-full bg-[#ff6ec7] opacity-50"
            />

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Let's Build Something Amazing Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-300 text-lg"
                >
                    Got a project or idea? Shoot us an email and let’s start creating digital magic.
                </motion.p>

                {/* Primary CTA Button */}
                <motion.a
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(123,92,255,0.6)" }}
                    transition={{ duration: 0.3 }}
                    href="mailto:Casaofficial.43@gmail.com"
                    className="inline-block bg-[#7b5cff] text-dark font-semibold px-8 py-4 rounded-xl text-lg transition-transform duration-300"
                >
                    Send an Email
                </motion.a>

                {/* Fallback Email Text with Copy Icon */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-4 flex items-center justify-center space-x-2 text-gray-400"
                >
                    <span>Button not working? Drop us a mail at:</span>
                    <div
                        onClick={handleCopy}
                        className="flex items-center cursor-pointer space-x-1 text-[#7b5cff] hover:text-[#5ddcff] transition-colors duration-300"
                    >
                        <span className="font-semibold">Casaofficial.43@gmail.com</span>
                        <Copy className="w-5 h-5" />
                    </div>
                    {copied && <span className="text-sm text-green-400 ml-2">Copied!</span>}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
