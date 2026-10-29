import { ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/useLang'
import Picture from './Picture'
export default function Hero() {
  const { t } = useLang()

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-8 md:grid-cols-2 md:gap-12 md:px-6 md:py-16">
      <div className="text-start">
        <p className="mb-4 inline-block rounded-full bg-sand px-4 py-1.5 text-sm font-semibold">
          {t.hero.eyebrow}
        </p>

        <h1 className="font-display text-5xl font-black leading-[1.15] md:text-7xl">
          {t.hero.title}
        </h1>

        <p className="mt-5 max-w-md text-lg text-charcoal/75">{t.hero.subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#menu"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ember ps-7 pe-5 font-bold text-white transition-colors hover:bg-ember-dark"
          >
            {t.hero.primaryCta}
            <ArrowRight className="size-5 rtl:rotate-180" aria-hidden="true" />
          </a>
          <a
            href="#offers"
            className="inline-flex min-h-12 items-center rounded-full border border-charcoal/20 px-6 font-semibold transition-colors hover:bg-sand"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>

      {/* الصورة: فوق على الموبايل، وجنب النص على الديسكتوب */}
      <div className="relative order-first overflow-hidden rounded-3xl md:order-last">
        <Picture
  name="hero"
  widths={[480, 960]}
  aspect="square"
  sizes="(min-width: 768px) 560px, 100vw"
  alt={t.hero.imageLabel}
  priority
  className="aspect-[4/3] w-full md:aspect-square"
/>
      </div>
    </section>
  )
}