import type { Lang } from '../i18n/translations'

export interface MenuItem {
  id: string
  category: string
  name: Record<Lang, string>
  description: Record<Lang, string>
  price: number
  image: string
  bestseller?: boolean
  soldOut?: boolean
}

export const menuItems: MenuItem[] = [
  {
    id: 'inferno-burger',
    category: 'burgers',
    name: { en: 'Inferno Burger', ar: 'إنفرنو برجر' },
    description: {
      en: 'Smash patty, pepper jack, crispy onions and fire sauce.',
      ar: 'قرص برجر سماش مع جبنة بيبر جاك وبصل مقرمش وصوص النار.',
    },
    price: 135,
    image: 'dish-1',
    bestseller: true,
  },
  {
    id: 'classic-smash',
    category: 'burgers',
    name: { en: 'Classic Smash', ar: 'كلاسيك سماش' },
    description: {
      en: 'Smash patty, American cheese, pickles and ketchup on a sesame bun.',
      ar: 'برجر سماش بجبنة أمريكاني ومخلل وكاتشب على بن سمسم.',
    },
    price: 95,
    image: 'menu-1',
  },
  {
    id: 'double-cheese',
    category: 'burgers',
    name: { en: 'Double Cheese', ar: 'دبل تشيز' },
    description: {
      en: 'Two thick patties with thick melted cheddar.',
      ar: 'قرصين برجر سميكين مع جبنة شيدر دايبة.',
    },
    price: 150,
    image: 'menu-2',
  },
  {
    id: 'tenders',
    category: 'chicken',
    name: { en: 'Crispy Tenders', ar: 'تندرز مقرمشة' },
    description: {
      en: 'Five golden chicken tenders with a dipping sauce.',
      ar: 'خمس قطع تندرز دهبي مع صوص للتغميس.',
    },
    price: 105,
    image: 'menu-3',
  },
  {
    id: 'glazed-wings',
    category: 'chicken',
    name: { en: 'Glazed Wings', ar: 'أجنحة بالصوص' },
    description: {
      en: 'Spicy glazed wings with chili flakes and ranch dip.',
      ar: 'أجنحة بصوص حراق مع فلفل مجروش وراند.',
    },
    price: 115,
    image: 'menu-4',
    soldOut: true,
  },
  {
    id: 'crispy-chicken',
    category: 'sandwiches',
    name: { en: 'Crispy Chicken Sandwich', ar: 'ساندويتش الفراخ الكرسبي' },
    description: {
      en: 'Buttermilk fried chicken, pickles and garlic mayo.',
      ar: 'فراخ مقرمشة متتبلة بالبَتِرميلك مع مخلل ومايونيز بالتوم.',
    },
    price: 110,
    image: 'dish-2',
  },
  {
    id: 'spicy-crispy',
    category: 'sandwiches',
    name: { en: 'Spicy Crispy', ar: 'سبايسي كرسبي' },
    description: {
      en: 'Crispy chicken, hot red sauce, lettuce and pickles.',
      ar: 'فراخ مقرمشة بصوص أحمر حراق وخس ومخلل.',
    },
    price: 120,
    image: 'menu-8',
  },
  {
    id: 'ember-fries',
    category: 'sides',
    name: { en: 'Ember Fries', ar: 'بطاطس إمبر' },
    description: {
      en: 'Seasoned fries with cheese sauce and a spicy kick.',
      ar: 'بطاطس متبلة مع صوص الجبنة ولمسة حرّاقة.',
    },
    price: 60,
    image: 'dish-3',
  },
  {
    id: 'onion-rings',
    category: 'sides',
    name: { en: 'Onion Rings', ar: 'حلقات البصل' },
    description: {
      en: 'Golden crispy rings with a creamy dip.',
      ar: 'حلقات دهبية مقرمشة مع صوص كريمي.',
    },
    price: 55,
    image: 'menu-5',
  },
  {
    id: 'lemonade',
    category: 'drinks',
    name: { en: 'Mint Lemonade', ar: 'ليمونادة بالنعناع' },
    description: {
      en: 'Fresh lemon, mint and ice.',
      ar: 'ليمون فريش ونعناع وتلج.',
    },
    price: 40,
    image: 'menu-6',
  },
  {
    id: 'choc-shake',
    category: 'drinks',
    name: { en: 'Chocolate Shake', ar: 'ميلك شيك شوكولاتة' },
    description: {
      en: 'Thick chocolate shake topped with whipped cream.',
      ar: 'ميلك شيك شوكولاتة تقيل بكريمة على الوش.',
    },
    price: 70,
    image: 'menu-7',
  },
  {
    id: 'molten-brownie',
    category: 'desserts',
    name: { en: 'Molten Brownie', ar: 'براوني ساخن' },
    description: {
      en: 'Warm chocolate brownie with a gooey center.',
      ar: 'براوني شوكولاتة دافئ بقلب سايل.',
    },
    price: 75,
    image: 'dish-4',
  },
]