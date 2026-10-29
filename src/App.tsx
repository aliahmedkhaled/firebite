import BackgroundLock from './components/BackgroundLock'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Offers from './components/Offers'
import Reveal from './components/Reveal'
import Story from './components/Story'
import { useLang } from './i18n/useLang'

export default function App() {
  const { lang } = useLang()

  return (
    <>
      <div id="app-content">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          {lang === 'ar' ? 'تخطي إلى المحتوى' : 'Skip to content'}
        </a>

        <div id="top">
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
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
        </div>
      </div>

      {/* برّه app-content عشان ما يتعطّلش لما السلة تتفتح */}
      <CartDrawer />
      <BackgroundLock />
    </>
  )
}