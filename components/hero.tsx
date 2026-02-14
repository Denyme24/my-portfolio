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
              namaste
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
            here&apos;s who i am & what i do
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-4"
          >
            <Link href={'/naman_resume.pdf'}>
              <Button className="bg-[#0045FF] px-8 text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#0045FF]/90 hover:shadow-lg hover:shadow-blue-200">
                resume
              </Button>
            </Link>
            <Link href={'/projects'}>
              <Button
                variant="outline"
                className="group relative overflow-hidden border-0 bg-black px-8 text-white shadow-md hover:shadow-lg"
              >
                <span className="relative z-10">projects</span>
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
            I&apos;m a software engineer who is keen on building reliable
            systems and tools from applications to automated workflows that
            works. I started out writing full-stack web apps, and over time I
            found myself enjoying the work that makes software stable and easier
            to maintain. Lately I&apos;ve been working more with DevOps
            practices and creating AI agents that take care of repetitive work
            so teams can focus on what matters. I like solving problems that are
            practical and make a real difference, and I&apos;m always picking up
            new skills to keep improving the way I build and deliver software.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
