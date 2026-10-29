import Categories from './components/Categories'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import Story from './components/Story'

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Offers />
        <Categories />
        <Featured />
        <Story />
      </main>
      <Footer />
    </div>
  )
}