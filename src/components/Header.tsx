import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#why', label: t.nav.why },
    { href: '#services', label: t.nav.services },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#subsidies', label: t.nav.subsidies },
    { href: '#contact', label: t.nav.contact },
  ]

  const phoneHref = `tel:+48${t.footer.phone.replace(/\s/g, '')}`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm shadow-slate-900/[0.02] dark:bg-slate-950/70 dark:border-slate-800/70 dark:shadow-none">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-semibold text-slate-900 shrink-0 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white text-sm shadow-md shadow-brand-600/20">
            KI
          </span>
          <span className="hidden sm:inline">Komfort Instal</span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 text-sm text-slate-600 dark:text-slate-400">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-slate-900 transition-colors dark:hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href={phoneHref}
            className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 hover:border-slate-300 transition-colors dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-600"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
            </svg>
            {t.footer.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-brand-600/20 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30 transition-all"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 dark:text-slate-200"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white dark:bg-slate-950 dark:border-slate-800">
          <nav className="px-4 py-4 flex flex-col gap-3 text-slate-700 dark:text-slate-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href={phoneHref}
              className="py-1 text-brand-600 font-medium dark:text-brand-400"
            >
              {t.nav.callCta}
            </a>
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <LanguageToggle />
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white"
              >
                {t.nav.cta}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
