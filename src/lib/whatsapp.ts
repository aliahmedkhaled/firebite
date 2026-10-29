import type { CartItem } from '../cart/CartContext'
import { restaurant } from '../config/restaurant'
import { calcTotals } from './pricing'

export interface OrderDetails {
  name: string
  phone: string
  address: string
  notes: string
}

export function isWhatsAppConfigured() {
  return /^\d{11,15}$/.test(restaurant.whatsapp)
}

// شيل أي رموز تحكم وسطور جديدة من كلام العميل
const clean = (s: string) => s.replace(/[\u0000-\u001F\u007F]+/g, ' ').trim()

export function buildWhatsAppUrl(items: CartItem[], details: OrderDetails) {
  const nf = new Intl.NumberFormat('ar-EG-u-nu-latn', { maximumFractionDigits: 0 })
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const totals = calcTotals(subtotal)

  const lines = [
    `*طلب جديد من ${restaurant.name}*`,
    '',
    `الاسم: ${clean(details.name)}`,
    `الموبايل: ${clean(details.phone)}`,
    `العنوان: ${clean(details.address)}`,
    '',
    ...items.map((i) => `${i.qty}× ${i.name.ar} — ${nf.format(i.price * i.qty)} جنيه`),
    '',
    `المجموع: ${nf.format(totals.subtotal)} جنيه`,
    `التوصيل: ${totals.delivery === 0 ? 'مجاني' : `${nf.format(totals.delivery)} جنيه`}`,
    `*الإجمالي: ${nf.format(totals.total)} جنيه*`,
    'الدفع: عند الاستلام',
  ]

  const notes = clean(details.notes)
  if (notes) lines.push('', `ملاحظات: ${notes}`)

  return `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}