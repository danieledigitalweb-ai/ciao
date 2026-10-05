import Link from 'next/link';
import { navLinks, personalInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-sm font-bold text-primary">
                DC
              </span>
              <span className="text-sm font-medium text-foreground">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{personalInfo.role}</p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Email */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {personalInfo.email}
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
