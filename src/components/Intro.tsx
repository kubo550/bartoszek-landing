import { useTranslation } from '../hooks/useTranslation'

const BULLET_ICONS = [
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v6m0 10v6m11-11h-6M7 12H1m15.5-7.5l-4.2 4.2M9.7 14.3l-4.2 4.2m0-13l4.2 4.2m4.6 4.6l4.2 4.2" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.6z" />
    </svg>
  ),
  (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16a4 4 0 01-.88-7.9 6 6 0 0111.7 2.9A4.5 4.5 0 0116.5 20H8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12v4m4-6v6m4-2v2" />
    </svg>
  ),
]

export function Intro() {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-dot-grid opacity-60" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-white to-transparent dark:from-slate-950"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-white to-transparent dark:from-slate-950"
      />

      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center" data-reveal>
        <span className="inline-flex items-center rounded-full bg-brand-50 ring-1 ring-brand-100 text-brand-700 text-xs font-medium px-3 py-1 dark:bg-brand-500/15 dark:ring-brand-500/30 dark:text-brand-300">
          {t.intro.eyebrow}
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">{t.intro.title}</h2>
        <p className="mt-5 text-slate-600 leading-relaxed dark:text-slate-400">{t.intro.paragraph1}</p>
        <p className="mt-4 text-slate-600 leading-relaxed dark:text-slate-400">{t.intro.paragraph2}</p>

        <h3 className="mt-14 text-2xl md:text-3xl font-semibold tracking-tight">
          {t.intro.whyTitle}
        </h3>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {t.intro.bullets.map((bullet, i) => (
            <li
              key={bullet}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="group relative rounded-2xl bg-white p-5 ring-1 ring-slate-200/70 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition text-left dark:bg-slate-900 dark:ring-slate-800 dark:shadow-none dark:hover:shadow-black/20"
            >
              <span className="absolute top-0 left-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-brand-500 to-sky-400" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/30">
                  {BULLET_ICONS[i] ?? BULLET_ICONS[0]}
                </span>
                <span className="text-xs font-mono text-slate-400 tabular-nums dark:text-slate-500">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-4 text-slate-800 font-medium leading-snug dark:text-slate-200">{bullet}</p>
            </li>
          ))}
        </ul>
      </div>

      <div aria-hidden="true" className="mt-20 md:mt-24">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-12 text-slate-50 dark:text-slate-900"
        >
          <path
            fill="currentColor"
            d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z"
          />
        </svg>
      </div>
    </section>
  )
}
