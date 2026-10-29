import { useState } from 'react'
import {
  Beef,
  Cookie,
  CupSoda,
  Drumstick,
  LayoutGrid,
  Salad,
  Sandwich,
  type LucideIcon,
} from 'lucide-react'
import { categories } from '../data/categories'
import { menuItems } from '../data/menu'
import { menuStrings } from '../i18n/menuStrings'
import { useLang } from '../i18n/useLang'
import AddButton from './AddButton'
import Picture from './Picture'

const icons: Record<string, LucideIcon> = {
  all: LayoutGrid,
  burgers: Beef,
  chicken: Drumstick,
  sandwiches: Sandwich,
  sides: Salad,
  drinks: CupSoda,
  desserts: Cookie,
}

export default function Menu() {
  const { lang, t } = useLang()
  const m = menuStrings[lang]
  const [active, setActive] = useState('all')
  const nf = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {
    maximumFractionDigits: 0,
  })

  const filters = [
    { id: 'all', label: m.all },
    ...categories.map((c) => ({ id: c.id, label: c.name[lang] })),
  ]
  const visible = active === 'all' ? menuItems : menuItems.filter((i) => i.category === active)

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 md:px-6 md:py-16">
      <h2 className="font-display text-3xl font-black md:text-4xl">{t.categories.title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
        {filters.map((f) => {
          const Icon = icons[f.id]
          const isActive = f.id === active
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(f.id)}
              className={`flex min-h-11 shrink-0 items-center gap-2 rounded-full px-5 font-semibold transition-colors ${
                isActive ? 'bg-ember text-white' : 'bg-sand hover:bg-charcoal/10'
              }`}
            >
              <Icon className="size-5" aria-hidden="true" />
              {f.label}
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {m.items}
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((item) => (
          <li
            key={item.id}
            className="relative flex flex-col rounded-3xl bg-sand p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10"
          >
            <Picture
              name={item.image}
              widths={[320, 640]}
              aspect="square"
              sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
              alt={item.name[lang]}
              className={`aspect-square w-full rounded-2xl ${item.soldOut ? 'opacity-50 grayscale' : ''}`}
            />

            {item.bestseller && !item.soldOut && (
              <span className="absolute start-5 top-5 rounded-full bg-charcoal px-3 py-1 text-xs font-bold text-white">
                {t.featured.bestseller}
              </span>
            )}

            <div className="flex flex-1 flex-col px-2 pb-2 pt-4 text-start">
              <h3 className="font-display text-lg font-extrabold leading-snug">{item.name[lang]}</h3>
              <p className="mt-1 flex-1 text-sm text-charcoal/70">{item.description[lang]}</p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-xl font-black text-ember">
                  {nf.format(item.price)} <span className="text-sm font-bold">{t.currency}</span>
                </p>

                {item.soldOut ? (
                  <span className="rounded-full bg-charcoal/10 px-4 py-2 text-sm font-bold text-charcoal/60">
                    {m.soldOut}
                  </span>
                ) : (
                  <AddButton
                    label={`${t.featured.addToOrder}: ${item.name[lang]}`}
                    product={{
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: `/images/${item.image}-320.webp`,
                    }}
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}