import { Flame, ShoppingBag } from 'lucide-react'
import { useCart } from '../cart/useCart'
import { useLang } from '../i18n/useLang'

export default function Header() {
  const { lang, t, toggleLang } = useLang()
  const { count, open } = useCart()

  const links = [
    { href: '#offers', label: t.nav.offers },
    { href: '#menu', label: t.nav.menu },
    { href: '#story', label: t.nav.story },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-1.5 font-display text-2xl font-black">
          <Flame className="size-6 text-ember" aria-hidden="true" />
          <span>
            FIRE<span className="text-ember">BITE</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 font-semibold md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ember">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            lang={lang === 'ar' ? 'en' : 'ar'}
            className="rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-sand"
          >
            {t.switchTo}
          </button>

          <a
            href="#menu"
            className="hidden rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-ember-dark sm:inline-flex"
          >
            {t.orderNow}
          </a>

          <button
            type="button"
            onClick={open}
            aria-label={`${t.cart} (${count})`}
            className="relative grid size-11 place-items-center rounded-full border border-charcoal/15 transition-colors hover:bg-sand"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -end-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-ember px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <nav
        aria-label="Sections"
        className="flex gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none] md:hidden"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="shrink-0 rounded-full bg-sand px-4 py-2 text-sm font-semibold"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}