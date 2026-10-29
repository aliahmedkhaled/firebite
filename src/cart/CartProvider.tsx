import { useMemo, useReducer, useState, type ReactNode } from 'react'
import { CartContext, type CartContextValue, type CartItem, type CartProduct } from './CartContext'

type Action =
  | { type: 'add'; product: CartProduct }
  | { type: 'setQty'; id: string; qty: number }
  | { type: 'remove'; id: string }
  | { type: 'clear' }

const MAX_QTY = 20

function reducer(items: CartItem[], action: Action): CartItem[] {
  switch (action.type) {
    case 'add': {
      const exists = items.some((i) => i.id === action.product.id)
      if (exists) {
        return items.map((i) =>
          i.id === action.product.id ? { ...i, qty: Math.min(i.qty + 1, MAX_QTY) } : i,
        )
      }
      return [...items, { ...action.product, qty: 1 }]
    }
    case 'setQty': {
      if (action.qty <= 0) return items.filter((i) => i.id !== action.id)
      return items.map((i) =>
        i.id === action.id ? { ...i, qty: Math.min(action.qty, MAX_QTY) } : i,
      )
    }
    case 'remove':
      return items.filter((i) => i.id !== action.id)
    case 'clear':
      return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, [])
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
      isOpen,
      add: (product) => dispatch({ type: 'add', product }),
      setQty: (id, qty) => dispatch({ type: 'setQty', id, qty }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [items, isOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}