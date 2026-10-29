import { Clock, MapPin, Phone, Flame } from 'lucide-react'
import { useLang } from '../i18n/useLang'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const items = [
    { Icon: Clock, title: t.footer.hoursTitle, value: t.footer.hours, ltr: false },
    { Icon: MapPin, title: t.footer.addressTitle, value: t.footer.address, ltr: false },
    { Icon: Phone, title: t.footer.contactTitle, value: t.footer.phone, ltr: true },
  ]

  return (
    <footer className="border-t border-charcoal/10 bg-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="text-start">
          <a href="#top" className="flex items-center gap-1.5 font-display text-2xl font-black">
            <Flame className="size-6 text-ember" aria-hidden="true" />
            <span>
              FIRE<span className="text-ember">BITE</span>
            </span>
          </a>
          <p className="mt-3 text-sm text-charcoal/70">{t.footer.demoNote}</p>
        </div>

        {items.map(({ Icon, title, value, ltr }) => (
          <div key={title} className="flex gap-3 text-start">
            <Icon className="mt-1 size-5 shrink-0 text-ember" aria-hidden="true" />
            <div>
              <h2 className="font-display font-extrabold">{title}</h2>
              <p
                className="mt-1 text-charcoal/75"
                dir={ltr ? 'ltr' : undefined}
                style={ltr ? { unicodeBidi: 'isolate' } : undefined}
              >
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-charcoal/10 py-4 text-center text-sm text-charcoal/60">
        © {year} FIREBITE. {t.footer.rights}
      </div>
    </footer>
  )
}