'use client';

import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { personalInfo } from '@/lib/data';
import { Mail, Send, CheckCircle2, Phone } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Apre Gmail nel browser con destinatario, oggetto e corpo pre-compilati.
    const subject = encodeURIComponent(
      `Messaggio da ${form.name || 'sito web'}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n---\nNome: ${form.name}\nEmail: ${form.email}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`,
      '_blank'
    );

    setStatus('sent');
    setTimeout(() => {
      setStatus('idle');
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <Reveal delay={0.1}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Il tuo nome"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="tua.email@example.com"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
            placeholder="Raccontami la tua idea..."
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sent'}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-purple disabled:opacity-70"
        >
          {status === 'sent' ? (
            <>
              <CheckCircle2 size={16} />
              Sto aprendo Gmail...
            </>
          ) : (
            <>
              <Send size={16} />
              Invia messaggio
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground">
          Cliccando &quot;Invia messaggio&quot; si aprirà Gmail con il messaggio
          già pronto da inviare.
        </p>
      </form>
    </Reveal>
  );
}

export function ContactInfo() {
  const hasPhone = personalInfo.phone && personalInfo.phone.trim().length > 0;

  return (
    <Reveal>
      <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card/50 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
            <Mail size={20} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {hasPhone && (
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Telefono</p>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
        )}

        <div className="h-px w-full bg-border" />

        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">Nome</p>
          <p className="text-base font-medium text-foreground">{personalInfo.name}</p>
          <p className="text-sm text-muted-foreground">{personalInfo.role}</p>
        </div>

        <div className="h-px w-full bg-border" />

        <p className="text-sm leading-relaxed text-muted-foreground">
          Preferisci scrivere direttamente? Usa il pulsante qui sotto per aprire
          Gmail con un messaggio già pronto.
        </p>

        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-purple"
        >
          <Mail size={16} />
          Scrivimi una email
        </a>
      </div>
    </Reveal>
  );
}
