import type { Lang } from '../i18n/translations'

export interface Offer {
  id: string
  title: Record<Lang, string>
  description: Record<Lang, string>
  price: number
  oldPrice: number
}

export const offers: Offer[] = [
  {
    id: 'ember-combo',
    title: { en: 'Ember Combo', ar: 'كومبو إمبر' },
    description: {
      en: 'Crispy chicken sandwich, fries and a cold drink.',
      ar: 'ساندويتش فراخ كرسبي مع بطاطس ومشروب بارد.',
    },
    price: 180,
    oldPrice: 250,
  },
  {
    id: 'double-fire',
    title: { en: 'Double Fire', ar: 'دبل فاير' },
    description: {
      en: 'Two smash burgers, cheese, fries and two drinks.',
      ar: 'اتنين برجر سماش مع جبنة وبطاطس ومشروبين.',
    },
    price: 245,
    oldPrice: 345,
  },
  {
    id: 'family-bucket',
    title: { en: 'Family Bucket', ar: 'بوكس العيلة' },
    description: {
      en: '8 pieces of fried chicken, large fries and dips.',
      ar: '8 قطع فراخ مقرمشة مع بطاطس كبيرة وصوصات.',
    },
    price: 399,
    oldPrice: 520,
  },
  {
    id: 'crispy-duo',
    title: { en: 'Crispy Duo', ar: 'ديو كرسبي' },
    description: {
      en: 'Two crispy chicken sandwiches and two fries.',
      ar: 'ساندويتشين فراخ كرسبي مع بطاطسين.',
    },
    price: 199,
    oldPrice: 270,
  },
  {
    id: 'tender-box',
    title: { en: 'Tender Box', ar: 'بوكس التندرز' },
    description: {
      en: 'Ten golden tenders, fries and two dips.',
      ar: 'عشر قطع تندرز دهبي مع بطاطس وصوصين.',
    },
    price: 229,
    oldPrice: 300,
  },
  {
    id: 'burger-shake',
    title: { en: 'Burger & Shake', ar: 'برجر وميلك شيك' },
    description: {
      en: 'Smash burger, fries and a chocolate milkshake.',
      ar: 'برجر سماش مع بطاطس وميلك شيك شوكولاتة.',
    },
    price: 189,
    oldPrice: 265,
  },
]