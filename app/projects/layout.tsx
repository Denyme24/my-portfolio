import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Naman Raj',
  description:
    'Explore my projects including GetMeAChai, Kisan Setu, Resume Review, and Custom DNS Server.',
  openGraph: {
    title: 'Projects | Naman Raj',
    description: 'Explore my software development projects and case studies.',
    images: ['/og-image.jpg'],
  },
  keywords:
    'Naman Raj, developer projects, GetMeAChai, Kisan Setu, Resume Review, DNS Server',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
