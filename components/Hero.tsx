'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background grid + blobs */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] animate-blob" style={{ animationDelay: '5s' }} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponibile per nuovi progetti
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Daniele
            <br />
            <span className="text-gradient">Caldarola</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-medium text-primary sm:text-2xl"
          >
            {personalInfo.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/progetti"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-purple"
            >
              Scopri il mio lavoro
            </Link>
            <Link
              href="/contatti"
              className="rounded-lg border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
            >
              Contattami
            </Link>
          </motion.div>
        </div>

        {/* Right: abstract graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden aspect-square w-full lg:block"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Rotating rings */}
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-8 rounded-full border border-primary/15" />
              <div className="absolute inset-16 rounded-full border border-primary/10" />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              </div>

              {/* Code snippet card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass glass-border w-56 rounded-xl p-4 font-mono text-xs leading-relaxed">
                  <div className="mb-2 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="text-primary">const</span> dev = {'{'}
                  </p>
                  <p className="pl-3 text-muted-foreground">
                    name: <span className="text-green-400">&apos;Daniele&apos;</span>,
                  </p>
                  <p className="pl-3 text-muted-foreground">
                    role: <span className="text-green-400">&apos;Web Dev&apos;</span>,
                  </p>
                  <p className="pl-3 text-muted-foreground">
                    stack: [<span className="text-green-400">&apos;Next&apos;</span>],
                  </p>
                  <p className="text-muted-foreground">{'}'}</p>
                </div>
              </div>

              {/* Orbiting dots */}
              {!prefersReduced && (
                <>
                  <motion.div
                    className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center 144px' }}
                  />
                  <motion.div
                    className="absolute left-1/2 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-primary/60"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: 'center 128px' }}
                  />
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        <span className="uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown size={16} className="animate-scroll-hint text-primary" />
      </motion.div>
    </section>
  );
}
