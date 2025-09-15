'use client';

import { Button } from '@/components/ui/button';
import ProfileCard from './card';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative flex min-h-[calc(100vh-70px)] items-center justify-center overflow-hidden bg-[#F5F0EC]">
      {/* Content */}
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-10 pb-4 md:grid-cols-2 md:px-28 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileCard />
        </motion.div>

        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="xs:text-5xl relative text-4xl font-bold sm:text-7xl"
          >
            <span className="whitespace-nowrap">
              Namaste
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
                className="ml-2 inline-block text-[#0045FF]"
              >
                :)
              </motion.span>
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl"
          >
            Here's who I am & what I do
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-4"
          >
            <Link href={'/naman_resume.pdf'}>
              <Button className="bg-[#0045FF] px-8 text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#0045FF]/90 hover:shadow-lg hover:shadow-blue-200">
                RESUME
              </Button>
            </Link>
            <Link href={'/projects'}>
              <Button
                variant="outline"
                className="group relative overflow-hidden border-0 bg-black px-8 text-white shadow-md hover:shadow-lg"
              >
                <span className="relative z-10">PROJECTS</span>
                <span className="absolute inset-0 origin-left scale-x-0 transform bg-[#0045FF] transition-transform duration-300 group-hover:scale-x-100"></span>
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="max-w-lg text-gray-600"
          >
            I'm a dedicated developer with a knack for crafting intuitive,
            scalable, and visually appealing web solutions. Full-stack
            development is my playground, where I merge technical precision with
            creative problem-solving. My expertise spans JavaScript, Go, and
            Next.js, and I'm committed to writing efficient, maintainable code
            that drives results. Continuously learning and exploring, I aim to
            stay at the forefront of innovation, building solutions that leave a
            meaningful impact. Whether it's architecting a dynamic web app,
            refining user experiences, or diving into the latest tech trends, I
            thrive on turning ideas into reality with purpose and passion.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
