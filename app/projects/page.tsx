'use client';

import ProjectCard from '@/components/project-card';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import GetMeAChai from '@/public/getmeachai.png';
import Kisansetu from '@/public/Kisansetu.png';
import ResumeReview from '@/public/resume_review.png';
import dnsServer from '@/public/dnsServer.png';
import { motion } from 'framer-motion';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'GetMeAChai',
      role: 'Full Stack',
      description:
        'Get Me a Chai is a crowdfunding platform designed to help creators receive support through direct contributions from fans and followers. Inspired by “Buy Me a Coffee,” it allows users to fund creators through donations, ensuring creators can continue doing what they love with the support of their community.',
      image: GetMeAChai,
      href: 'https://get-me-a-chai-theta.vercel.app/',
      code: 'https://github.com/Denyme24/GetMeAChai.git',
      demo: 'https://get-me-a-chai-theta.vercel.app/',
    },
    {
      title: 'Kisan Setu',
      role: 'Blockchain',
      description:
        'A blockchain-based marketplace bridging farmers and buyers. It ensures transparent contract farming through features like real-time order updates, ZetaChain-powered cross-chain payments, and PDF contract generation.',
      image: Kisansetu,

      href: 'https://www.youtube.com/watch?v=NEWT4eQMLEE',
      code: 'https://github.com/slashexx/kisansetu',
      demo: 'https://www.youtube.com/watch?v=NEWT4eQMLEE',
    },
    {
      title: 'Resume Review',
      role: 'Full Stack',
      description:
        'This project helps you shortlist the best resumes based on the job description you provide. It checks for matching skills from the given job description and the resumes, and based on the matching skills, it assigns a similarity score that helps determine the most relevant resume among all.',
      image: ResumeReview,
      href: '/projects',
      code: 'https://github.com/Denyme24/Resume-Review.git',
      demo: '/projects',
    },
    {
      title: 'Custom DNS Server',
      role: 'Networking',
      description:
        'A lightweight DNS server built with Go and Fiber for authoritative domain resolution. Handles UDP-based DNS queries with in-memory record storage and provides a REST API for dynamic record management. Features custom port support and real-time domain mapping. Wrote an in-depth blog explaining DNS fundamentals and the development journey.',
      image: dnsServer,
      href: 'https://dev.to/denyme24/dns-explained-from-basics-to-building-my-own-dns-server-25o6',
      code: 'https://github.com/Denyme24/my-dns-server',
      demo: 'https://github.com/Denyme24/my-dns-server#readme',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-[#F5F0EC] to-[#EAE6E0] py-16">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center justify-center gap-3 text-4xl font-bold"
            >
              <motion.div
                className="h-4 w-4 bg-[#0045FF]"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-2xl leading-relaxed text-gray-600"
            >
              Explore my projects, where each one reflects my growth as a
              developer. From concept to execution, I tackle challenges with
              creativity and technical skill. Dive in to see the work that
              drives my passion for building impactful solutions.
            </motion.p>
          </div>

          {/* Projects Grid with staggered animation */}
          <motion.div
            className="space-y-12"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>

          {/* Removed decorative bubble elements */}
        </div>
      </div>
      <Footer />
    </>
  );
}
