'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Dev from '../public/dev.png';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'about_me', href: '/' },
    { name: 'resume', href: '/naman_resume.pdf' },
    { name: 'projects', href: '/projects' },
    { name: 'experience', href: '/experience' },
    { name: 'achievements', href: '/achievements' },
    { name: 'contact', href: '/contact' },
  ];

  const pathname = usePathname();

  return (
    <motion.nav
      className="sticky left-0 right-0 top-0 z-50 h-[8vh] items-center bg-white/80 px-6 py-4 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.div
            className="h-4 w-4 bg-[#0045FF]"
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          <Link
            href="/"
            className="flex items-center gap-2 text-black transition-opacity hover:opacity-80"
          >
            <span className="whitespace-nowrap font-medium">Naman Raj</span>
            <span className="hidden font-light text-gray-600 sm:inline">
              / Software & Systems
            </span>
          </Link>
        </motion.div>

        <motion.div
          className={'flex items-center justify-center gap-8'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="https://github.com/Denyme24"
              className="text-gray-900 hover:text-[#0045FF]"
            >
              <Github className="h-6 w-6" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="https://www.linkedin.com/in/namanraj24/"
              className="text-gray-900 hover:text-[#0045FF]"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="https://dev.to/denyme24"
              className="text-gray-900 hover:text-[#0045FF]"
            >
              <Image
                src={Dev}
                alt="dev"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 sm:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm transition-colors"
            >
              <motion.span
                className={`${
                  pathname === item.href
                    ? 'text-[#0045FF]'
                    : 'text-gray-900 hover:text-[#0045FF]'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {item.name}
              </motion.span>
              {pathname === item.href && (
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#0045FF]"
                  layoutId="navbar-underline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="sm:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-1 bg-white px-2 pb-3 pt-2">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    pathname === item.href
                      ? 'bg-blue-50 text-[#0045FF]'
                      : 'text-gray-900 hover:bg-blue-50 hover:text-[#0045FF]'
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
