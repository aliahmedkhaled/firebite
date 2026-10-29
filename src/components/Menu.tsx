import { categories } from '../data/categories'
import { menuItems } from '../data/menu'
import { menuStrings } from '../i18n/menuStrings'
import { useLang } from '../i18n/useLang'
import AddButton from './AddButton'
import Picture from './Picture'

interface Props {
  category: string
  onCategory: (id: string) => void
  query: string
  onQuery: (value: string) => void
}

// توحيد الحروف العربية عشان البحث يلقط "ساندويتش" و"سانديتش" و"أجنحة" و"اجنحه"
function norm(s: string) {
  return s
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0640]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .trim()
}

export default function Menu({ category, onCategory, query, onQuery }: Props) {
  const { lang, t } = useLang()
  const m = menuStrings[lang]
  const nf = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {
    maximumFractionDigits: 0,
  })

  const q = norm(query)
  const visible = menuItems.filter((i) => {
    if (q) return norm(`${i.name[lang]} ${i.description[lang]}`).includes(q)
    return category === 'all' || i.category === category
  })

  const activeCat = categories.find((c) => c.id === category)
  const heading = activeCat && !q ? activeCat.name[lang] : m.menuTitle
  const isFiltered = category !== 'all' || q !== ''

  function reset() {
    onCategory('all')
    onQuery('')
  }

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-black md:text-4xl">{heading}</h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />
        </div>
        {isFiltered && (
          <button
            type="button"
            onClick={reset}
            className="min-h-11 shrink-0 font-semibold underline underline-offset-4 hover:text-ember"
          >
            {m.showAll}
          </button>
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {m.items}
      </p>

      {visible.length === 0 ? (
        <p role="status" className="mt-10 text-center text-lg text-charcoal/70">
          {m.noResults}
        </p>
      ) : (
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
                    <span className="rounded-full bg-charcoal/10 px-4 py-2 text-sm font-bold text-charcoal/70">
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
      )}
    </section>
  )
}