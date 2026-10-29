import { offers } from '../data/offers'
import { useLang } from '../i18n/useLang'
import AddButton from './AddButton'
import Picture from './Picture'

export default function Offers() {
  const { lang, t } = useLang()
  const nf = new Intl.NumberFormat(lang === 'ar' ? 'ar-EG-u-nu-latn' : 'en-US', {
    maximumFractionDigits: 0,
  })

  return (
    <section id="offers" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-8 md:px-6 md:py-12">
      <h2 className="font-display text-3xl font-black md:text-4xl">{t.offers.title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />

      <ul className="-mx-4 mt-6 flex snap-x gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] scroll-px-4 md:-mx-6 md:px-6 md:scroll-px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
        {offers.map((o, i) => {
          const discount = Math.round((1 - o.price / o.oldPrice) * 100)
          return (
            <li
              key={o.id}
              className="relative w-[82%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[48%] lg:w-auto"
            >
              <Picture
                name={`offer-${i + 1}`}
                widths={[480, 800]}
                aspect="landscape"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 48vw, 82vw"
                alt={o.title[lang]}
                priority={i === 0}
                className="aspect-[3/2] w-full"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/30 to-transparent"
              />

              <span className="absolute start-4 top-4 rounded-full bg-brick px-3 py-1 text-sm font-bold text-white">
                {discount}% {t.offers.off}
              </span>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-start text-white">
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-extrabold leading-tight">{o.title[lang]}</h3>
                  <p className="mt-1 line-clamp-1 text-sm text-white/85">{o.description[lang]}</p>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="text-2xl font-black">
                      {nf.format(o.price)} <span className="text-base font-bold">{t.currency}</span>
                    </span>
                    <span className="text-sm text-white/75 line-through">{nf.format(o.oldPrice)}</span>
                  </p>
                </div>

                <AddButton
                  label={`${t.offers.addToOrder}: ${o.title[lang]}`}
                  product={{
                    id: o.id,
                    name: o.title,
                    price: o.price,
                    image: `/images/offer-${i + 1}-480.webp`,
                  }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}