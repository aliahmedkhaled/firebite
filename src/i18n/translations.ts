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
    categories: {
    title: 'Explore the menu',
  },
    featured: {
    title: 'Customer favorites',
    bestseller: 'Best seller',
    addToOrder: 'Add to order',
    imageLabel: 'Dish photo',
  },
    story: {
    title: 'Why FIREBITE',
    body: 'We started with a simple idea: food that hits hard on flavor and shows up hot. Everything here is a demo concept, built to show how a restaurant can look and feel online.',
    imageLabel: 'Kitchen photo',
    points: [
      { title: 'Made to order', text: 'Cooked when you order, not before.' },
      { title: 'Bold sauces', text: 'House-made sauces with real heat.' },
      { title: 'Easy ordering', text: 'Pick, add, done. No account needed.' },
    ],
  },
  footer: {
    hoursTitle: 'Opening hours',
    hours: 'Every day, 12 PM – 2 AM',
    addressTitle: 'Address',
    address: '12 Example Street, Giza',
    contactTitle: 'Contact',
    phone: '0100 000 0000',
    demoNote: 'Demo project. Not a real restaurant.',
    rights: 'All rights reserved.',
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
    categories: {
    title: 'استكشف المنيو',
  },
    featured: {
    title: 'المفضّل عند عملائنا',
    bestseller: 'الأكثر طلبًا',
    addToOrder: 'أضف للطلب',
    imageLabel: 'صورة الطبق',
  },
    story: {
    title: 'ليه FIREBITE',
    body: 'بدأنا بفكرة بسيطة: أكل طعمه جريء وبيوصل سخن. كل اللي هنا مفهوم تجريبي (Demo)، متصمم عشان يوضح إزاي المطعم ممكن يبان ويتحس أونلاين.',
    imageLabel: 'صورة المطبخ',
    points: [
      { title: 'بيتعمل عند الطلب', text: 'بنطبخ لما تطلب، مش قبلها.' },
      { title: 'صوصات جريئة', text: 'صوصات متعملة عندنا بحرارة حقيقية.' },
      { title: 'طلب سهل', text: 'اختار، أضف، خلاص. من غير حساب.' },
    ],
  },
  footer: {
    hoursTitle: 'مواعيد العمل',
    hours: 'كل يوم، 12 ظهرًا – 2 صباحًا',
    addressTitle: 'العنوان',
    address: '12 شارع المثال، الجيزة',
    contactTitle: 'للتواصل',
    phone: '0100 000 0000',
    demoNote: 'مشروع تجريبي. مش مطعم حقيقي.',
    rights: 'جميع الحقوق محفوظة.',
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