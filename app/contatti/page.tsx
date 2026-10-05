import type { Metadata } from 'next';
import { PageTransition } from '@/components/PageTransition';
import { Reveal } from '@/components/Reveal';
import { ContactInfo, ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Contatta Daniele Caldarola, Web Developer. Hai un progetto in mente? Scrivimi.',
};

export default function ContattiPage() {
  return (
    <PageTransition>
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px] animate-blob" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Contatti
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hai un&apos;idea? <span className="text-gradient">Parliamone.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hai un progetto web in mente o vuoi semplicemente fare due
              domande? Scrivimi.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
