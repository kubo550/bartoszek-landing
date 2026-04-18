import { useTranslation } from '../hooks/useTranslation'
import type { Lang } from '../i18n/context'

const LANGS: Lang[] = ['pl', 'en']

export function LanguageToggle() {
  const { lang, setLang } = useTranslation()
  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex rounded-full border border-slate-200 p-1 text-sm dark:border-slate-700"
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-3 py-1 rounded-full transition-colors font-medium uppercase ${
            lang === l
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
              : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
