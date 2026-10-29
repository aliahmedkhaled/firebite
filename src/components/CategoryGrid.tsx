import { categories } from '../data/categories'
import { menuStrings } from '../i18n/menuStrings'
import { useLang } from '../i18n/useLang'
import { scrollToMenu } from '../lib/scrollToMenu'
import Picture from './Picture'

interface Props {
  active: string
  onSelect: (id: string) => void
}

export default function CategoryGrid({ active, onSelect }: Props) {
  const { lang } = useLang()
  const m = menuStrings[lang]

  return (
    <section id="categories" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-8 md:px-6 md:py-12">
      <h2 className="font-display text-3xl font-black md:text-4xl">{m.explore}</h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />

      <ul className="mt-6 grid grid-cols-3 gap-3 md:gap-4 lg:grid-cols-6">
        {categories.map((c) => {
          const isActive = c.id === active
          return (
            <li key={c.id}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  onSelect(isActive ? 'all' : c.id)
                  scrollToMenu()
                }}
                className={`flex h-full w-full flex-col items-center gap-2 rounded-2xl p-2 text-center transition-all hover:-translate-y-0.5 md:p-3 ${
                  isActive ? 'bg-charcoal text-white ring-2 ring-ember' : 'bg-sand'
                }`}
              >
                <span className="font-display text-sm font-extrabold leading-tight md:text-base">
                  {c.name[lang]}
                </span>
                <Picture
                  name={c.image}
                  widths={[320, 640]}
                  aspect="square"
                  sizes="(min-width: 1024px) 170px, 30vw"
                  alt=""
                  className="aspect-square w-full rounded-xl"
                />
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}