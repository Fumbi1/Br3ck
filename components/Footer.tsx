'use client';

import { motion } from 'framer-motion';
import { Twitter, Github } from 'lucide-react';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const footerSections = [
  {
    title: "Why Br3ck",
    id: "#whybr3ck"
  },
  {
    title: "Our Offerings",
    id: "#offerings"
  },
  {
    title: "How We Work",
    id: "#how-we-work"
  },
  {
    title: "Join Community",
    id: "#community"
  }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {

  const router = useRouter()

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 md:w-[15%]">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image src={"/logo.svg"} alt='logo' width={44.6} height={47.6} />
              </motion.div>
              <span className="text-2xl font-bold text-white">BR3CK</span>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className='w-[90%] md:w-fit flex flex-col md:flex-row gap-6 md:items-center'>
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className='cursor-pointer'
                onClick={() => router.push(section.id)}
              >
                <p className="text-sm text-white mb-4">
                  {section.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 md:w-[10%]">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-2 rounded-lg glass-card hover:bg-blue-500/10 transition-all duration-300 border border-border/30 hover:border-blue-500/30"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-blue-400 transition-colors" />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="pt-8 border-t border-border/50 flex flex-col md:gap-0 md:flex-row-reverse items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
            {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Sitemap'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 BR3CK. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}