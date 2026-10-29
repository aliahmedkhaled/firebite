import { createContext } from 'react'
import type { Dict, Lang } from './translations'

export interface LangContextValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  t: Dict
  toggleLang: () => void
}

export const LangContext = createContext<LangContextValue | null>(null)