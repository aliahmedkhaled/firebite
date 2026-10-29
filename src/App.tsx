import { useState } from 'react'
import BackgroundLock from './components/BackgroundLock'
import CartDrawer from './components/CartDrawer'
import CategoryGrid from './components/CategoryGrid'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Offers from './components/Offers'
import Reveal from './components/Reveal'
import SearchBar from './components/SearchBar'
import Story from './components/Story'
import { useLang } from './i18n/useLang'

export default function App() {
  const { lang } = useLang()
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')

  return (
    <>
      <div id="app-content">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          {lang === 'ar' ? 'تخطي إلى المحتوى' : 'Skip to content'}
        </a>

        <div id="top" className="pb-24 md:pb-0">
          <Header query={query} onQuery={setQuery} />
          <main id="main" tabIndex={-1} className="outline-none">
            <div className="mx-auto max-w-6xl px-4 pt-4 md:hidden">
              <SearchBar id="search-mobile" query={query} onQuery={setQuery} />
            </div>

            <Offers />
            <Reveal>
              <CategoryGrid active={category} onSelect={setCategory} />
            </Reveal>
            <Reveal>
              <Menu category={category} onCategory={setCategory} query={query} onQuery={setQuery} />
            </Reveal>
            <Reveal>
              <Story />
            </Reveal>
          </main>
          <Footer />
        </div>
      </div>

      <CartDrawer />
      <BackgroundLock />
    </>
  )
}