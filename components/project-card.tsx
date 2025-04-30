'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image: StaticImageData;
  href: string;
  code: string;
  demo: string;
}

export default function ProjectCard({
  title,
  role,
  description,
  image,
  href,
  code,
  demo,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <Link href={href} className="group block">
        <motion.div
          className="grid bg-white shadow-lg transition-all duration-300 md:grid-cols-2"
          whileHover={{
            boxShadow:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            y: -5,
          }}
        >
          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="mb-6 border-l-4 border-[#0045FF] pl-4">
              <motion.h3
                className="mb-2 text-2xl font-bold"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
              <p className="text-gray-600">{role}</p>
            </div>
            <p className="leading-relaxed text-gray-600">{description}</p>
            <div className="buttons mt-6 flex items-center gap-6">
              <Link href={code}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-[#0045FF] px-8 text-white shadow-md transition-all duration-200 hover:bg-[#0045FF]/90 hover:shadow-lg">
                    CODE
                  </Button>
                </motion.div>
              </Link>
              <Link href={demo}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="relative overflow-hidden border-0 bg-black px-8 text-white"
                  >
                    <span className="relative z-10">DEMO</span>
                    <span className="absolute inset-0 origin-left scale-x-0 transform bg-[#0045FF] transition-transform duration-300 group-hover:scale-x-100"></span>
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>

          {/* Image - Restored hover effect */}
          <div className="relative h-64 overflow-hidden bg-gray-100 md:h-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="h-full w-full"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
