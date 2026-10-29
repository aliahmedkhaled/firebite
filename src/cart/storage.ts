import { findProduct } from '../data/catalog'
import type { CartItem } from './CartContext'

const KEY = 'firebite-cart-v1'
export const MAX_QTY = 20

export function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return []

    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    const items: CartItem[] = []
    const seen = new Set<string>()

    for (const entry of parsed) {
      if (typeof entry !== 'object' || entry === null) continue
      const { id, qty } = entry as { id?: unknown; qty?: unknown }

      if (typeof id !== 'string' || seen.has(id)) continue
      if (typeof qty !== 'number' || !Number.isFinite(qty)) continue

      const product = findProduct(id)
      if (!product) continue

      seen.add(id)
      items.push({ ...product, qty: Math.min(Math.max(Math.floor(qty), 1), MAX_QTY) })
    }
    return items
  } catch {
    return []
  }
}

export function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items.map((i) => ({ id: i.id, qty: i.qty }))))
  } catch {
    /* التخزين مش متاح (مثلًا Private mode): السلة هتشتغل عادي بس من غير حفظ */
  }
}