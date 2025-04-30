'use client';

import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/namanraj24/',
    },
    { name: 'Github', icon: Github, href: 'https://github.com/Denyme24' },
  ];

  return (
    <footer className="border-t border-gray-200 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        {/* Copyright Section */}
        <motion.div
          className="text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>© 2025 by Naman Raj.</p>
        </motion.div>

        {/* Contact Section */}
        <div className="flex gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-2 font-medium">Call</h3>
            <motion.p
              className="text-sm text-gray-600"
              whileHover={{ color: '#0045FF', x: 2 }}
              transition={{ duration: 0.2 }}
            >
              +91 7321896070
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-2 font-medium">Write</h3>
            <Link
              href="mailto:rajnaman488@gmail.com"
              className="text-sm text-gray-600 transition-colors hover:text-[#0045FF]"
            >
              <motion.span whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                rajnaman488@gmail.com
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="mb-2 font-medium">Follow</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link
                  href={social.href}
                  className="text-gray-600 transition-colors hover:text-[#0045FF]"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
