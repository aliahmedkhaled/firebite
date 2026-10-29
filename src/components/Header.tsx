import { Flame, ShoppingBag } from 'lucide-react'
import { useCart } from '../cart/useCart'
import { useLang } from '../i18n/useLang'
import SearchBar from './SearchBar'

interface Props {
  query: string
  onQuery: (value: string) => void
}

export default function Header({ query, onQuery }: Props) {
  const { lang, t, toggleLang } = useLang()
  const { count, open } = useCart()

  const links = [
    { href: '#offers', label: t.nav.offers },
    { href: '#menu', label: t.nav.menu },
    { href: '#story', label: t.nav.story },
  ]

  return (
    <header className="sticky top-0 z-30 bg-ember text-white md:border-b md:border-charcoal/10 md:bg-cream/90 md:text-charcoal md:backdrop-blur [&_*:focus-visible]:outline-white md:[&_*:focus-visible]:outline-ember">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex shrink-0 items-center gap-1.5 font-display text-2xl font-black">
          <Flame className="size-6 text-white md:text-ember" aria-hidden="true" />
          <span>
            FIRE<span className="text-charcoal md:text-ember">BITE</span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 font-semibold lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ember">
              {l.label}
            </a>
          ))}
        </nav>

        <SearchBar
          id="search-desktop"
          query={query}
          onQuery={onQuery}
          className="hidden max-w-md flex-1 md:block"
        />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            lang={lang === 'ar' ? 'en' : 'ar'}
            className="min-h-11 rounded-full bg-white px-4 text-sm font-semibold text-charcoal transition-colors hover:bg-sand md:bg-transparent"
          >
            {t.switchTo}
          </button>

          <button
            type="button"
            onClick={open}
            aria-label={`${t.cart} (${count})`}
            className="relative grid size-11 place-items-center rounded-full bg-white text-charcoal transition-colors hover:bg-sand md:border md:border-charcoal/15 md:bg-transparent"
          >
            <ShoppingBag className="size-5" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -end-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-charcoal px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}