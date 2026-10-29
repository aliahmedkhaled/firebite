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
  placeOrder: string
  back: string
  nameErr: string
  phoneErr: string
  addressErr: string
  doneTitle: string
  doneBody: string
  orderNo: string
  items: string
  newOrder: string
  protoNote: string
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
    placeOrder: 'Place order',
    back: 'Back to cart',
    nameErr: 'Please enter your name (at least 2 letters).',
    phoneErr: 'Enter a valid Egyptian mobile number (11 digits, starts with 010, 011, 012 or 015).',
    addressErr: 'Please enter a more complete address.',
    doneTitle: 'Order received',
    doneBody: 'This is a demo, so nothing was actually sent and no food is on the way.',
    orderNo: 'Order number',
    items: 'items',
    newOrder: 'Back to menu',
    protoNote: 'Prototype: no data is sent or stored.',
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
    placeOrder: 'تأكيد الطلب',
    back: 'رجوع للسلة',
    nameErr: 'اكتب اسمك (حرفين على الأقل).',
    phoneErr: 'اكتب رقم موبايل مصري صحيح (11 رقم بيبدأ بـ 010 أو 011 أو 012 أو 015).',
    addressErr: 'اكتب عنوان أكمل من كده.',
    doneTitle: 'وصلنا طلبك',
    doneBody: 'ده مشروع تجريبي، فمفيش حاجة اتبعتت فعلًا ومفيش أكل جاي في الطريق.',
    orderNo: 'رقم الطلب',
    items: 'صنف',
    newOrder: 'رجوع للمنيو',
    protoNote: 'نموذج تجريبي: مفيش بيانات بتتبعت أو بتتخزن.',
  },
}