import type { Lang } from './translations'

interface CheckoutStrings {
  checkout: string
  title: string
  name: string
  phone: string
  phoneHint: string
  address: string
  notes: string
  notesHint: string
  payment: string
  cod: string
  sendWhatsApp: string
  back: string
  nameErr: string
  phoneErr: string
  addressErr: string
  notConfigured: string
  doneTitle: string
  doneBody: string
  doneHint: string
  openAgain: string
  newOrder: string
  protoNote: string
  subtotal: string
  delivery: string
  free: string
  minOrder: (amount: string) => string
  freeHint: (amount: string) => string
}

export const checkoutStrings: Record<Lang, CheckoutStrings> = {
  en: {
    checkout: 'Checkout',
    title: 'Delivery details',
    name: 'Full name',
    phone: 'Mobile number',
    phoneHint: 'Egyptian mobile, e.g. 01012345678',
    address: 'Delivery address',
    notes: 'Notes (optional)',
    notesHint: 'No onions, ring the bell twice…',
    payment: 'Payment',
    cod: 'Cash on delivery',
    sendWhatsApp: 'Send order on WhatsApp',
    back: 'Back to cart',
    nameErr: 'Please enter your name (at least 2 letters).',
    phoneErr: 'Enter a valid Egyptian mobile number (11 digits, starts with 010, 011, 012 or 015).',
    addressErr: 'Please enter a more complete address.',
    notConfigured: 'The WhatsApp number is not set yet. Add it in src/config/restaurant.ts.',
    doneTitle: 'One last step',
    doneBody: 'Your order is ready in WhatsApp',
    doneHint: 'Press send in WhatsApp to place it. Nothing is sent until you do.',
    openAgain: 'Open WhatsApp again',
    newOrder: 'Start a new order',
    protoNote: 'Demo: the order opens in WhatsApp as a message. There is no server.',
    subtotal: 'Subtotal',
    delivery: 'Delivery',
    free: 'Free',
    minOrder: (a) => `Minimum order is ${a}`,
    freeHint: (a) => `Add ${a} more for free delivery`,
  },
  ar: {
    checkout: 'إتمام الطلب',
    title: 'بيانات التوصيل',
    name: 'الاسم بالكامل',
    phone: 'رقم الموبايل',
    phoneHint: 'موبايل مصري، مثال: 01012345678',
    address: 'عنوان التوصيل',
    notes: 'ملاحظات (اختياري)',
    notesHint: 'من غير بصل، رن الجرس مرتين…',
    payment: 'الدفع',
    cod: 'الدفع عند الاستلام',
    sendWhatsApp: 'ابعت الطلب على واتساب',
    back: 'رجوع للسلة',
    nameErr: 'اكتب اسمك (حرفين على الأقل).',
    phoneErr: 'اكتب رقم موبايل مصري صحيح (11 رقم بيبدأ بـ 010 أو 011 أو 012 أو 015).',
    addressErr: 'اكتب عنوان أكمل من كده.',
    notConfigured: 'رقم الواتساب لسه مش متحدد. ضيفه في src/config/restaurant.ts.',
    doneTitle: 'فاضل خطوة أخيرة',
    doneBody: 'طلبك جاهز في واتساب',
    doneHint: 'اضغط إرسال في واتساب عشان الطلب يتبعت. مفيش حاجة بتتبعت قبل كده.',
    openAgain: 'افتح واتساب تاني',
    newOrder: 'ابدأ طلب جديد',
    protoNote: 'نسخة تجريبية: الطلب بيتفتح في واتساب كرسالة، ومفيش سيرفر.',
    subtotal: 'المجموع',
    delivery: 'التوصيل',
    free: 'مجاني',
    minOrder: (a) => `الحد الأدنى للطلب ${a}`,
    freeHint: (a) => `ضيف ${a} كمان والتوصيل يبقى مجاني`,
  },
}