import Categories from './components/Categories'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Offers />
        <Categories />
        <section
          id="story"
          className="grid min-h-[60vh] scroll-mt-28 place-items-center border-t border-charcoal/10 text-2xl font-bold"
        >
          #story
        </section>
      </main>
    </div>
  )
}