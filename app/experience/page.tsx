'use client';

import Navbar from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code } from 'lucide-react';

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      company: 'Klugsys (hayy.ai)',
      role: 'Software Developer',
      period: 'November 2025 - Present',
      location: 'Remote',
      description:
        'Building an AI-powered QA assistant that reads Software Requirements Specifications (SRS) and generates structured test cases, traceability matrices, and coverage reports automatically, reducing manual effort and improving consistency.',
      achievements: [
        'Developing AI agent for automated test-case generation from SRS documents',
        'Implementing structured test cases, traceability matrices, and coverage reports',
        'Reducing manual QA effort and improving consistency through automation',
      ],
      icon: Code,
    },
    {
      id: 2,
      company: 'Open Healthcare Network',
      role: 'Full Stack Developer',
      period: 'July 2025 - November 2025',
      location: 'Remote',
      description:
        'Actively contributed to the open-source care fe project, working with a global, distributed team to design, build, and optimize modern healthcare applications.',
      achievements: [
        'Authored and reviewed pull requests for new features, UI and mobile fixes, and backend improvements',
        'Maintained high code quality and clear documentation standards',
        'Engaged in code reviews, issue discussions, and onboarding newcomers',
        'Promoted open-source best practices and collaborative spirit',
      ],
      icon: Code,
    },
    {
      id: 3,
      company: 'Anthroholic',
      role: 'Full Stack Developer',
      period: 'October 2025 - November 2025',
      location: 'Remote',
      description:
        'Designed and implemented a daily answer writing feature for UPSC aspirants, delivering curated daily questions across multiple categories.',
      achievements: [
        'Built scheduled cron job backend service for daily question delivery',
        'Implemented multi-category support (GS1, GS2, GS3, GS4, Essay)',
        'Ensured timely content delivery from database',
      ],
      icon: Briefcase,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#F5F0EC] to-[#EAE6E0] py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header Section */}
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center justify-center gap-4"
            >
              <motion.div
                className="h-4 w-4 bg-[#0045FF]"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                experience
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
            >
              A journey through my professional experiences, where each role has
              shaped my growth as a developer and contributed to building
              impactful solutions.
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative mx-auto max-w-5xl">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-[#0045FF]/20 md:left-1/2 md:block" />

            {/* Experiences */}
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={experience.id}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-8 top-8 z-10 hidden md:left-1/2 md:block md:-translate-x-1/2">
                      <motion.div
                        className="h-6 w-6 rounded-full border-4 border-white bg-[#0045FF] shadow-lg"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>

                    {/* Experience Card */}
                    <motion.div
                      className={`relative ml-0 md:ml-0 ${
                        isEven ? 'md:mr-[48%]' : 'md:ml-[48%]'
                      }`}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="rounded-lg bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-2xl sm:p-6 md:p-7">
                        {/* Company Header */}
                        <div className="mb-4 flex items-start justify-between sm:mb-6">
                          <div className="min-w-0 flex-1">
                            <div className="mb-2 flex items-center gap-2 sm:gap-3">
                              <div className="shrink-0 rounded-lg bg-[#0045FF]/10 p-1.5 sm:p-2">
                                <Icon className="h-5 w-5 text-[#0045FF] sm:h-6 sm:w-6" />
                              </div>
                              <div className="min-w-0">
                                <h2 className="break-words text-xl font-bold sm:text-2xl">
                                  {experience.company}
                                </h2>
                                <p className="text-base font-semibold text-[#0045FF] sm:text-lg">
                                  {experience.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Period and Location */}
                        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray-600 sm:mb-4 sm:gap-4 sm:text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:mb-6 sm:text-base">
                          {experience.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h3 className="mb-2 text-xs font-semibold tracking-wide text-gray-500 sm:mb-3 sm:text-sm">
                            key contributions
                          </h3>
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                className="flex items-start gap-2 text-gray-600 sm:gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * idx }}
                              >
                                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0045FF]" />
                                <span className="min-w-0 break-words text-sm leading-relaxed sm:text-base">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Decorative Accent */}
                        <div className="absolute left-0 top-0 h-1 w-full rounded-t-lg bg-gradient-to-r from-[#0045FF] to-transparent" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
