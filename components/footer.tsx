import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/naman-raj24",
    },
    { name: "Github", icon: Github, href: "https://github.com/Denyme24" },
  ];

  return (
    <footer className="border-t border-gray-200 py-8 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Copyright Section */}
        <div className="text-sm text-gray-600">
          <p>© 2024 by Naman Raj.</p>
        </div>

        {/* Contact Section */}
        <div className="flex gap-12">
          <div>
            <h3 className="font-medium mb-2">Call</h3>
            <p className="text-sm text-gray-600">+91 7321896070</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Write</h3>
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
          <h3 className="font-medium mb-2">Follow</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
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
