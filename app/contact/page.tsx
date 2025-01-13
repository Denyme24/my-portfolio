'use client';
import React from 'react';
import { useState } from 'react';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
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
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#EAE6E0] px-6 py-20">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <h1 className="mb-12 flex items-center justify-center gap-3 text-4xl font-bold">
            <div className="h-4 w-4 bg-[#0045FF]" />
            Let's talk
          </h1>

          {/* Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg md:p-12">
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Name Fields */}
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold"
                  >
                    First Name <span className="text-[#0045FF]">*</span>
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
                    Last Name <span className="text-[#0045FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold">
                  Email <span className="text-[#0045FF]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                />
                {emailError && (
                  <p className="text-sm text-red-600">{emailError}</p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none border-b-2 border-gray-200 py-2 outline-none transition-colors focus:border-[#0045FF]"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#0045FF] px-8 py-3 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                {message && <p className="mt-4 text-green-600">{message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
