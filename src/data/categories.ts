import type { Lang } from '../i18n/translations'

export interface Category {
  id: string
  name: Record<Lang, string>
  image: string
}

export const categories: Category[] = [
  { id: 'burgers', name: { en: 'Burgers', ar: 'برجر' }, image: 'dish-1' },
  { id: 'chicken', name: { en: 'Fried chicken', ar: 'فراخ مقرمشة' }, image: 'menu-3' },
  { id: 'sandwiches', name: { en: 'Sandwiches', ar: 'ساندويتشات' }, image: 'dish-2' },
  { id: 'sides', name: { en: 'Sides', ar: 'جانبيات' }, image: 'dish-3' },
  { id: 'drinks', name: { en: 'Drinks', ar: 'مشروبات' }, image: 'menu-9' },
  { id: 'desserts', name: { en: 'Desserts', ar: 'حلويات' }, image: 'dish-4' },
]