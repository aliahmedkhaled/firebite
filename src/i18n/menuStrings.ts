import type { Lang } from './translations'

interface MenuStrings {
  soldOut: string
  items: string
  explore: string
  menuTitle: string
  showAll: string
  noResults: string
  searchPlaceholder: string
  searchLabel: string
}

export const menuStrings: Record<Lang, MenuStrings> = {
  en: {
    soldOut: 'Sold out',
    items: 'items',
    explore: 'Explore the menu',
    menuTitle: 'Menu',
    showAll: 'Show all',
    noResults: 'No dishes match your search.',
    searchPlaceholder: 'What are you craving?',
    searchLabel: 'Search the menu',
  },
  ar: {
    soldOut: 'نفد',
    items: 'صنف',
    explore: 'استكشف المنيو',
    menuTitle: 'المنيو',
    showAll: 'عرض الكل',
    noResults: 'مفيش أصناف مطابقة لبحثك.',
    searchPlaceholder: 'عايز تاكل إيه؟',
    searchLabel: 'ابحث في المنيو',
  },
}