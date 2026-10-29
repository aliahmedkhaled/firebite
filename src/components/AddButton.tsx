import { useEffect, useRef, useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { useCart } from '../cart/useCart'
import type { CartProduct } from '../cart/CartContext'
import { useLang } from '../i18n/useLang'

interface Props {
  product: CartProduct
  label: string
}

export default function AddButton({ product, label }: Props) {
  const { t } = useLang()
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function handleClick() {
    add(product)
    setAdded(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setAdded(false), 1200)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={label}
        className={`grid size-12 place-items-center rounded-full text-white transition-all duration-200 active:scale-90 ${
          added ? 'bg-charcoal' : 'bg-ember hover:bg-ember-dark'
        }`}
      >
        {added ? (
          <Check className="size-6" aria-hidden="true" />
        ) : (
          <Plus className="size-6" aria-hidden="true" />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {added ? t.cartUi.added : ''}
      </span>
    </>
  )
}