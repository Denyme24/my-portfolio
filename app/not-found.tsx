'use client';
import Link from 'next/link';
import Navbar from '@/components/header';
import Footer from '@/components/footer';
import { ArrowLeft } from 'lucide-react'; // Import this from lucide-react

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#EAE6E0] px-6 text-center">
        {/* Error Code with Animation */}
        <div className="mb-8 flex items-center">
          <div className="animate-pulse text-8xl font-bold text-[#0045FF]">
            4
          </div>
          <div className="mx-2 h-16 w-16 animate-spin rounded-full border-b-4 border-[#0045FF]"></div>
          <div className="animate-pulse text-8xl font-bold text-[#0045FF]">
            4
          </div>
        </div>

        {/* Error Message */}
        <h1 className="mb-3 text-4xl font-bold">Page Not Found</h1>
        <p className="mb-8 max-w-md text-lg text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 flex items-center rounded-full bg-[#0045FF] px-8 py-3 text-white"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Home
        </Link>
      </div>
      <Footer />
    </>
  );
}
