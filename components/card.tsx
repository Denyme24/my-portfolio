import Image from 'next/image';
import NamanImg from '@/public/portfolio_img.jpg';
export default function ProfileCard() {
  return (
    <div className="w-full max-w-md rounded-lg bg-[#F7F3F0] p-8 shadow-lg">
      {/* Profile Image */}
      <div className="relative mx-auto mb-6 h-52 w-52">
        <div className="absolute inset-0 rounded-full bg-gray-200">
          <Image
            src={NamanImg}
            alt="Profile"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Name */}
      <div className="text-center">
        <h2 className="mb-2 text-[2rem] font-bold leading-tight">
          Naman
          <br />
          Raj
        </h2>

        {/* Divider Line */}
        <div className="mx-auto mb-4 h-0.5 w-12 bg-[#0045FF]"></div>

        {/* Title */}
        <p className="text-sm tracking-[0.2em] text-gray-600">
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
