import { Search } from 'lucide-react'
import { menuStrings } from '../i18n/menuStrings'
import { useLang } from '../i18n/useLang'
import { scrollToMenu } from '../lib/scrollToMenu'

interface Props {
  id: string
  query: string
  onQuery: (value: string) => void
  className?: string
}

export default function SearchBar({ id, query, onQuery, className = '' }: Props) {
  const { lang } = useLang()
  const m = menuStrings[lang]

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        ;(document.activeElement as HTMLElement | null)?.blur()
        scrollToMenu()
      }}
      className={className}
    >
      <label htmlFor={id} className="sr-only">
        {m.searchLabel}
      </label>
      <div className="flex items-center gap-3 rounded-full border border-charcoal/20 bg-white px-4 focus-within:border-ember focus-within:ring-2 focus-within:ring-ember">
        <Search className="size-5 shrink-0 text-charcoal/60" aria-hidden="true" />
        <input
          id={id}
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={m.searchPlaceholder}
          autoComplete="off"
          enterKeyHint="search"
          className="min-h-12 w-full bg-transparent text-base outline-none placeholder:text-charcoal/65"
        />
      </div>
    </form>
  )
}