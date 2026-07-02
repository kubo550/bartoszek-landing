import { useTranslation } from '../hooks/useTranslation'
import { ArrowIcon, PhoneIcon } from './ui/icons'
import { phoneHref } from '../lib/phone'

export function CtaBanner() {
  const { t } = useTranslation()
  const tel = phoneHref(t.footer.phone)

  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 px-6 py-10 md:px-12 md:py-12 text-white shadow-xl shadow-brand-600/20 dark:shadow-black/20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-sky-300/25 blur-3xl"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 text-brand-50 text-xs font-medium px-3 py-1 backdrop-blur">
                <span className="relative inline-flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white animate-soft-pulse" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                {t.ctaBanner.eyebrow}
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {t.ctaBanner.title}
              </h2>
              <p className="mt-3 text-brand-50 leading-relaxed">{t.ctaBanner.text}</p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
              <a
                href={tel}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 shadow-lg shadow-black/20 transition-all hover:bg-brand-50 hover:-translate-y-0.5"
              >
                <PhoneIcon />
                {t.ctaBanner.button}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-50/90 hover:text-white transition-colors"
              >
                {t.ctaBanner.secondary}
                <ArrowIcon />
              </a>
              <p className="text-xs text-brand-100/80">{t.ctaBanner.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
