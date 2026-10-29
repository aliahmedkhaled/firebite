export type Lang = 'ar' | 'en'

const en = {
  brand: 'FIREBITE',
  orderNow: 'Order now',
  switchTo: 'العربية',
  cart: 'Cart',
  currency: 'EGP',
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
  offers: {
    title: 'Today’s offers',
    off: 'off',
    addToOrder: 'Add to order',
    imageLabel: 'Offer photo',
  },
}

export type Dict = typeof en

const ar: Dict = {
  brand: 'FIREBITE',
  orderNow: 'اطلب الآن',
  switchTo: 'English',
  cart: 'السلة',
  currency: 'جنيه',
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
  offers: {
    title: 'عروض النهارده',
    off: 'خصم',
    addToOrder: 'أضف للطلب',
    imageLabel: 'صورة العرض',
  },
}

export const translations: Record<Lang, Dict> = { en, ar }