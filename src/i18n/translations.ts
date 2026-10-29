export type Lang = 'ar' | 'en'

const en = {
  brand: 'FIREBITE',
  orderNow: 'Order now',
  switchTo: 'العربية',
  cart: 'Cart',
  nav: {
    offers: 'Offers',
    menu: 'Menu',
    story: 'Our story',
  },
  hero: {
    eyebrow: 'Burgers · Fried chicken · Combos',
    title: 'Bite into the fire.',
    subtitle: 'Hot off the grill, bold on flavor. Pick your favorite and we handle the rest.',
    primaryCta: 'Order now',
    secondaryCta: 'See today’s offers',
    imageLabel: 'Hero dish photo',
  },
}

export type Dict = typeof en

const ar: Dict = {
  brand: 'FIREBITE',
  orderNow: 'اطلب الآن',
  switchTo: 'English',
  cart: 'السلة',
  nav: {
    offers: 'العروض',
    menu: 'المنيو',
    story: 'حكايتنا',
  },
  hero: {
    eyebrow: 'برجر · فرايد تشيكن · كومبو',
    title: 'أول عضة تولّع.',
    subtitle: 'طازة من على النار وطعمها جريء. اختار المفضل عندك وسيب الباقي علينا.',
    primaryCta: 'اطلب الآن',
    secondaryCta: 'شوف عروض النهارده',
    imageLabel: 'صورة الطبق الرئيسي',
  },
}

export const translations: Record<Lang, Dict> = { en, ar }