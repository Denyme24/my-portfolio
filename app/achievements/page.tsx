'use client';

import Navbar from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Trophy,
  TrendingUp,
  FileText,
  ExternalLink,
  Award,
} from 'lucide-react';

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
      id: 3,
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
        <div className="container mx-auto px-6">
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
              <h1 className="text-5xl font-bold">Achievements</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600"
            >
              These milestones so far reflects my journey as a developer, each
              one reminding me how far I’ve come, how much I’ve learned, and how
              much I still love building cool things.
            </motion.p>
          </div>

          {/* Achievements Grid */}
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
                    <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
                      {/* Title Group */}
                      <div className="mb-6">
                        <motion.div
                          className="mb-2 inline-block rounded-full px-4 py-1 text-sm font-semibold text-white"
                          style={{ backgroundColor: achievement.color }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {achievement.subtitle}
                        </motion.div>
                        <h2 className="mb-3 text-3xl font-bold">
                          {achievement.title}
                        </h2>
                        <div
                          className="h-1 w-20 rounded"
                          style={{ backgroundColor: achievement.color }}
                        />
                      </div>

                      {/* Description */}
                      <p className="mb-6 leading-relaxed text-gray-600">
                        {achievement.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(achievement.stats).map(
                          ([key, value]) => (
                            <motion.div
                              key={key}
                              className="rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-4 text-center"
                              whileHover={{
                                scale: 1.05,
                                backgroundColor: '#f9fafb',
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <div
                                className="mb-1 text-xl font-bold"
                                style={{ color: achievement.color }}
                              >
                                {value}
                              </div>
                              <div className="text-xs capitalize text-gray-500">
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
                            className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100"
                            style={{ color: achievement.color }}
                            initial={{ x: -10 }}
                            whileHover={{ x: 0 }}
                          >
                            <span>View Details</span>
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

          {/* Bottom Decorative Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="flex items-center gap-3 rounded-full bg-white px-8 py-4 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-6 w-6 text-[#0045FF]" />
                <span className="font-semibold text-gray-800">
                  More achievements on the way...
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
