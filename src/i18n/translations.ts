export type Lang = 'ar' | 'en'

const en = {
  brand: 'FIREBITE',
  tagline: 'Hot. Bold. Worth the bite.',
  orderNow: 'Order now',
  switchTo: 'العربية',
  cart: 'Cart',
  nav: {
    offers: 'Offers',
    menu: 'Menu',
    story: 'Our story',
  },
}

export type Dict = typeof en

const ar: Dict = {
  brand: 'FIREBITE',
  tagline: 'سخن. جريء. يستاهل العضة.',
  orderNow: 'اطلب الآن',
  switchTo: 'English',
  cart: 'السلة',
  nav: {
    offers: 'العروض',
    menu: 'المنيو',
    story: 'حكايتنا',
  },
}

export const translations: Record<Lang, Dict> = { en, ar }