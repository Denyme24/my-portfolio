'use client';

import Navbar from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, FileText, ExternalLink, Award } from 'lucide-react';

export default function AchievementsPage() {
  const achievements = [
    {
      id: 1,
      title: "FantomCode'25 Champion",
      subtitle: '1st Prize Winner',
      description:
        'Outperformed 80+ national teams by building a standout AI-powered sustainability platform that showcased innovative solutions to environmental challenges.',
      image: '/hackathon_win.JPG',
      icon: Trophy,
      color: '#0045FF',
      stats: { teams: '80+', category: 'National', position: '1st' },
      link: 'https://dev.to/denyme24/we-came-we-coded-we-cleaned-the-planet-and-won-4ich',
    },
    {
      id: 2,
      title: 'Sustainability Analysis Method and System for Item Classification and Disposal Recommendations',
      subtitle: 'patent published · co-inventor',
      description:
        'Our patent has been officially published in The Patent Office Journal. We developed a system that leverages Machine Learning to process image data and classify items (as reusable, recyclable, resalable or compostable). It provides users with personalized disposal recommendations and calculates real-time carbon footprint reduction for their choices. Team of inventors: Khushi Agrawal, Arpit Srivastava, Shreyansh Pathak, Naman Raj.',
      image: '/patent_img.jpg',
      icon: Award,
      color: '#0045FF',
      stats: {
        journal: '46/2025',
        published: '14/11/2025',
        role: 'Co-inventor',
      },
      link: '/patent.pdf',
    },
    {
      id: 3,
      title: 'Open Healthcare Network',
      subtitle: 'Ranked 1st, Interns Leaderboard',
      description:
        'Achieved top position among 40 interns across all categories for consistent, high-impact open-source contributions, demonstrating exceptional technical skills and dedication to the community.',
      image: '/intern_leaderboard.jpg',
      icon: TrendingUp,
      color: '#0045FF',
      stats: { interns: '40+', rank: '1st', category: 'All Categories' },
    },
    {
      id: 4,
      title: 'Technical Writer',
      subtitle: 'Dev.to Blog Contributor',
      description:
        'Published insightful technical articles covering cutting-edge topics including Model Context Protocol, DNS architecture, and AI-driven hackathon experiences, reaching thousands of developers.',
      image: '/blog_contributor.jpg',
      icon: FileText,
      color: '#0045FF',
      stats: { platform: 'Dev.to', topics: '3+', reach: 'Global' },
      link: 'https://dev.to/denyme24',
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
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
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">achievements</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg"
            >
              These milestones so far reflects my journey as a developer, each
              one reminding me how far I’ve come, how much I’ve learned, and how
              much I still love building cool things.
            </motion.p>
          </div>

          {/* Achievements Grid */}
          <div className="mx-auto max-w-5xl">
            <motion.div
              className="space-y-16"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={achievement.id}
                    variants={itemVariants}
                    className="group"
                  >
                    {/* Achievement Card with Alternating Layout */}
                    <motion.div
                      className={`relative overflow-hidden bg-white shadow-2xl transition-all duration-500 ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      } flex flex-col md:flex`}
                      whileHover={{
                        y: -10,
                        boxShadow:
                          '0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {/* Decorative Gradient Bar */}
                      <div
                        className="absolute left-0 top-0 h-2 w-full"
                        style={{
                          background: `linear-gradient(90deg, ${achievement.color}, transparent)`,
                        }}
                      />

                      {/* Image Section */}
                      <div className="relative h-80 overflow-hidden md:h-auto md:w-1/2">
                        <motion.div
                          className="h-full w-full"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={achievement.image}
                            alt={achievement.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>

                        {/* Floating Icon Badge */}
                        <motion.div
                          className="absolute right-6 top-6 rounded-full bg-white/95 p-4 shadow-lg backdrop-blur-sm"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          style={{
                            boxShadow: `0 8px 32px ${achievement.color}40`,
                          }}
                        >
                          <Icon
                            className="h-8 w-8"
                            style={{ color: achievement.color }}
                          />
                        </motion.div>
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col justify-center p-4 sm:p-6 md:w-1/2 md:p-8">
                        {/* Title Group */}
                        <div className="mb-4 sm:mb-6">
                          <motion.div
                            className="mb-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold text-white sm:px-4 sm:py-1 sm:text-sm"
                            style={{ backgroundColor: achievement.color }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {achievement.subtitle}
                          </motion.div>
                          <h2 className="mb-3 break-words text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl">
                            {achievement.title}
                          </h2>
                          <div
                            className="h-1 w-20 rounded"
                            style={{ backgroundColor: achievement.color }}
                          />
                        </div>

                        {/* Description */}
                        <p className="mb-4 leading-relaxed text-gray-600 text-sm sm:mb-6 sm:text-base">
                          {achievement.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid min-w-0 grid-cols-3 gap-2 sm:gap-4">
                          {Object.entries(achievement.stats).map(
                            ([key, value]) => (
                              <motion.div
                                key={key}
                                className="min-w-0 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-2 text-center sm:p-3 md:p-4"
                                whileHover={{
                                  scale: 1.05,
                                  backgroundColor: '#f9fafb',
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <div
                                  className="mb-0.5 break-words text-xs font-bold sm:mb-1 sm:text-sm md:text-base lg:text-xl"
                                  style={{ color: achievement.color }}
                                >
                                  {value}
                                </div>
                                <div className="text-[10px] capitalize text-gray-500 sm:text-xs">
                                  {key}
                                </div>
                              </motion.div>
                            ),
                          )}
                        </div>

                        {/* Hover Indicator */}
                        {achievement.link && (
                          <Link
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <motion.div
                              className="mt-4 flex items-center gap-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100 sm:mt-6 sm:text-sm"
                              style={{ color: achievement.color }}
                              initial={{ x: -10 }}
                              whileHover={{ x: 0 }}
                            >
                              <span>view details</span>
                              <ExternalLink className="h-4 w-4" />
                            </motion.div>
                          </Link>
                        )}
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
