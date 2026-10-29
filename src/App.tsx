import { useLang } from './i18n/useLang'

export default function App() {
  const { t, toggleLang } = useLang()

  return (
    <main className="min-h-screen grid place-items-center px-6">
      <div className="text-start">
        <h1 className="font-display text-6xl font-black">
          FIRE<span className="text-ember">BITE</span>
        </h1>
        <p className="mt-3 text-lg">{t.tagline}</p>

        <div className="mt-8 flex gap-3">
          <button className="rounded-full bg-ember ps-6 pe-4 py-3 font-bold text-white hover:bg-ember-dark">
            {t.orderNow}
          </button>
          <button
            onClick={toggleLang}
            className="rounded-full border border-charcoal/20 px-5 py-3 font-semibold hover:bg-sand"
          >
            {t.switchTo}
          </button>
        </div>
      </div>
    </main>
  )
}