import type { Lang } from '../i18n/translations'

export interface Category {
  id: string
  name: Record<Lang, string>
}

export const categories: Category[] = [
  { id: 'burgers', name: { en: 'Burgers', ar: 'برجر' } },
  { id: 'chicken', name: { en: 'Fried chicken', ar: 'فراخ مقرمشة' } },
  { id: 'sandwiches', name: { en: 'Sandwiches', ar: 'ساندويتشات' } },
  { id: 'sides', name: { en: 'Sides', ar: 'جانبيات' } },
  { id: 'drinks', name: { en: 'Drinks', ar: 'مشروبات' } },
  { id: 'desserts', name: { en: 'Desserts', ar: 'حلويات' } },
]