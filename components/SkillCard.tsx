'use client';

import { Reveal } from '@/components/Reveal';
import { Icon } from '@/components/Icon';
import type { Skill } from '@/lib/data';

export function SkillCard({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card">
        <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex flex-col gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
            <Icon name={skill.icon} size={20} />
          </div>
          <h3 className="text-base font-semibold text-foreground">
            {skill.name}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {skill.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
