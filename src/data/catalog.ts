import type { CartProduct } from '../cart/CartContext'
import { menuItems } from './menu'
import { offers } from './offers'

// المصدر الوحيد للمنتجات اللي ينفع تتحط في السلة (الأصناف "النافدة" مستبعدة)
const catalog = new Map<string, CartProduct>()

offers.forEach((o, i) => {
  catalog.set(o.id, {
    id: o.id,
    name: o.title,
    price: o.price,
    image: `/images/offer-${i + 1}-480.webp`,
  })
})

menuItems.forEach((m) => {
  if (m.soldOut) return
  catalog.set(m.id, {
    id: m.id,
    name: m.name,
    price: m.price,
    image: `/images/${m.image}-320.webp`,
  })
})

export function findProduct(id: string): CartProduct | undefined {
  return catalog.get(id)
}