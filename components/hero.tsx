import { Button } from '@/components/ui/button';
import ProfileCard from './card';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="flex min-h-[calc(100vh-70px)] items-center justify-center bg-[#F5F0EC]">
      <div className="lg:px container mx-auto grid items-center gap-12 px-10 pb-4 md:grid-cols-2 md:px-28 md:pb-0">
        <ProfileCard />
        <div className="space-y-6">
          <h1 className="text-7xl font-bold">Hello:) </h1>
          <h2 className="text-3xl">Here's who I am & what I do</h2>
          <div className="flex gap-4">
            <Link href={'/resume.pdf'}>
              <Button className="bg-[#0045FF] px-8 text-white hover:bg-[#0045FF]/90">
                RESUME
              </Button>
            </Link>
            <Link href={'/projects'}>
              <Button variant="outline" className="bg-black px-8 text-white">
                PROJECTS
              </Button>
            </Link>
          </div>

          <p className="max-w-lg text-gray-600">
            I’m a dedicated developer with a knack for crafting intuitive,
            scalable, and visually appealing web solutions. Full-stack
            development is my playground, where I merge technical precision with
            creative problem-solving. My expertise spans JavaScript, Go, and
            Next.js, and I’m committed to writing efficient, maintainable code
            that drives results. Continuously learning and exploring, I aim to
            stay at the forefront of innovation, building solutions that leave a
            meaningful impact. Whether it's architecting a dynamic web app,
            refining user experiences, or diving into the latest tech trends, I
            thrive on turning ideas into reality with purpose and passion.
          </p>
        </div>
      </div>
    </div>
  );
}
