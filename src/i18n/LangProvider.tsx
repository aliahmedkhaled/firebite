import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LangContext, type LangContextValue } from './context'
import { translations, type Lang } from './translations'

const STORAGE_KEY = 'firebite-lang'

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ar' || saved === 'en') return saved
  } catch {
    /* storage unavailable: use default */
  }
  return 'ar'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)
const dir: 'rtl' | 'ltr' = lang === 'ar' ? 'rtl' : 'ltr'
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang, dir])

  const value = useMemo<LangContextValue>(
  () => ({
    lang,
    dir,
    t: translations[lang],
    toggleLang: () => setLang((l) => (l === 'ar' ? 'en' : 'ar')),
  }),
  [lang, dir],
)

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}