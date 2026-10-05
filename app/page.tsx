import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { PageTransition } from '@/components/PageTransition';
import { personalInfo, allSkills, services, projects } from '@/lib/data';
import { ProjectCard } from '@/components/ProjectCard';
import { ArrowRight, FolderOpen } from 'lucide-react';

export const metadata = {
  title: 'Daniele Caldarola — Web Developer',
  description:
    'Portfolio personale di Daniele Caldarola, Web Developer. Scopri competenze, progetti e servizi web.',
};

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      {/* Brief introduction */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Chi sono
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {personalInfo.aboutPart1}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/chi-sono"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              Scopri chi sono
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Skills preview */}
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading label="Competenze" title="Tecnologie & Competenze" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allSkills.slice(0, 4).map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/competenze"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
            >
              Vedi competenze
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading label="Servizi" title="Cosa posso realizzare" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} delay={i * 0.08} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/servizi"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
            >
              Scopri i servizi
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading label="Progetti" title="I miei progetti" />

          {projects.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {projects.slice(0, 2).map((project, i) => (
                <ProjectCard key={project.title} project={project} delay={i * 0.1} />
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card/30 p-10 text-center">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                </div>
                <div className="relative flex flex-col items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-secondary text-muted-foreground">
                    <FolderOpen size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Nuovi progetti in arrivo.
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Questa sezione sarà presto aggiornata con i miei lavori,
                    esperimenti e progetti personali.
                  </p>
                </div>
              </div>
            </Reveal>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/progetti"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
            >
              Vedi i progetti
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
