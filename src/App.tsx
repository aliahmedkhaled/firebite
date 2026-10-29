import Header from './components/Header'

const sections = ['offers', 'menu', 'story']

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        {sections.map((id) => (
          <section
            key={id}
            id={id}
            className="grid min-h-[80vh] scroll-mt-28 place-items-center border-b border-charcoal/10 text-2xl font-bold"
          >
            #{id}
          </section>
        ))}
      </main>
    </div>
  )
}