'use client';

import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { personalInfo } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hai un&apos;idea? <span className="text-gradient">Parliamone.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hai un progetto web in mente o vuoi semplicemente fare due domande?
            Scrivimi.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href="/contatti"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-purple"
          >
            Contattami
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
