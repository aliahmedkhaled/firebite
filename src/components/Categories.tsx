import { Beef, Cookie, CupSoda, Drumstick, Salad, Sandwich, type LucideIcon } from 'lucide-react'
import { categories } from '../data/categories'
import { useLang } from '../i18n/useLang'

// الأيقونات مؤقتة لحد ما نحط صور التصنيفات الحقيقية
const icons: Record<string, LucideIcon> = {
  burgers: Beef,
  chicken: Drumstick,
  sandwiches: Sandwich,
  sides: Salad,
  drinks: CupSoda,
  desserts: Cookie,
}

export default function Categories() {
  const { lang, t } = useLang()

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 md:px-6 md:py-16">
      <h2 className="font-display text-3xl font-black md:text-4xl">{t.categories.title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />

      <ul className="mt-8 flex snap-x gap-3 overflow-x-auto pb-3 [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6">
        {categories.map((c) => {
          const Icon = icons[c.id]
          return (
            <li key={c.id} className="w-36 shrink-0 snap-start md:w-auto">
              <a
                href="#menu"
                className="group flex h-full flex-col items-center gap-4 rounded-3xl bg-sand px-3 py-6 text-center transition-colors hover:bg-ember hover:text-white"
              >
                <span className="grid size-20 place-items-center rounded-full bg-cream text-ember transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <Icon className="size-9" aria-hidden="true" />
                </span>
                <span className="font-display text-lg font-extrabold leading-tight">{c.name[lang]}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}