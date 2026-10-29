import { useRef, useState, type FormEvent } from 'react'
import { ArrowLeft } from 'lucide-react'
import { checkoutStrings } from '../i18n/checkoutStrings'
import { useLang } from '../i18n/useLang'

interface Props {
  onBack: () => void
  onPlaced: () => void
}

function toLatinDigits(s: string) {
  return s
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
}

const PHONE_RE = /^01[0125]\d{8}$/

const field =
  'mt-1 w-full rounded-2xl border border-charcoal/20 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-ember aria-[invalid=true]:border-brick'

export default function CheckoutForm({ onBack, onPlaced }: Props) {
  const { lang, t } = useLang()
  const c = checkoutStrings[lang]

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLTextAreaElement>(null)

  const nameOk = name.trim().length >= 2
  const phoneOk = PHONE_RE.test(toLatinDigits(phone).replace(/[\s-]/g, ''))
  const addressOk = address.trim().length >= 8

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    if (!nameOk) return nameRef.current?.focus()
    if (!phoneOk) return phoneRef.current?.focus()
    if (!addressOk) return addressRef.current?.focus()
    onPlaced()
  }

  const showName = submitted && !nameOk
  const showPhone = submitted && !phoneOk
  const showAddress = submitted && !addressOk

  return (
    <form onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-1 flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4 text-start">
        <div>
          <label htmlFor="co-name" className="font-semibold">
            {c.name}
          </label>
          <input
            id="co-name"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-invalid={showName}
            aria-describedby={showName ? 'co-name-err' : undefined}
            className={field}
          />
          {showName && (
            <p id="co-name-err" role="alert" className="mt-1 text-sm font-semibold text-brick">
              {c.nameErr}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="co-phone" className="font-semibold">
            {c.phone}
          </label>
          <input
            id="co-phone"
            ref={phoneRef}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            inputMode="tel"
            dir="ltr"
            autoComplete="tel"
            aria-invalid={showPhone}
            aria-describedby={showPhone ? 'co-phone-err' : 'co-phone-hint'}
            className={`${field} rtl:text-right`}
          />
          {showPhone ? (
            <p id="co-phone-err" role="alert" className="mt-1 text-sm font-semibold text-brick">
              {c.phoneErr}
            </p>
          ) : (
            <p id="co-phone-hint" className="mt-1 text-sm text-charcoal/60">
              {c.phoneHint}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="co-address" className="font-semibold">
            {c.address}
          </label>
          <textarea
            id="co-address"
            ref={addressRef}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={3}
            autoComplete="street-address"
            aria-invalid={showAddress}
            aria-describedby={showAddress ? 'co-address-err' : undefined}
            className={field}
          />
          {showAddress && (
            <p id="co-address-err" role="alert" className="mt-1 text-sm font-semibold text-brick">
              {c.addressErr}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="co-notes" className="font-semibold">
            {c.notes}
          </label>
          <textarea
            id="co-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder={c.notesHint}
            className={field}
          />
        </div>

        <div>
          <p className="font-semibold">{c.payment}</p>
          <div className="mt-1 rounded-2xl border-2 border-ember bg-ember/10 px-4 py-3 font-semibold">
            {c.cod}
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal/10 px-5 py-4">
        <button
          type="submit"
          className="min-h-14 w-full rounded-full bg-ember text-lg font-bold text-white transition-colors hover:bg-ember-dark"
        >
          {c.placeOrder}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 font-semibold text-charcoal/70 hover:text-charcoal"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
          {c.back}
        </button>
        <p className="mt-2 text-center text-xs text-charcoal/60">{c.protoNote}</p>
        <span className="sr-only">{t.cartUi.total}</span>
      </div>
    </form>
  )
}