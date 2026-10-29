import sharp from 'sharp'
import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const SRC = 'raw-images'
const OUT = 'public/images'

// w:h = نسبة القص، widths = المقاسات اللي هتتولّد
const specs = {
  hero: { w: 1, h: 1, widths: [480, 960] },
  offer: { w: 4, h: 3, widths: [480, 800] },
  dish: { w: 1, h: 1, widths: [320, 640] },
  story: { w: 4, h: 3, widths: [640, 1000] },
}

const expected = [
  'hero', 'offer-1', 'offer-2', 'offer-3',
  'dish-1', 'dish-2', 'dish-3', 'dish-4', 'story',
]

await mkdir(OUT, { recursive: true })
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
const found = new Set()

for (const file of files) {
  const name = path.parse(file).name
  const spec = specs[name.split('-')[0]]
  if (!spec) {
    console.warn(`SKIP     ${file} (اسم مش معروف)`)
    continue
  }
  found.add(name)

  for (const width of spec.widths) {
    const height = Math.round((width * spec.h) / spec.w)
    const out = path.join(OUT, `${name}-${width}.webp`)
    await sharp(path.join(SRC, file))
      .rotate()
      .resize(width, height, { fit: 'cover', position: 'centre' })
      .webp({ quality: 78 })
      .toFile(out)
    const { size } = await stat(out)
    console.log(`OK       ${out}  ${(size / 1024).toFixed(0)} KB`)
  }
}

for (const n of expected) {
  if (!found.has(n)) console.warn(`MISSING  ${n}`)
}