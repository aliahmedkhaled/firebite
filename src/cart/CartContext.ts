import { createContext } from 'react'
import type { Lang } from '../i18n/translations'

export interface CartItem {
  id: string
  name: Record<Lang, string>
  price: number
  image: string
  qty: number
}

export type CartProduct = Omit<CartItem, 'qty'>

export interface CartContextValue {
  items: CartItem[]
  count: number
  total: number
  isOpen: boolean
  add: (product: CartProduct) => void
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  clear: () => void
  open: () => void
  close: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)