import { useTranslation } from '../hooks/useTranslation'
import { SectionHeader } from './ui/SectionHeader'

export function Faq() {
  const { t } = useTranslation()
  return (
    <section id="faq" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-0 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-500/10"
      />

      <div className="relative mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeader eyebrow={t.faq.title} title={t.faq.title} subtitle={t.faq.subtitle} align="center" />

        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, idx) => (
            <details
              key={item.question}
              data-reveal
              style={{ transitionDelay: `${idx * 50}ms` }}
              className="group rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm open:ring-brand-200/80 dark:bg-slate-900 dark:ring-slate-800 dark:open:ring-brand-500/30 dark:shadow-none"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 md:p-6 text-left font-semibold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-45 dark:bg-brand-500/15 dark:text-brand-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 md:px-6 pb-5 md:pb-6 -mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
