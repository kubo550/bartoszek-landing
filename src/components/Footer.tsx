import { useTranslation } from '../hooks/useTranslation'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()
  const phoneHref = `tel:+48${t.footer.phone.replace(/\s/g, '')}`

  return (
    <footer className="relative bg-slate-50 border-t border-slate-100 dark:bg-slate-900 dark:border-slate-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent dark:from-slate-950/60"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white text-sm shadow-md shadow-brand-600/20">
              KI
            </span>
            <span>Komfort Instal</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-xs leading-relaxed dark:text-slate-400">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t.footer.contact}</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
            <li>
              <a href={phoneHref} className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-brand-600 dark:bg-slate-800 dark:ring-slate-700 dark:text-brand-300">
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                {t.footer.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${t.footer.email}`} className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-brand-600 dark:bg-slate-800 dark:ring-slate-700 dark:text-brand-300">
                  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
                  </svg>
                </span>
                {t.footer.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-slate-200 text-brand-600 dark:bg-slate-800 dark:ring-slate-700 dark:text-brand-300">
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <span className="pt-1">{t.footer.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t.footer.links}</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="#why" className="hover:text-slate-900 transition-colors">{t.nav.why}</a></li>
            <li><a href="#services" className="hover:text-slate-900 transition-colors">{t.nav.services}</a></li>
            <li><a href="#pricing" className="hover:text-slate-900 transition-colors">{t.nav.pricing}</a></li>
            <li><a href="#subsidies" className="hover:text-slate-900 transition-colors">{t.nav.subsidies}</a></li>
            <li><a href="#contact" className="hover:text-slate-900 transition-colors">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{t.footer.legal}</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {t.footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-slate-900 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-slate-200/70 dark:border-slate-800/70">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-slate-500">
          <p>© {year} Komfort Instal. {t.footer.rights}</p>
          <p>
            Created by{' '}
            <a
              href="https://github.com/kubo550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 00.5 12a11.5 11.5 0 007.86 10.93c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.73.8 1.18 1.83 1.18 3.08 0 4.4-2.69 5.37-5.25 5.66.41.35.78 1.05.78 2.12v3.14c0 .3.21.66.79.55A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z" />
              </svg>
              Jakub Kurdziel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
