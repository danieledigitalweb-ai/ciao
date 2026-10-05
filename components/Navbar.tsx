'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, personalInfo } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass glass-border py-3' : 'border border-transparent py-5'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Vai alla Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-sm font-bold text-primary transition-colors group-hover:bg-primary/20">
            DC
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground/90 hidden sm:inline">
            {personalInfo.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground',
                  isActive(link.href) ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/contatti"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-purple"
          >
            Contattami
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="glass glass-border mt-3 mx-4 overflow-hidden rounded-xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col p-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'w-full block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-secondary hover:text-foreground',
                      isActive(link.href)
                        ? 'text-foreground bg-secondary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-1 px-2 pb-2">
                <Link
                  href="/contatti"
                  className="block w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Contattami
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
