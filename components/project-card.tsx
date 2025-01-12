import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image: StaticImageData;
  href: string;
  code: string;
  demo: string;
}

export default function ProjectCard({
  title,
  role,
  description,
  image,
  href,
  code,
  demo,
}: ProjectCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="grid md:grid-cols-2 bg-white shadow-lg hover:shadow-xl transition-shadow">
        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="border-l-4 border-[#0045FF] pl-4 mb-6">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <div className="buttons flex  items-center gap-6 mt-6">
            <Link href={code}>
              <Button className="bg-[#0045FF] hover:bg-[#0045FF]/90 text-white px-8">
                CODE
              </Button>
            </Link>
            <Link href={demo}>
              <Button variant="outline" className="px-8 text-white">
                DEMO
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-64 md:h-full bg-gray-100">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
}
