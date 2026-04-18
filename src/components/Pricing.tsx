import { useTranslation } from '../hooks/useTranslation'

export function Pricing() {
  const { t } = useTranslation()
  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 -left-32 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-500/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl" data-reveal>
          <span className="inline-flex items-center rounded-full bg-brand-50 ring-1 ring-brand-100 text-brand-700 text-xs font-medium px-3 py-1 dark:bg-brand-500/15 dark:ring-brand-500/30 dark:text-brand-300">
            {t.pricing.title}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{t.pricing.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {t.pricing.groups.map((group, idx) => {
            const featured = idx === 0
            return (
              <div
                key={group.title}
                data-reveal
                style={{ transitionDelay: `${idx * 70}ms` }}
                className={`relative rounded-2xl p-6 md:p-7 transition hover:-translate-y-0.5 ${
                  featured
                    ? 'bg-gradient-to-br from-brand-50 via-white to-sky-50 ring-1 ring-brand-200/80 shadow-lg shadow-brand-600/5 dark:from-brand-500/10 dark:via-slate-900 dark:to-sky-500/10 dark:ring-brand-500/30 dark:shadow-none'
                    : 'bg-white ring-1 ring-slate-200/70 shadow-sm hover:shadow-md dark:bg-slate-900 dark:ring-slate-800 dark:shadow-none'
                }`}
              >
                {featured && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md shadow-brand-600/30"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/90 animate-soft-pulse" />
                    Popularne
                  </span>
                )}
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                <ul className="mt-4 divide-y divide-slate-200/70 dark:divide-slate-700/70">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-baseline justify-between gap-4 py-3.5 text-sm rounded-lg px-2 -mx-2 hover:bg-slate-50/80 transition-colors dark:hover:bg-slate-800/60"
                    >
                      <span className="text-slate-700 dark:text-slate-300">{item.label}</span>
                      <span className="whitespace-nowrap font-mono text-base font-semibold text-slate-900 tabular-nums dark:text-white">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 items-start">
          <div data-reveal className="rounded-2xl bg-white ring-1 ring-slate-200/70 p-6 md:p-7 shadow-sm dark:bg-slate-900 dark:ring-slate-800 dark:shadow-none">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.pricing.whatAffectsTitle}</h3>
            <ul className="mt-4 space-y-2.5">
              {t.pricing.whatAffects.map((x) => (
                <li key={x} className="flex items-start gap-2.5 text-slate-700 text-sm dark:text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5 9-11" />
                    </svg>
                  </span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-reveal
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 md:p-7 text-white shadow-xl shadow-brand-600/20 dark:shadow-black/20"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-sky-300/25 blur-3xl"
            />
            <h3 className="relative text-lg font-semibold text-white">{t.pricing.noteTitle}</h3>
            <p className="relative mt-2 text-sm text-brand-50 leading-relaxed">{t.pricing.noteBody}</p>
            <a
              href="#contact"
              className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 transition-colors"
            >
              {t.pricing.cta}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
