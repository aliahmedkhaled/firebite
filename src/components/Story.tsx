import { useLang } from '../i18n/useLang'
import ImagePlaceholder from './ImagePlaceholder'

export default function Story() {
  const { t } = useLang()

  return (
    <section id="story" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-12 md:px-6 md:py-16">
      <div className="grid items-center gap-8 rounded-[2rem] bg-charcoal p-6 text-cream md:grid-cols-2 md:gap-12 md:p-12">
        <div className="text-start">
          <h2 className="font-display text-3xl font-black md:text-4xl">{t.story.title}</h2>
          <div className="mt-3 h-1 w-14 rounded-full bg-ember" aria-hidden="true" />
          <p className="mt-6 max-w-prose text-lg text-cream/80">{t.story.body}</p>

          <ul className="mt-8 grid gap-5">
            {t.story.points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="mt-2 size-3 shrink-0 rounded-full bg-ember" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-extrabold">{p.title}</h3>
                  <p className="text-cream/70">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ImagePlaceholder
          label={t.story.imageLabel}
          className="aspect-[4/3] w-full border-cream/20 bg-cream/10 [&_*]:text-cream/60"
        />
      </div>
    </section>
  )
}