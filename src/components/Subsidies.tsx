import { useTranslation } from '../hooks/useTranslation'

const PROGRAM_ACCENTS = [
  {
    stripe: 'from-emerald-500 to-green-400',
    avatar: 'bg-emerald-50 text-emerald-700 ring-emerald-100 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/30',
    tint: 'from-emerald-50/60 dark:from-emerald-500/10',
    bullet: 'bg-emerald-500',
    link: 'text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200',
    ring: 'hover:ring-emerald-200 dark:hover:ring-emerald-500/40',
  },
  {
    stripe: 'from-orange-500 to-amber-400',
    avatar: 'bg-orange-50 text-orange-700 ring-orange-100 dark:bg-orange-500/15 dark:text-orange-300 dark:ring-orange-500/30',
    tint: 'from-orange-50/60 dark:from-orange-500/10',
    bullet: 'bg-orange-500',
    link: 'text-orange-700 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-200',
    ring: 'hover:ring-orange-200 dark:hover:ring-orange-500/40',
  },
  {
    stripe: 'from-yellow-400 to-amber-300',
    avatar: 'bg-yellow-50 text-yellow-800 ring-yellow-100 dark:bg-yellow-500/15 dark:text-yellow-300 dark:ring-yellow-500/30',
    tint: 'from-yellow-50/60 dark:from-yellow-500/10',
    bullet: 'bg-yellow-500',
    link: 'text-yellow-800 hover:text-yellow-900 dark:text-yellow-300 dark:hover:text-yellow-200',
    ring: 'hover:ring-yellow-200 dark:hover:ring-yellow-500/40',
  },
  {
    stripe: 'from-sky-500 to-cyan-400',
    avatar: 'bg-sky-50 text-sky-700 ring-sky-100 dark:bg-sky-500/15 dark:text-sky-300 dark:ring-sky-500/30',
    tint: 'from-sky-50/60 dark:from-sky-500/10',
    bullet: 'bg-sky-500',
    link: 'text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200',
    ring: 'hover:ring-sky-200 dark:hover:ring-sky-500/40',
  },
]

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean)
  const chars = parts.slice(0, 2).map((p) => p[0]?.toUpperCase() ?? '')
  return chars.join('') || name.slice(0, 2).toUpperCase()
}

export function Subsidies() {
  const { t } = useTranslation()
  return (
    <section id="subsidies" className="relative overflow-hidden py-20 md:py-28 bg-slate-50 dark:bg-slate-900">
      <div aria-hidden="true" className="pointer-events-none absolute top-10 right-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl dark:bg-emerald-500/10" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-10 left-0 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl dark:bg-sky-500/10" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl" data-reveal>
          <span className="inline-flex items-center rounded-full bg-white ring-1 ring-slate-200 text-slate-700 text-xs font-medium px-3 py-1 shadow-sm dark:bg-slate-800 dark:ring-slate-700 dark:text-slate-200 dark:shadow-none">
            {t.subsidies.title}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{t.subsidies.title}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">{t.subsidies.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.subsidies.items.map((item, idx) => {
            const a = PROGRAM_ACCENTS[idx] ?? PROGRAM_ACCENTS[0]
            return (
              <article
                key={item.name}
                data-reveal
                style={{ transitionDelay: `${idx * 80}ms` }}
                className={`group relative overflow-hidden rounded-2xl bg-white p-7 ring-1 ring-slate-200/70 flex flex-col shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:bg-slate-800 dark:ring-slate-700 dark:shadow-none dark:hover:shadow-black/20 ${a.ring}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${a.stripe}`}
                />
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full blur-3xl bg-gradient-to-br ${a.tint} to-transparent opacity-80`}
                />

                <div className="relative flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl font-semibold text-sm ring-1 ${a.avatar}`}
                  >
                    {initials(item.name)}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight dark:text-white">{item.name}</h3>
                </div>

                <p className="relative mt-4 text-slate-600 leading-relaxed dark:text-slate-400">{item.description}</p>

                <ul className="relative mt-4 space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-slate-700 text-sm dark:text-slate-300">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.bullet}`} aria-hidden="true" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${a.link}`}
                >
                  {t.subsidies.readMore}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
