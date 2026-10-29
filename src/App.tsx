import CartDrawer from './components/CartDrawer'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import Reveal from './components/Reveal'
import Story from './components/Story'

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Offers />
        </Reveal>
        <Reveal>
          <Categories />
        </Reveal>
        <Reveal>
          <Featured />
        </Reveal>
        <Reveal>
          <Story />
        </Reveal>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}