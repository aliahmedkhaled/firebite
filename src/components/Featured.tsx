import { dishes } from '../data/dishes'
import { useLang } from '../i18n/useLang'
import AddButton from './AddButton'
import Picture from './Picture'

export default function Featured() {
  const { lang, t } = useLang()
  const nf = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {
    maximumFractionDigits: 0,
  })

  return (
    <section id="featured" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 md:px-6 md:py-16">
      <h2 className="font-display text-3xl font-black md:text-4xl">{t.featured.title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dishes.map((d, i) => (
          <li
            key={d.id}
            className="relative flex flex-col rounded-3xl bg-sand p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10"
          >
            <Picture
              name={`dish-${i + 1}`}
              widths={[320, 640]}
              aspect="square"
              sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 100vw"
              alt={d.name[lang]}
              className="aspect-square w-full rounded-2xl"
            />

            {d.bestseller && (
              <span className="absolute start-5 top-5 rounded-full bg-charcoal px-3 py-1 text-xs font-bold text-white">
                {t.featured.bestseller}
              </span>
            )}

            <div className="flex flex-1 flex-col px-2 pb-2 pt-4 text-start">
              <h3 className="font-display text-lg font-extrabold leading-snug">{d.name[lang]}</h3>
              <p className="mt-1 flex-1 text-sm text-charcoal/70">{d.description[lang]}</p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-xl font-black text-ember">
                  {nf.format(d.price)} <span className="text-sm font-bold">{t.currency}</span>
                </p>
                <AddButton
                  label={`${t.featured.addToOrder}: ${d.name[lang]}`}
                  product={{
                    id: d.id,
                    name: d.name,
                    price: d.price,
                    image: `/images/dish-${i + 1}-320.webp`,
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}