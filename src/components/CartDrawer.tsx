import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '../cart/useCart'
import { restaurant } from '../config/restaurant'
import { checkoutStrings } from '../i18n/checkoutStrings'
import { useLang } from '../i18n/useLang'
import { calcTotals } from '../lib/pricing'
import { buildWhatsAppUrl, type OrderDetails } from '../lib/whatsapp'
import CheckoutForm from './CheckoutForm'

type View = 'cart' | 'checkout' | 'done'

export default function CartDrawer() {
  const { lang, t } = useLang()
  const { items, count, total, isOpen, open, close, setQty, remove, clear } = useCart()
  const c = checkoutStrings[lang]
  const totals = calcTotals(total)

  const [view, setView] = useState<View>('cart')
  const [waUrl, setWaUrl] = useState('')
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const nf = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {
    maximumFractionDigits: 0,
  })
  const money = (n: number) => `${nf.format(n)} ${t.currency}`

  function handleClose() {
    close()
    window.setTimeout(() => setView('cart'), 300)
  }

  function handleSubmit(details: OrderDetails) {
    const url = buildWhatsAppUrl(items, details)
    setWaUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
    setView('done')
  }

  function handleNewOrder() {
    clear()
    handleClose()
  }

  useEffect(() => {
    if (!isOpen) return
    if (view === 'cart') closeRef.current?.focus()
    else titleRef.current?.focus()
  }, [isOpen, view])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const title = view === 'cart' ? t.cartUi.title : view === 'checkout' ? c.title : c.doneTitle

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
            <span>{money(total)}</span>
          </button>
        </div>
      )}

      {/* الخلفية */}
      <div
        aria-hidden="true"
        onClick={handleClose}
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
          <h2
            id="cart-title"
            ref={titleRef}
            tabIndex={-1}
            className="font-display text-2xl font-black outline-none"
          >
            {title}
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={handleClose}
            aria-label={t.cartUi.close}
            className="grid size-11 place-items-center rounded-full transition-colors hover:bg-sand"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        {view === 'done' ? (
          <div className="grid flex-1 place-items-center px-6 text-center">
            <div>
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-ember text-white">
                <MessageCircle className="size-8" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xl font-bold">{c.doneBody}</p>
              <p className="mt-2 text-charcoal/70">{c.doneHint}</p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ember px-8 font-bold text-white transition-colors hover:bg-ember-dark"
              >
                {c.openAgain}
              </a>
              <button
                type="button"
                onClick={handleNewOrder}
                className="mt-3 block min-h-11 w-full font-semibold text-charcoal/70 underline-offset-4 hover:underline"
              >
                {c.newOrder}
              </button>
            </div>
          </div>
        ) : view === 'checkout' ? (
          <CheckoutForm onBack={() => setView('cart')} onSubmit={handleSubmit} />
        ) : items.length === 0 ? (
          <div className="grid flex-1 place-items-center px-6 text-center">
            <div>
              <ShoppingBag className="mx-auto size-12 text-charcoal/30" aria-hidden="true" />
              <p className="mt-4 text-xl font-bold">{t.cartUi.empty}</p>
              <p className="mt-1 text-charcoal/70">{t.cartUi.emptyHint}</p>
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
                      <p className="font-black text-ember">{money(item.price * item.qty)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-charcoal/10 px-5 py-4">
              <dl className="space-y-1 text-start">
                <div className="flex items-center justify-between">
                  <dt>{c.subtotal}</dt>
                  <dd className="font-semibold">{money(totals.subtotal)}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt>{c.delivery}</dt>
                  <dd className="font-semibold">
                    {totals.delivery === 0 ? c.free : money(totals.delivery)}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-1 text-xl font-black">
                  <dt>{t.cartUi.total}</dt>
                  <dd className="text-ember">{money(totals.total)}</dd>
                </div>
              </dl>

              {totals.delivery > 0 && totals.meetsMin && (
                <p className="mt-2 text-sm text-charcoal/70">
                  {c.freeHint(money(totals.remainingForFree))}
                </p>
              )}
              {!totals.meetsMin && (
                <p role="status" className="mt-2 text-sm font-semibold text-brick">
                  {c.minOrder(money(restaurant.minOrder))}
                </p>
              )}

              <button
                type="button"
                onClick={() => setView('checkout')}
                disabled={!totals.meetsMin}
                className="mt-3 min-h-14 w-full rounded-full bg-ember text-lg font-bold text-white transition-colors hover:bg-ember-dark disabled:cursor-not-allowed disabled:bg-charcoal/15 disabled:text-charcoal/50 disabled:hover:bg-charcoal/15"
              >
                {c.checkout}
              </button>
              <button
                type="button"
                onClick={clear}
                className="mt-2 min-h-11 w-full text-sm font-semibold text-charcoal/70 underline-offset-4 hover:text-brick hover:underline"
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