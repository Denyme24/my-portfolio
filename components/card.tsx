import Image from "next/image";
import NamanImg from "@/public/portfolio_img.jpg";
export default function ProfileCard() {
  return (
    <div className="bg-[#F7F3F0] p-8 rounded-lg shadow-lg max-w-md w-full">
      {/* Profile Image */}
      <div className="relative w-52 h-52 mx-auto mb-6">
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
        <h2 className="text-[2rem] font-bold mb-2 leading-tight">
          Naman
          <br />
          Raj
        </h2>

        {/* Divider Line */}
        <div className="w-12 h-0.5 bg-[#0045FF] mx-auto mb-4"></div>

        {/* Title */}
        <p className="text-gray-600 tracking-[0.2em] text-sm">
          MERN Stack Developer
        </p>
      </div>
    </div>
  );
}
