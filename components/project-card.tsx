import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

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
    <Link href={href} className="group block">
      <div className="grid bg-white shadow-lg transition-shadow hover:shadow-xl md:grid-cols-2">
        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="mb-6 border-l-4 border-[#0045FF] pl-4">
            <h3 className="mb-2 text-2xl font-bold">{title}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
          <p className="leading-relaxed text-gray-600">{description}</p>
          <div className="buttons mt-6 flex items-center gap-6">
            <Link href={code}>
              <Button className="bg-[#0045FF] px-8 text-white hover:bg-[#0045FF]/90">
                CODE
              </Button>
            </Link>
            <Link href={demo}>
              <Button variant="outline" className="bg-black px-8 text-white">
                DEMO
              </Button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-64 bg-gray-100 md:h-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Link>
  );
}
