import type { Metadata } from 'next';
import { PageTransition } from '@/components/PageTransition';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard, ServiceDetail } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import { processSteps, services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Servizi',
  description:
    'I servizi che offro: siti web, landing page, portfolio e soluzioni web personalizzate.',
};

export default function ServiziPage() {
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
              Servizi
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Cosa posso <span className="text-gradient">realizzare</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tipologie di progetti che posso sviluppare, dalle landing page
              alle soluzioni web personalizzate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services overview cards */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Services detailed */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading label="Dettagli" title="Servizi in profondità" />
          <div className="flex flex-col gap-6">
            {services.map((service, i) => (
              <ServiceDetail key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading label="Processo" title="Come nasce un progetto" />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            <div className="flex flex-col gap-12">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.1}>
                  <div
                    className={`relative flex items-start gap-6 sm:gap-0 ${
                      i % 2 === 0
                        ? 'sm:flex-row-reverse sm:text-right'
                        : 'sm:flex-row'
                    }`}
                  >
                    <div className="absolute left-4 top-1 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background sm:left-1/2">
                      <div className="h-3 w-3 rounded-full bg-primary" />
                    </div>
                    <div className="ml-12 flex-1 sm:ml-0 sm:w-1/2 sm:px-8">
                      <div className="rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30">
                        <span className="text-2xl font-bold text-primary/80">
                          {step.step}
                        </span>
                        <h3 className="mt-1 text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
