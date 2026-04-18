import { useTranslation } from '../hooks/useTranslation'

const ACCENTS = [
  {
    stripe: 'from-brand-500 to-sky-400',
    chip: 'bg-brand-50 text-brand-700 ring-brand-100 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/30',
    numberBg: 'bg-brand-600 text-white',
    ring: 'hover:ring-brand-200 dark:hover:ring-brand-500/50',
    iconBg: 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
  },
  {
    stripe: 'from-teal-500 to-emerald-400',
    chip: 'bg-teal-50 text-teal-700 ring-teal-100 dark:bg-teal-500/15 dark:text-teal-300 dark:ring-teal-500/30',
    numberBg: 'bg-teal-600 text-white',
    ring: 'hover:ring-teal-200 dark:hover:ring-teal-500/50',
    iconBg: 'bg-teal-50 text-teal-600 dark:bg-teal-500/15 dark:text-teal-300',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a7 7 0 017 7c0 4-3 7-7 11-4-4-7-7-7-11a7 7 0 017-7z" />
        <circle cx="12" cy="10" r="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    stripe: 'from-amber-500 to-orange-400',
    chip: 'bg-amber-50 text-amber-700 ring-amber-100 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/30',
    numberBg: 'bg-amber-500 text-slate-900',
    ring: 'hover:ring-amber-200 dark:hover:ring-amber-500/50',
    iconBg: 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-3z" />
      </svg>
    ),
  },
]

export function Features() {
  const { t } = useTranslation()
  return (
    <section id="why" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl" data-reveal>
          <span className="inline-flex items-center rounded-full bg-brand-50 ring-1 ring-brand-100 text-brand-700 text-xs font-medium px-3 py-1 dark:bg-brand-500/15 dark:ring-brand-500/30 dark:text-brand-300">
            {t.intro.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{t.features.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">{t.features.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.features.items.map((item, idx) => {
            const a = ACCENTS[idx] ?? ACCENTS[0]
            const checkBg = idx === 2
              ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300'
              : 'bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300'
            return (
              <article
                key={item.number}
                data-reveal
                style={{ transitionDelay: `${idx * 90}ms` }}
                className={`group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-0.5 bg-white ring-1 ring-slate-200/70 shadow-sm hover:shadow-md ${a.ring} dark:bg-slate-900 dark:ring-slate-800 dark:shadow-none`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.stripe}`}
                />

                <div className="flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${a.iconBg}`}>
                    {a.icon}
                  </span>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums ring-1 ${a.chip}`}>
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                {item.bullets.length > 0 && idx === 1 && (
                  <div className="mt-5">
                    {item.bulletsTitle && (
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide dark:text-slate-400">
                        {item.bulletsTitle}
                      </p>
                    )}
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 ring-1 ring-teal-100 text-teal-800 px-3 py-1.5 text-xs font-medium dark:bg-teal-500/10 dark:ring-teal-500/30 dark:text-teal-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.bullets.length > 0 && idx !== 1 && (
                  <div className="mt-5">
                    {item.bulletsTitle && (
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {item.bulletsTitle}
                      </p>
                    )}
                    <ul className="mt-3 space-y-2.5">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkBg}`}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5 9-11" />
                            </svg>
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
