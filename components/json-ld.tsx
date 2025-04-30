'use client';

import React from 'react';

export default function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Naman Raj',
          url: 'https://namanraj.tech',
          image: 'https://namanraj.tech/portfolio_img.jpg',
          jobTitle: 'Full Stack Developer',
          worksFor: {
            '@type': 'Organization',
            name: 'Freelance',
          },
          sameAs: [
            'https://www.linkedin.com/in/namanraj24/',
            'https://github.com/Denyme24',
            'https://dev.to/denyme24',
          ],
          knowsAbout: [
            'JavaScript',
            'React',
            'Next.js',
            'Go',
            'Web Development',
          ],
        }),
      }}
    />
  );
}
