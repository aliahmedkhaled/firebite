import { Plus } from 'lucide-react'
import { useCart } from '../cart/useCart'
import { offers } from '../data/offers'
import { useLang } from '../i18n/useLang'
import Picture from './Picture'

export default function Offers() {
  const { lang, t } = useLang()
  const { add } = useCart()
  const nf = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {
    maximumFractionDigits: 0,
  })

  return (
    <section id="offers" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 md:px-6 md:py-16">
      <h2 className="font-display text-3xl font-black md:text-4xl">{t.offers.title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o, i) => {
          const discount = Math.round((1 - o.price / o.oldPrice) * 100)
          return (
            <li key={o.id} className="relative overflow-hidden rounded-3xl bg-sand p-4">
              <Picture
                name={`offer-${i + 1}`}
                widths={[480, 800]}
                aspect="landscape"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                alt={o.title[lang]}
                className="aspect-[4/3] w-full rounded-2xl"
              />

              <span className="absolute start-6 top-6 rounded-full bg-brick px-3 py-1 text-sm font-bold text-white">
                {discount}% {t.offers.off}
              </span>

              <div className="mt-4 text-start">
                <h3 className="font-display text-xl font-extrabold">{o.title[lang]}</h3>
                <p className="mt-1 text-charcoal/70">{o.description[lang]}</p>

                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-sm text-charcoal/50 line-through">
                      {nf.format(o.oldPrice)} {t.currency}
                    </p>
                    <p className="text-2xl font-black text-ember">
                      {nf.format(o.price)} <span className="text-base font-bold">{t.currency}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      add({
                        id: o.id,
                        name: o.title,
                        price: o.price,
                        image: `/images/offer-${i + 1}-480.webp`,
                      })
                    }
                    aria-label={`${t.offers.addToOrder}: ${o.title[lang]}`}
                    className="grid size-12 place-items-center rounded-full bg-ember text-white transition-colors hover:bg-ember-dark"
                  >
                    <Plus className="size-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}