import { ArrowRight, Clock, Flame } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import Picture from './Picture'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative overflow-hidden">
      {/* بقعة ضوء برتقالي ناعمة في الخلفية */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -end-40 -top-40 size-[34rem] rounded-full bg-ember/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-10 md:grid-cols-[1.05fr_1fr] md:gap-8 md:px-6 md:py-20">
        <div className="text-start">
          <p className="mb-5 inline-block rounded-full bg-sand px-4 py-1.5 text-sm font-semibold">
            {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-6xl font-black leading-[1.2] md:text-8xl md:leading-[1.1]">
            {t.hero.titleA}
            <span className="block text-ember">{t.hero.titleB}</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-charcoal/75 md:text-xl">{t.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex min-h-14 items-center gap-2 rounded-full bg-ember ps-8 pe-6 text-lg font-bold text-white shadow-lg shadow-ember/30 transition-all hover:-translate-y-0.5 hover:bg-ember-dark"
            >
              {t.hero.primaryCta}
              <ArrowRight className="size-5 rtl:rotate-180" aria-hidden="true" />
            </a>
            <a
              href="#offers"
              className="inline-flex min-h-14 items-center rounded-full border border-charcoal/20 px-7 font-semibold transition-colors hover:bg-sand"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative order-first md:order-last">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-charcoal/20">
            <Picture
              name="hero"
              widths={[480, 960]}
              aspect="square"
              sizes="(min-width: 768px) 520px, 100vw"
              alt={t.hero.imageLabel}
              priority
              className="aspect-square w-full"
            />
            <div
              aria-hidden="true"
              className="absolute -end-10 -top-10 size-28 rounded-full bg-cream"
            />
          </div>

          <div className="absolute start-3 top-6 flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold shadow-lg md:-start-6">
            <Flame className="size-4 text-ember" aria-hidden="true" />
            {t.hero.chipA}
          </div>
          <div className="absolute bottom-6 end-3 flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-bold shadow-lg md:-end-4">
            <Clock className="size-4 text-ember" aria-hidden="true" />
            {t.hero.chipB}
          </div>
        </div>
      </div>
    </section>
  )
}