'use client';

import Image from 'next/image';
import NamanImg from '@/public/Naman_img.jpg';
import { motion } from 'framer-motion';

export default function ProfileCard() {
  return (
    <motion.div
      className="w-full max-w-md rounded-lg bg-[#F7F3F0] p-8 shadow-lg"
      whileHover={{
        boxShadow:
          '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        y: -5,
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Profile Image - Animation removed */}
      <motion.div
        className="relative mx-auto mb-6 h-52 w-52"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-full bg-gray-200">
          {/* Removed motion.div wrapper and hover animation */}
          <Image
            src={NamanImg}
            alt="Profile"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Name */}
      <div className="text-center">
        <motion.h2
          className="mb-2 text-[2rem] font-bold leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Naman
          <br />
          Raj
        </motion.h2>

        {/* Divider Line */}
        <motion.div
          className="mx-auto mb-4 h-0.5 w-12 bg-[#0045FF]"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        ></motion.div>

        {/* Title */}
        <motion.p
          className="text-sm tracking-[0.2em] text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Full Stack Developer
        </motion.p>
      </div>
    </motion.div>
  );
}
