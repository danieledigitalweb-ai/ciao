'use client';

import { Reveal } from '@/components/Reveal';

interface SectionHeadingProps {
  label: string;
  title: string;
  id?: string;
}

export function SectionHeading({ label, title, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-16 flex flex-col items-center text-center">
      <Reveal>
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
