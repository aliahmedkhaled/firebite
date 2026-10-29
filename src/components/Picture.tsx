interface Props {
  name: string
  widths: [number, number]
  aspect: 'square' | 'landscape'
  sizes: string
  alt: string
  priority?: boolean
  className?: string
}

export default function Picture({
  name,
  widths,
  aspect,
  sizes,
  alt,
  priority = false,
  className = '',
}: Props) {
  const [small, large] = widths
  const height = aspect === 'square' ? large : Math.round((large * 3) / 4)

  return (
    <img
      src={`/images/${name}-${large}.webp`}
      srcSet={`/images/${name}-${small}.webp ${small}w, /images/${name}-${large}.webp ${large}w`}
      sizes={sizes}
      alt={alt}
      width={large}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={`object-cover ${className}`}
    />
  )
}