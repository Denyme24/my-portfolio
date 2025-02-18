import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';

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
        <div className="text-sm text-gray-600">
          <p>© 2025 by Naman Raj.</p>
        </div>

        {/* Contact Section */}
        <div className="flex gap-12">
          <div>
            <h3 className="mb-2 font-medium">Call</h3>
            <p className="text-sm text-gray-600">+91 7321896070</p>
          </div>
          <div>
            <h3 className="mb-2 font-medium">Write</h3>
            <Link
              href="mailto:rajnaman488@gmail.com"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              rajnaman488@gmail.com
            </Link>
          </div>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="mb-2 font-medium">Follow</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-600 transition-colors hover:text-gray-900"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
