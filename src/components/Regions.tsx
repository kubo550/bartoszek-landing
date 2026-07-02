import { useTranslation } from '../hooks/useTranslation'
import { SectionHeader } from './ui/SectionHeader'
import { PinIcon } from './ui/icons'

export function Regions() {
  const { t } = useTranslation()
  return (
    <section id="regions" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-500/10"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow={t.regions.eyebrow}
          title={t.regions.title}
          subtitle={t.regions.subtitle}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.regions.items.map((item, idx) => (
            <div
              key={item.name}
              data-reveal
              style={{ transitionDelay: `${idx * 70}ms` }}
              className="group relative rounded-2xl bg-white p-6 ring-1 ring-slate-200/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200 dark:bg-slate-900 dark:ring-slate-800 dark:shadow-none dark:hover:ring-brand-500/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/30">
                <PinIcon size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
