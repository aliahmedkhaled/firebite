export type Lang = 'ar' | 'en'

const en = {
  brand: 'FIREBITE',
  tagline: 'Hot. Bold. Worth the bite.',
  orderNow: 'Order now',
  menu: 'Menu',
  switchTo: 'العربية',
}

export type Dict = typeof en

const ar: Dict = {
  brand: 'FIREBITE',
  tagline: 'سخن. جريء. يستاهل العضة.',
  orderNow: 'اطلب الآن',
  menu: 'المنيو',
  switchTo: 'English',
}

export const translations: Record<Lang, Dict> = { en, ar }