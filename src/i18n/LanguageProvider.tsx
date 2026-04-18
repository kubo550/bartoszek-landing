import { useEffect, useMemo, useState, type ReactNode } from 'react'
import pl from '../locales/pl.json'
import en from '../locales/en.json'
import { LanguageContext, type Lang, type Dict, type LanguageContextValue } from './context'

const dicts: Record<Lang, Dict> = { pl, en }

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pl'
  const stored = window.localStorage.getItem('lang')
  return stored === 'en' || stored === 'pl' ? stored : 'pl'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang)

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dicts[lang] }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
