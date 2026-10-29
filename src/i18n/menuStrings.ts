import type { Lang } from './translations'

interface MenuStrings {
  all: string
  soldOut: string
  items: string
}

export const menuStrings: Record<Lang, MenuStrings> = {
  en: { all: 'All', soldOut: 'Sold out', items: 'items' },
  ar: { all: 'الكل', soldOut: 'نفد', items: 'صنف' },
}