import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
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
          <Menu />
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