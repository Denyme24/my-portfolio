'use client';
import React from 'react';
import { useState } from 'react';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setEmailError(''); // Clear error before submission

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setMessage('Your message has been sent successfully.');
        const formElement = document.getElementById(
          'contactForm',
        ) as HTMLFormElement;
        if (formElement) {
          formElement.reset();
        }
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#F5F0EC] to-[#EAE6E0] px-6 py-20">
        {/* Removed decorative bubble elements */}

        <div className="relative z-10 mx-auto max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-12 flex items-center justify-center gap-3 text-4xl font-bold">
              <motion.div
                className="h-4 w-4 bg-[#0045FF]"
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
              let&apos;s talk
            </h1>
          </motion.div>

          {/* Form */}
          <motion.div
            className="rounded-lg bg-white p-8 shadow-lg md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)' }}
          >
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Name Fields */}
              <motion.div
                className="grid gap-8 md:grid-cols-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold"
                  >
                    first name <span className="text-[#0045FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold"
                  >
                    last name <span className="text-[#0045FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold">
                  email <span className="text-[#0045FF]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                />
                {emailError && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-600"
                  >
                    {emailError}
                  </motion.p>
                )}
              </motion.div>

              {/* Subject */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold"
                >
                  subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#0045FF] px-8 py-3 text-white transition-all hover:shadow-lg hover:shadow-blue-200 disabled:opacity-70"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{isSubmitting ? 'sending...' : 'send'}</span>
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  <span className="absolute bottom-0 left-0 h-full w-0 bg-white bg-opacity-20 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
                {message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mt-4 ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {message}
                  </motion.p>
                )}
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
