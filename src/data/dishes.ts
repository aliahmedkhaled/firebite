import type { Lang } from '../i18n/translations'

export interface Dish {
  id: string
  name: Record<Lang, string>
  description: Record<Lang, string>
  price: number
  bestseller?: boolean
}

export const dishes: Dish[] = [
  {
    id: 'inferno-burger',
    name: { en: 'Inferno Burger', ar: 'إنفرنو برجر' },
    description: {
      en: 'Smash patty, pepper jack, crispy onions and fire sauce.',
      ar: 'قرص برجر سماش مع جبنة بيبر جاك وبصل مقرمش وصوص النار.',
    },
    price: 135,
    bestseller: true,
  },
  {
    id: 'crispy-chicken',
    name: { en: 'Crispy Chicken Sandwich', ar: 'ساندويتش الفراخ الكرسبي' },
    description: {
      en: 'Buttermilk fried chicken, pickles and garlic mayo.',
      ar: 'فراخ مقرمشة متتبلة بالبَتِرميلك مع مخلل ومايونيز بالتوم.',
    },
    price: 110,
  },
  {
    id: 'ember-fries',
    name: { en: 'Ember Fries', ar: 'بطاطس إمبر' },
    description: {
      en: 'Seasoned fries with cheese sauce and a spicy kick.',
      ar: 'بطاطس متبلة مع صوص الجبنة ولمسة حرّاقة.',
    },
    price: 60,
  },
  {
    id: 'molten-brownie',
    name: { en: 'Molten Brownie', ar: 'براوني ساخن' },
    description: {
      en: 'Warm chocolate brownie with a gooey center.',
      ar: 'براوني شوكولاتة دافئ بقلب سايل.',
    },
    price: 75,
  },
]