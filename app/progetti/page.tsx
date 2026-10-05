import type { Metadata } from 'next';
import { PageTransition } from '@/components/PageTransition';
import { Reveal } from '@/components/Reveal';
import { ProjectCard } from '@/components/ProjectCard';
import { CTASection } from '@/components/CTASection';
import { projects } from '@/lib/data';
import { FolderOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Progetti',
  description:
    'I miei progetti, esperimenti e lavori personali. Nuovi progetti in arrivo.',
};

export default function ProgettiPage() {
  const hasProjects = projects.length > 0;

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
              Progetti
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              I miei <span className="text-gradient">progetti</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Una raccolta dei miei lavori, esperimenti e progetti personali.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {hasProjects ? (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                <ProjectCard key={project.title} project={project} delay={i * 0.1} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/30 p-12 text-center">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
                </div>
                <div className="relative flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-secondary text-muted-foreground">
                    <FolderOpen size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Nuovi progetti in arrivo.
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    Questa sezione sarà presto aggiornata con i miei lavori,
                    esperimenti e progetti personali.
                  </p>
                  <div className="mt-2 h-1 w-32 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-1/2 animate-gradient rounded-full bg-gradient-to-r from-primary/40 to-primary" />
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
