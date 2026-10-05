import type { Metadata } from 'next';
import { PageTransition } from '@/components/PageTransition';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SkillCard } from '@/components/SkillCard';
import { CTASection } from '@/components/CTASection';
import { skillCategories } from '@/lib/data';
import { Icon } from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Competenze',
  description:
    'Le tecnologie e gli strumenti che utilizzo, organizzati per categoria.',
};

export default function CompetenzePage() {
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
              Competenze
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Tecnologie & <span className="text-gradient">Competenze</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Gli strumenti e le tecnologie che utilizzo per costruire
              esperienze web moderne.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ⚠️ Le tecnologie qui sotto sono PLACEHOLDER.
          Modifica l'array `skillCategories` in lib/data.ts con le tue reali competenze. */}
      {skillCategories.map((cat) => (
        <section key={cat.category} className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                  <Icon name={cat.icon} size={18} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {cat.category}
                </h2>
              </div>
            </Reveal>

            {cat.skills.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="rounded-xl border border-dashed border-border bg-card/20 p-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    Nessuna tecnologia in questa categoria. Aggiungi le tue
                    competenze in <code className="text-primary">lib/data.ts</code>.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <CTASection />
    </PageTransition>
  );
}
