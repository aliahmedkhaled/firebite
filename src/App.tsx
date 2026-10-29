import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'

const placeholders = ['menu', 'story']

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Offers />
        {placeholders.map((id) => (
          <section
            key={id}
            id={id}
            className="grid min-h-[60vh] scroll-mt-28 place-items-center border-t border-charcoal/10 text-2xl font-bold"
          >
            #{id}
          </section>
        ))}
      </main>
    </div>
  )
}