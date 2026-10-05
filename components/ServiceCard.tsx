'use client';

import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';
import type { Service } from '@/lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function ServiceCard({ service, delay = 0 }: { service: Service; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1">
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex flex-col gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
            <Icon name={service.icon} size={22} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <ul className="flex flex-col gap-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary/70" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <div className="grid gap-6 rounded-2xl border border-border bg-card/50 p-6 lg:grid-cols-[1fr_1fr] lg:p-8">
        {/* Left: description + benefits */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Icon name={service.icon} size={22} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <div className="h-px w-full bg-border" />
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              Vantaggi
            </p>
            <ul className="flex flex-col gap-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary/70" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: process + CTA */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              Processo
            </p>
            <ol className="flex flex-col gap-3">
              {service.process.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-xs font-medium text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <Link
            href="/contatti"
            className="mt-auto flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
          >
            Richiedi questo servizio
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
