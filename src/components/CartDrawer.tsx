import { useEffect, useRef } from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../cart/useCart'
import { useLang } from '../i18n/useLang'

export default function CartDrawer() {
  const { lang, t } = useLang()
  const { items, count, total, isOpen, open, close, setQty, remove, clear } = useCart()
  const closeRef = useRef<HTMLButtonElement>(null)
  const nf = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {
    maximumFractionDigits: 0,
  })

  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  return (
    <>
      {/* شريط الموبايل الثابت */}
      {count > 0 && !isOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
          <button
            type="button"
            onClick={open}
            className="flex min-h-14 w-full items-center justify-between rounded-full bg-ember px-6 font-bold text-white shadow-lg"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="size-5" aria-hidden="true" />
              {t.cartUi.viewOrder} ({count})
            </span>
            <span>
              {nf.format(total)} {t.currency}
            </span>
          </button>
        </div>
      )}

      {/* الخلفية */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`fixed inset-0 z-50 bg-charcoal/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* السلة */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className={`fixed inset-y-0 end-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-2xl transition-[transform,visibility] duration-300 ${
          isOpen ? 'visible translate-x-0' : 'invisible ltr:translate-x-full rtl:-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 px-5 py-4">
          <h2 id="cart-title" className="font-display text-2xl font-black">
            {t.cartUi.title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label={t.cartUi.close}
            className="grid size-11 place-items-center rounded-full transition-colors hover:bg-sand"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="grid flex-1 place-items-center px-6 text-center">
            <div>
              <ShoppingBag className="mx-auto size-12 text-charcoal/30" aria-hidden="true" />
              <p className="mt-4 text-xl font-bold">{t.cartUi.empty}</p>
              <p className="mt-1 text-charcoal/60">{t.cartUi.emptyHint}</p>
            </div>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 rounded-2xl bg-sand p-3">
                  <img
                    src={item.image}
                    alt=""
                    width={72}
                    height={72}
                    className="size-[72px] shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col text-start">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-extrabold leading-snug">{item.name[lang]}</h3>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        aria-label={`${t.cartUi.remove}: ${item.name[lang]}`}
                        className="grid size-9 shrink-0 place-items-center rounded-full text-charcoal/60 transition-colors hover:bg-cream hover:text-brick"
                      >
                        <Trash2 className="size-5" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                      <div className="flex items-center rounded-full bg-cream">
                        <button
                          type="button"
                          onClick={() => setQty(item.id, item.qty - 1)}
                          aria-label={`${t.cartUi.decrease}: ${item.name[lang]}`}
                          className="grid size-11 place-items-center rounded-full hover:bg-charcoal/5"
                        >
                          <Minus className="size-4" aria-hidden="true" />
                        </button>
                        <span aria-live="polite" className="min-w-6 text-center font-bold">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQty(item.id, item.qty + 1)}
                          aria-label={`${t.cartUi.increase}: ${item.name[lang]}`}
                          className="grid size-11 place-items-center rounded-full hover:bg-charcoal/5"
                        >
                          <Plus className="size-4" aria-hidden="true" />
                        </button>
                      </div>
                      <p className="font-black text-ember">
                        {nf.format(item.price * item.qty)} {t.currency}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-charcoal/10 px-5 py-4">
              <div className="flex items-center justify-between text-xl font-black">
                <span>{t.cartUi.total}</span>
                <span className="text-ember">
                  {nf.format(total)} {t.currency}
                </span>
              </div>
              <p className="mt-2 text-sm text-charcoal/60">{t.cartUi.codNote}</p>
              <button
                type="button"
                onClick={clear}
                className="mt-3 min-h-11 text-sm font-semibold text-charcoal/60 underline-offset-4 hover:text-brick hover:underline"
              >
                {t.cartUi.clear}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}