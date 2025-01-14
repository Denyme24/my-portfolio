'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'ABOUT ME', href: '/' },
    { name: 'RESUME', href: '/resume.pdf' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
  ];
  const pathname = usePathname();

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 h-[10vh] items-center bg-white/80 px-6 py-6 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 bg-[#0045FF]" />
          <Link
            href="/"
            className="flex items-center gap-2 text-black transition-opacity hover:opacity-80"
          >
            <span className="whitespace-nowrap font-medium">Naman Raj</span>
            <span className="hidden font-light text-gray-600 sm:inline">
              / MERN Stack
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 sm:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? 'text-[#0045FF]'
                  : 'text-gray-900 hover:text-[#0045FF]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            aria-label="Toggle menu"
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
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 bg-white px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
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
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
