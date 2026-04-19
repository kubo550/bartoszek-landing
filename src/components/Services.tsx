import type { ReactNode } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { SectionHeader } from './ui/SectionHeader'
import { ArrowIcon } from './ui/icons'

const ICONS: ReactNode[] = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V9l9-6 9 6v12" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-7h6v7" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h12l4 4v12H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h6M8 12h8M8 16h5" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.3 2.3-2.1-2.1 2.3-2.3z" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3s6 5.5 6 10a6 6 0 01-12 0c0-4.5 6-10 6-10z" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6zM4 14h6v6H4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 7h4M7 10v4M17 10v4M10 17h4" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.3-4.3" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 109 9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2" />
    </svg>
  ),
]

export function Services() {
  const { t } = useTranslation()
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl dark:bg-brand-500/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl dark:bg-sky-500/10" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow={t.services.title}
          eyebrowVariant="slate"
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, idx) => (
            <a
              key={item.number}
              href="#contact"
              data-reveal
              style={{ transitionDelay: `${Math.min(idx, 8) * 50}ms` }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none dark:bg-slate-800 dark:ring-slate-700 dark:shadow-none dark:hover:ring-brand-500/60 dark:hover:shadow-black/20"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity"
                style={{
                  background:
                    'radial-gradient(600px circle at var(--x,50%) 0%, rgba(59,130,246,0.08), transparent 40%)',
                }}
              />
              <div className="relative flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/30">
                  {ICONS[idx] ?? ICONS[0]}
                </span>
                <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums dark:text-slate-500">
                  {item.number}
                </span>
              </div>
              <h3 className="relative mt-5 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="relative mt-2 text-sm text-slate-600 leading-relaxed dark:text-slate-400">{item.description}</p>
              <span
                aria-hidden="true"
                className="relative mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-600 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 dark:text-brand-400"
              >
                <ArrowIcon />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5 transition-all"
          >
            {t.services.ctaContact}
            <ArrowIcon />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:border-slate-600"
          >
            {t.services.ctaPricing}
          </a>
        </div>
      </div>
    </section>
  )
}
