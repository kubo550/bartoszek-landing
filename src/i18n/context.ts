import { createContext } from 'react'
import pl from '../locales/pl.json'

export type Lang = 'pl' | 'en'
export type Dict = typeof pl

export type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'pl',
  setLang: () => {},
  t: pl,
})
