import type { Metadata } from 'next';
import { PageTransition } from '@/components/PageTransition';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';
import { CTASection } from '@/components/CTASection';
import {
  personalInfo,
  approachItems,
  valueItems,
  goalsText,
  allSkills,
} from '@/lib/data';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Chi sono',
  description:
    'Scopri il percorso, l\u2019approccio e i valori di Daniele Caldarola, Web Developer.',
};

export default function ChiSonoPage() {
  return (
    <PageTransition>
      {/* Intro */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[120px] animate-blob" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6">
          <Reveal>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
              Chi sono
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Piacere, sono <span className="text-gradient">Daniele.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {personalInfo.aboutPart1}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {personalInfo.aboutPart2}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading label="Approccio" title="Come affronto lo sviluppo" />
          <div className="grid gap-6 md:grid-cols-3">
            {approachItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="group relative h-full rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary mb-4">
                    <Icon name="eye" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 sm:p-12">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon name="target" size={22} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Obiettivi</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {goalsText}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading label="Valori" title="Ciò in cui credo" />
          <div className="grid gap-6 md:grid-cols-3">
            {valueItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="group relative h-full rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary mb-4">
                    <Icon name="heart" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            label="Tecnologie"
            title="Strumenti che utilizzo"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
