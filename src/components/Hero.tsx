import { useTranslation } from '../hooks/useTranslation'
import { ArrowIcon } from './ui/icons'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 radial-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-20 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl animate-float-slower"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-teal-200/25 blur-3xl animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.35] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.15]"
      />

      <div className="mx-auto max-w-6xl px-4 md:px-6 pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur ring-1 ring-brand-100 text-brand-700 text-xs font-medium px-3 py-1 shadow-sm dark:bg-slate-900/70 dark:ring-brand-500/30 dark:text-brand-300">
              <span aria-hidden="true" className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500 animate-soft-pulse" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-slate-900 dark:text-white">
              {t.hero.title}
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl leading-relaxed dark:text-slate-400">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg shadow-brand-600/20 ring-1 ring-brand-700/20 transition-all hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5"
                style={{
                  backgroundImage:
                    'linear-gradient(110deg, #2563eb 0%, #3b82f6 45%, #1d4ed8 100%)',
                }}
              >
                <span className="relative z-10">{t.hero.cta}</span>
                <ArrowIcon className="relative z-10 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#why"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 backdrop-blur px-6 py-3 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-white transition-colors dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:border-slate-600"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative" data-reveal>
            <div
              aria-hidden="true"
              className="absolute -inset-6 bg-gradient-to-br from-brand-200/60 via-sky-100/60 to-transparent rounded-[2rem] blur-2xl"
            />
            <div className="relative">
              <img
                src={HERO_IMAGE}
                alt={t.hero.imageAlt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative rounded-2xl shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200 aspect-[4/3] object-cover w-full"
              />

              <div
                aria-hidden="true"
                className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur px-4 py-3 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/80 dark:bg-slate-900/90 dark:ring-slate-700/80 dark:shadow-black/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-6" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">90%</div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wide">odzysk ciepła</div>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -right-3 bottom-8 flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur px-4 py-3 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/80 dark:bg-slate-900/90 dark:ring-slate-700/80 dark:shadow-black/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">24h</div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wide">wycena</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
