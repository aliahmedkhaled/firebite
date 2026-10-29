import { ImageIcon } from 'lucide-react'

interface Props {
  label: string
  className?: string
}

export default function ImagePlaceholder({ label, className = '' }: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`grid place-items-center rounded-3xl border-2 border-dashed border-charcoal/20 bg-sand ${className}`}
    >
      <div className="flex flex-col items-center gap-2 text-charcoal/50">
        <ImageIcon className="size-10" aria-hidden="true" />
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </div>
  )
}